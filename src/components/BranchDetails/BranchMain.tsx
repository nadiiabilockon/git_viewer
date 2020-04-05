import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Card, Row, Col } from "react-bootstrap";
import { getBranches, getCommits } from "../../services/APIsersices";
import BranchForm from "./BranchForm";
import Commits from "./Commits";
import { Commit } from "../../models/interfaces";

interface SelectValue {
  (selected: { value: string }, name: string): void;
}

type ContextProps = {
  selectOptions: { value: string; label: string }[];
  handleSelectChange: SelectValue;
  handleCommits: () => void;
  firstBranch: string;
  secondBranch: string;
};

export const BrancContext = React.createContext<Partial<ContextProps>>({});

export default function BranchMain() {
  const [branches, setNames] = useState<string[]>([]);
  const [firstBranch, setfirstBranch] = useState<string>("");
  const [secondBranch, setsecondBranch] = useState<string>("");
  const [commitsFirst, setCommitsFirst] = useState<string[]>([]);
  const [commitsSecond, setCommitsSecond] = useState<string[]>([]);

  const { owner, repo } = useParams<any>();

  useEffect(() => {
    getBranches(owner, repo).then((data) => {
      const names = data.data.map((e) => {
        return e.name;
      });
      setNames(names);
    });
  }, []);

  const handleSelectChange: SelectValue = (selected, name) => {
    if (name === "firstBranch") {
      setfirstBranch(selected.value);
    } else {
      setsecondBranch(selected.value);
    }
  };

  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
  //     e.preventDefault();
  //     getBranchesDiff(owner, repo, firstBranch, secondBranch)
  //         .then(data => {
  //             console.log(data.data)
  //         })
  // };

  function setCommits(data: any, callback: any) {
    const commits = data.map(
      (e: Commit): Commit => {
        return {
          sha: e.sha,
          commit: {
            message: e.commit.message,
            author: {
              name: e.commit.author.name,
              date: e.commit.author.date,
            },
          },
        };
      }
    );
    callback(commits);
  }

  const handleCommits = () => {
    getCommits(owner, repo, firstBranch).then((data) =>
      setCommits(data.data, setCommitsFirst)
    );
    getCommits(owner, repo, secondBranch).then((data) =>
      setCommits(data.data, setCommitsSecond)
    );
  };

  const selectOptions = branches.map((el) => {
    return { value: el, label: el };
  });

  return (
    <Card.Body>
      <Card.Subtitle className="mb-2 text-muted">Select branches</Card.Subtitle>
      <BrancContext.Provider
        value={{
          selectOptions,
          handleSelectChange,
          handleCommits,
          firstBranch,
          secondBranch,
        }}
      >
        <BranchForm />
      </BrancContext.Provider>
      <hr></hr>
      <Row>
        <Col xs="6">
          <Commits data={commitsFirst} />
        </Col>
        <Col xs="6">
          <Commits data={commitsSecond} />
        </Col>
      </Row>
    </Card.Body>
  );
}
