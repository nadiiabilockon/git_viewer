import React from "react";
import { ListGroup } from "react-bootstrap";

export default function Commits(props: { data: Object[] }) {

  return (
    <ListGroup variant="flush">
      {Object.keys(props.data).map((el: string, index: string | number) => {
        return (<ListGroup.Item key={index}>
          <small>{props.data[el].sha}</small> <br />
          <small>{props.data[el].commit.author.name}</small> <br />
          {props.data[el].commit.message}<br />
          <small>{props.data[el].commit.author.date}</small>
        </ListGroup.Item>)
      })}
    </ListGroup>
  );
}
