import React from "react";
import { Row, Col } from "react-bootstrap";

export default function ConectionsInfoItem({ login, avatar }) {
  return (
    <Row>
      <Col md="1" xs="3">
        <div className="avatar">
          <a href={`https://github.com/${login}`}>
            <img
              alt="avatar"
              className="img-circle img-no-padding img-responsive"
              src={avatar}
            />
          </a>
        </div>
      </Col>
      <Col md="11" xs="9">
        {login}
      </Col>
    </Row>
  );
}
