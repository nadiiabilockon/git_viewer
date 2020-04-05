import React from "react";
import { Row, Col } from "react-bootstrap";

export default function CommitItemElement(props: {
  title: string;
  content: string;
}) {
  return (
    <Row>
      <Col xs="4">
        <small className="font-italic">{props.title}</small>
      </Col>
      <Col xs="8" className="text-right">
        <small>{props.content}</small>
      </Col>
    </Row>
  );
}
