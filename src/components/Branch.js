import React, { useState, useEffect } from "react";
import Loader from "../App/layout/Loader/index";
import { getBranchDetails, getCommits } from "../services/APIsersices";
import { Card, ListGroup } from "react-bootstrap";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";

export default function Branch(props) {
  const [branch, setBranchInfo] = useState({});
  const [commits, setCommits] = useState({});
  const { owner, info, branch: branchName } = props.match.params;

  useEffect(() => {
    getBranchDetails(owner, branchName).then(data => setBranchInfo(data.data));
    getCommits(owner, branchName).then(data => setCommits(data.data));
  }, []);

  console.log(commits);

  const showCommits = index => {
    return (
      <ListGroup.Item>{commits[index]["commit"]["message"]}</ListGroup.Item>
    );
  };

  if (!Object.keys(branch).length) return <Loader />;

  return (
    <Card>
      <BreadcrumbsItem to={`/git_viewer/${owner}/${info}`}>
        {info}
      </BreadcrumbsItem>
      <Card.Header>
        <Card.Title tag="h4">{branch.name}</Card.Title>
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
