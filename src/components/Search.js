import React, { useState, useEffect } from "react";
import { Button, Card, FormGroup, Form, Row, Col } from "react-bootstrap";
import { fetchUserData } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";

export default function Search() {
  const [userInput, setUserInput] = useState("");
  const dispatch = useDispatch();
  const { error } = useSelector(state => ({
    error: state.error
  }));

  const handleSearch = e => {
    setUserInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(fetchUserData(userInput));
  };
  return (
    <Card className="card-user">
      <h5 className="text-center mt-4">Search user</h5>
      <Card.Body>
        <Form onSubmit={handleSubmit}>
          <Row className="justify-content-center">
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
              <Button className="btn-round" variant="dark" type="submit">
                Search
              </Button>
            </Col>
          </Row>
          {error ? <Row className="justify-content-center">{error}</Row> : null}
        </Form>
      </Card.Body>
    </Card>
  );
}
