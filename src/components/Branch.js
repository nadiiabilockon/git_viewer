import React, { useState, useEffect } from "react";
import Loader from "./Loader/index";
import { getBranchDetails, getCommits } from "../services/APIsersices";
import { Card, ListGroup } from "react-bootstrap";

export default function Branch(props) {
  const [branch, setBranchInfo] = useState({});
  const [commits, setCommits] = useState({});
  const { owner, info, branch: branchName } = props.match.params;

  useEffect(() => {
    getBranchDetails(owner, branchName).then(data => setBranchInfo(data.data));
    getCommits(owner, branchName).then(data => setCommits(data.data));
  }, []);

  const showCommits = index => {
    return (
      <ListGroup.Item key={index}>
        {commits[index]["commit"]["message"]}
      </ListGroup.Item>
    );
  };

  if (!Object.keys(branch).length) return <Loader />;

  return (
    <Card>
      <Card.Header>
        <Card.Title tag="h4">{branch.name} commits</Card.Title>
      </Card.Header>{" "}
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
