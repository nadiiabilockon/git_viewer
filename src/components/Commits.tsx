import React from "react";
import { ListGroup, Row, Col } from "react-bootstrap";

const dateFormater = (value: Date) => {
  return new Date(value).toJSON().slice(0, 10);
};

export default function Commits(props: { data: Object[] }) {
  return (
    <ListGroup variant="flush">
      {Object.keys(props.data).map((el: string, index: string | number) => {
        return (
          <ListGroup.Item key={index}>
            <Row>
              <Col xs="4">
                <small className="font-italic">Sha</small>
              </Col>
              <Col xs="8" className="text-right">
                <small>{props.data[el].sha.toString().slice(0, 8)}</small>
              </Col>
            </Row>
            <Row>
              <Col xs="4">
                <small className="font-italic">Author</small>
              </Col>
              <Col xs="8" className="text-right">
                <small>{props.data[el].commit.author.name}</small>
              </Col>
            </Row>
            <Row>
              <Col xs="4">
                <small className="font-italic">Message</small>
              </Col>
              <Col xs="8" className="text-right">
                <small>{props.data[el].commit.message}</small>
              </Col>
            </Row>
            <Row>
              <Col xs="4">
                <small className="font-italic">Date</small>
              </Col>
              <Col xs="8" className="text-right">
                <small>{dateFormater(props.data[el].commit.author.date)}</small>
              </Col>
            </Row>
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
}
