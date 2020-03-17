import React, { useState } from "react";
import { Button, Card, FormGroup, Form, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserData } from "../redux/actions";
import { RootState } from "../redux";

const Search: React.FC = () => {
  const [userInput, setUserInput] = useState<string>("");
  const { error } = useSelector((state: RootState) => state.userReducer);
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
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
                  onChange={e => setUserInput(e.target.value)}
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

export default Search