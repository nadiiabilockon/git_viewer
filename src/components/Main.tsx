import React, { useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import Search from "./Search";
import UserProfile from "./User";
import { fetchUserData } from "../redux/actions";
import { RootState } from "../redux";


const Main: React.FC = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.userReducer);

  useEffect(() => {
    if (!user || !Object.keys(user).length) dispatch(fetchUserData("example"));
  });

  return (
    <Container>
      <Row className="align-items-stretch">
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