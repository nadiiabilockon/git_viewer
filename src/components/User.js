import React, { useState, useEffect } from "react";
import axios from "axios";

import { Button, Card, FormGroup, Form, Row, Col } from "react-bootstrap";
import { TiUser, TiBook } from "react-icons/ti";
import InfoList from './InfoList';

function User() {
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [followers, setFollowers] = useState("");
  const [following, setFollowing] = useState("");
  const [repos, setRepos] = useState("");
  const [avatar, setAvatar] = useState("");
  const [profileBio, shetBio] = useState("");
  const [userInput, setUserInput] = useState("");
  const [error, setError] = useState("");
  const [info, setInfo] = useState([]);
  const [show, toggleShow] = useState(false);

  useEffect(() => {
    axios
      .get("https://api.github.com/users/example")
      .then(data => setData(data.data))
      .catch(function(error) {
        // handle error
        console.log(error);
      });
  }, []);

  const setData = ({
    name,
    login,
    followers,
    following,
    public_repos,
    avatar_url,
    bio
  }) => {
    setName(name);
    setUserName(login);
    setFollowers(followers);
    setFollowing(following);
    setRepos(public_repos);
    setAvatar(avatar_url);
    shetBio(bio);
  };

  const handleSearch = e => {
    setUserInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .get(`https://api.github.com/users/${userInput}`)
      .then(data => {
        setData(data.data);
      })
      .catch(function(error) {
        // handle error
        console.log(error);
        setError("Not found");
      });
  };

  const handleInfo = params => {
    axios
      .get(`https://api.github.com/users/${userName}/${params}`)
      .then(data => {
        setInfo(data.data);
        toggleShow(params);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  const cardFooterData = [
    { prop: followers, info: "followers", img: <TiUser /> },
    { prop: repos, info: "repos", img: <TiBook /> },
    { prop: following, info: "following", img: <TiUser /> }
  ];

  return (
    <>
      <div className="content">
        <Row>
          <Col md="4">
            <Card className="card-user">
              <div className="image">
                <img
                  alt="..."
                  src={require("../assets/img/damir-bosnjak.jpg")}
                />
              </div>
              <Card.Body>
                <div className="author">
                  <a href={`https://github.com/${userName}`}>
                    <img
                      alt="..."
                      className="avatar border-gray"
                      src={avatar}
                    />
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
                        <Col
                          key={index}
                          className="ml-auto"
                          lg="3"
                          md="6"
                          xs="6"
                          onClick={() => handleInfo(el.info)}
                        >
                          <a href="#">
                            {el.img}
                            {el.prop}
                          </a>
                        </Col>
                      );
                    })}
                  </Row>
                </div>
              </Card.Footer>
            </Card>
            {show ? <InfoList info={info} header={show} /> : null}
          </Col>
          <Col md="8">
            <Card className="card-user">
              <Card.Header>
                <Card.Title tag="h5">Search user</Card.Title>
              </Card.Header>
              <Card.Body>
                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col className="pr-1" md="5">
                      <FormGroup>
                        <Form.Control
                          placeholder="Github user"
                          type="text"
                          onChange={handleSearch}
                        />
                      </FormGroup>
                    </Col>
                    <Col className="px-1" md="3">
                      <Button
                        className="btn-round"
                        color="primary"
                        type="submit"
                      >
                        Search
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default User;
