import React from "react";
import { ListGroup } from "react-bootstrap";
import { UserDetails } from "../../models/interfaces";
import ReposInfoItem from "./ReposInfoItem";
import ConectionsInfoItem from "./ConectionsInfoItem";

export const InfoItems = ({ userDetails, title, user }) => {
  return userDetails.map((el: UserDetails, index: string | number) => {
    return (
      <ListGroup.Item key={index}>
        {title !== "repos" ? (
          <ConectionsInfoItem login={el.login} avatar={el.avatar_url} />
        ) : (
          <ReposInfoItem
            repoName={el.name}
            defaultBranch={el.default_branch}
            language={el.language}
            login={user.login}
            title={title}
          />
        )}
      </ListGroup.Item>
    );
  });
};
