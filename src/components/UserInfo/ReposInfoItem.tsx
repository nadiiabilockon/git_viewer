import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function ReposInfoItem({
  repoName,
  defaultBranch,
  language,
  login,
  title,
}) {
  return (
    <Row>
      <Col>
        <Row>{repoName}</Row>
        <Row>
          <Col md="5" xs="5">
            <span className="text-muted">
              <small>Default branch</small>
              <br />
              <small>Language</small>
            </span>
          </Col>
          <Col md="7" xs="7" className="text-right">
            <small>{defaultBranch}</small>
            <br />
            <small>{language}</small>
          </Col>
        </Row>
        <Row className="justify-content-between">
          <Col>
            {/* <Link
                      className="mt-2 btn btn-outline-info btn-sm"
                      to={`/git_viewer/${user.login}/${repoName}/compare/branches`}
                    >
                      Compare branches
                    </Link> */}
          </Col>
          <Col className="text-right">
            <Link
              className="mt-2 btn btn-outline-info btn-sm"
              to={`/git_viewer/${login}/${title}/${repoName}/branches`}
            >
              Compare commits
            </Link>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
