import React, { useState, useEffect } from "react";
import { Card, Row, Col } from "react-bootstrap";
import { TiUser, TiBook } from "react-icons/ti";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../redux";
import { User as UserType } from "../redux/userReducer";

const User: React.FC = () => {
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [followers, setFollowers] = useState(0);
  const [following, setFollowing] = useState(0);
  const [repos, setRepos] = useState(0);
  const [avatar, setAvatar] = useState("");
  const [profileBio, setBio] = useState("");

  const { user } = useSelector((state: RootState) => state.userReducer);

  useEffect(() => {
    setData(user);
  }, [user]);

  const setData = (user: UserType) => {
    setName(user.name);
    setUserName(user.login);
    setFollowers(user.followers);
    setFollowing(user.following);
    setRepos(user.public_repos);
    setAvatar(user.avatar_url);
    setBio(user.bio);
  };

  const cardFooterData = [
    { prop: followers, info: "followers", img: <TiUser /> },
    { prop: repos, info: "repos", img: <TiBook /> },
    { prop: following, info: "following", img: <TiUser /> }
  ];

  return (
    <Card className="card-user">
      <div className="image">
        <img alt="..." src={require("../assets/img/damir-bosnjak.jpg")} />
      </div>
      <Card.Body>
        <div className="author">
          <a href={`https://github.com/${userName}`}>
            <img alt="..." className="avatar border-gray" src={avatar} />
            <h5 className="title">{name}</h5>
          </a>
          <p className="description">{userName}</p>
        </div>
        <p className="description text-center">{profileBio}</p>
      </Card.Body>
      <Card.Footer>
        <hr />
        <div className="button-container">
          <Row>
            {cardFooterData.map((el, index) => {
              return (
                <Col key={index} className="ml-auto" lg="3" md="6" xs="6">
                  <Link to={`/git_viewer/${userName}/${el.info}`}>
                    <span>
                      {el.img}
                      {el.prop}
                    </span>
                  </Link>
                </Col>
              );
            })}
          </Row>
        </div>
      </Card.Footer>
    </Card>
  );
}

export default User;
