import React from "react";
import { ListGroup, Row, Col } from "react-bootstrap";

const dateFormater = (value: Date) => {
  return new Date(value).toJSON().slice(0, 10);
};

const showItems = (items:number, data:object) => {
    const itemsList: JSX.Element[] = [];

    for (var i = 0; i < items; i++) {
      let el = data[i];
      if (el) {
        itemsList.push(
          <ListGroup.Item key={i}>
            <Row>
              <Col xs="4">
                <small className="font-italic">Sha</small>
              </Col>
              <Col xs="8" className="text-right">
                <small>{el["sha"].toString().slice(0, 8)}</small>
              </Col>
            </Row>
            <Row>
              <Col xs="4">
                <small className="font-italic">Author</small>
              </Col>
              <Col xs="8" className="text-right">
                <small>{el["commit"].author.name}</small>
              </Col>
            </Row>
            <Row>
              <Col xs="4">
                <small className="font-italic">Message</small>
              </Col>
              <Col xs="8" className="text-right">
                <small>{el["commit"].message}</small>
              </Col>
            </Row>
            <Row>
              <Col xs="4">
                <small className="font-italic">Date</small>
              </Col>
              <Col xs="8" className="text-right">
                <small>{dateFormater(el["commit"].author.date)}</small>
              </Col>
            </Row>
          </ListGroup.Item>
        );
      }
    }
    return itemsList;
  };

  export default showItems;