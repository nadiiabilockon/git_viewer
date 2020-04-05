import React, { useContext } from "react";
import { Card } from "react-bootstrap";
import { UserContext } from "./UserCard";

const defaultUserAvatar ="https://avatars2.githubusercontent.com/u/57936?s=460&v=4";

export default function UserCardBody() {
  const { login, name, bio, avatar_url } = useContext(UserContext);

  return (
    <Card.Body>
      <div className="author">
        <a href={`https://github.com/${login}`}>
          <img
            alt="..."
            className="avatar border-gray"
            src={avatar_url ? avatar_url : defaultUserAvatar}
          />
          <h5 className="title">{login}</h5>
        </a>
        <p className="description">{name}</p>
      </div>
      <p className="description text-center">{bio}</p>
    </Card.Body>
  );
}
