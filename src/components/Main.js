import React, { useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import Search from "./Search";
import UserProfile from "./User";
import { fetchUserData } from "../redux/actions";

import { useDispatch, useSelector } from "react-redux";

function Main() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserData('example'));
  });

  return (
    <Container>
      <Row>
        <Col md="4">
          <UserProfile />
        </Col>
        <Col md="8">
          <Search />
        </Col>
      </Row>
    </Container>
  );
}

export default Main;
