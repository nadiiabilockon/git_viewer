import React from "react";
import { ListGroup } from "react-bootstrap";
import CommitItemElement from "./CommitItemElement";

const dateFormater = (value: Date) => {
  return new Date(value).toJSON().slice(0, 10);
};

const CommitItems = (items: number, data: object) => {
  const commitsList: JSX.Element[] = [];

  for (var i = 0; i < items; i++) {
    let el = data[i];
    if (el) {
      const commitDate = dateFormater(el["commit"].author.date);
      commitsList.push(
        <ListGroup.Item key={i}>
          <CommitItemElement
            title="Sha"
            content={el["sha"].toString().slice(0, 8)}
          />
          <CommitItemElement
            title="Author"
            content={el["commit"].author.name}
          />
          <CommitItemElement title="Message" content={el["commit"].message} />
          <CommitItemElement title="Date" content={commitDate} />
        </ListGroup.Item>
      );
    }
  }
  return commitsList;
};

export default CommitItems;
