import React, { useState, useEffect } from "react";
import { Button, Card, FormGroup, Form, Row, Col } from "react-bootstrap";
import { fetchUserData } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";

export default function Search() {
  const [userInput, setUserInput] = useState("");
  const dispatch = useDispatch();

  const handleSearch = e => {
    setUserInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(fetchUserData(userInput));
    // axios
    //   .get(`${githubAPI}${userInput}`)
    //   .then(data => {
    //     setData(data.data);
    //   })
    //   .catch(function(error) {
    //     // handle error
    //     console.log(error);
    //     setError("Not found");
    //   });
  };
  return (
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
              <Button className="btn-round" color="primary" type="submit">
                Search
              </Button>
            </Col>
          </Row>
        </Form>
      </Card.Body>
    </Card>
  );
}
