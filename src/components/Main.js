import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Row,
  Col,
  Card,
  Container,
  Button,
  Form,
  FormControl,
  ListGroup
} from "react-bootstrap";
import { TiUser, TiBook } from "react-icons/ti";

function Main() {
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [followers, setFollowers] = useState("");
  const [following, setFollowing] = useState("");
  const [repos, setRepos] = useState("");
  const [avatar, setAvatar] = useState("");
  const [userInput, setUserInput] = useState("");
  const [error, setError] = useState("");
  const [allRepo, showRepo] = useState([]);

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
    avatar_url
  }) => {
    setName(name);
    setUserName(login);
    setFollowers(followers);
    setFollowing(following);
    setRepos(public_repos);
    setAvatar(avatar_url);
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

  const handleRepo = () => {
    axios
      .get(`https://api.github.com/users/${userName}/repos`)
      .then(data => {
        showRepo(data.data);
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      });
  };

  return (
      <Container>
        <Row className="justify-content-md-center">
          <Col md={6}>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Search user</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Github user"
                  className="mr-sm-2"
                  onChange={handleSearch}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Search
              </Button>
            </Form>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          {error ? (
            <h3>{error}</h3>
          ) : (
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={avatar} />
              <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Title>{userName}</Card.Title>
                <Card.Text>
                  <TiUser />
                  {followers}
                </Card.Text>
                <Card.Text onClick={handleRepo}>
                  <TiBook />
                  {repos}
                </Card.Text>
                <Card.Text>
                  <TiUser />
                  {following}
                </Card.Text>
              </Card.Body>
            </Card>
          )}
        </Row>
        <Row>
          <ListGroup>
            {allRepo.map((el, i) => {
              return <ListGroup.Item key={i}>{el.name}</ListGroup.Item>;
            })}
          </ListGroup>
        </Row>
      </Container>
  );
}

export default Main;
