import React from "react";
import { Button, Card, Row, Col } from "react-bootstrap";

export default function InfoList(props) {
  return (
    <Card>
      <Card.Header>
        <Card.Title tag="h4">
          {props.header.replace(/^\w/, c => c.toUpperCase())}
        </Card.Title>
      </Card.Header>
      <Card.Body>
        <ul className="list-unstyled team-members">
          {props.info.map((el, index) => {
            return (
              <li key={index}>
                {props.header !== "repos" ? (
                  <Row>
                    <Col md="2" xs="2">
                      <div className="avatar">
                        <img
                          alt="..."
                          className="img-circle img-no-padding img-responsive"
                          src={el.avatar_url}
                        />
                      </div>
                    </Col>
                    <Col md="7" xs="7">
                      {el.login}
                    </Col>
                  </Row>
                ) : (
                  <Row>
                    <Col>
                      {el.name}
                      <Row>
                        <Col md="5" xs="5">
                          <span className="text-muted">
                            <small>Default branch</small>
                            <br />
                            <small>Language</small>
                          </span>
                        </Col>
                        <Col md="7" xs="7" className="text-right">
                          <small>{el.default_branch}</small>
                          <br />
                          <small>{el.language}</small>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                )}
              </li>
            );
          })}
        </ul>
      </Card.Body>
    </Card>
  );
}
