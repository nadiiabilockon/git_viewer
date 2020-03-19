import React, { useState, useEffect } from "react";
import Loader from "./Loader";
import { getReposDetails, getCommits } from "../services/APIsersices";
import { Card, ListGroup } from "react-bootstrap";
import { Commit } from "../models//interfaces";

export default function Commits(props: {
  match: { params: { owner: string; repo: string } };
}) {
  const [repo, setBranchInfo] = useState({});
  const [commits, setCommits] = useState<Commit[]>([]);
  const { owner, repo: repoName } = props.match.params;

  useEffect(() => {
    getReposDetails(owner, repoName).then(data => setBranchInfo(data.data));
    getCommits(owner, repoName).then(data => setCommits(data.data));
  }, []);

  const showCommits = (index: string | number) => {
    return (
      <ListGroup.Item key={index}>
        {commits[index]["commit"]["message"]}
      </ListGroup.Item>
    );
  };

  if (!Object.keys(repo).length) return <Loader />;

  return (
    <Card>
      <Card.Header>
        <Card.Title>{repoName} commits</Card.Title>
      </Card.Header>
      <Card.Body>
        {!Object.keys(commits).length ? (
          <div>No data</div>
        ) : (
          <ListGroup variant="flush">
            {Object.keys(commits).map(showCommits)}
          </ListGroup>
        )}
      </Card.Body>
    </Card>
  );
}
