import React, { useState, useEffect } from "react";
import { Card, Row, Col, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserDetails } from "../redux/actions";
import Loader from "../App/layout/Loader/index";

export default function InfoList(props) {
  const { userDetails, isLoginPending, user } = useSelector(state => ({
    userDetails: state.userDetails,
    user: state.user,
    isLoginPending: state.isLoginPending
  }));
  const title = props.match.params.info;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserDetails(title, user.login));
  }, []);

  if (isLoginPending) {
    return <Loader />;
  } else {
    return (
      <Card>
        <Card.Header>
          <Card.Title tag="h4">
            {title.replace(/^\w/, c => c.toUpperCase())}
          </Card.Title>
        </Card.Header>
        <Card.Body>
          {!userDetails.length ? (
            <div>No data</div>
          ) : (
            <ListGroup variant="flush" className="list-unstyled team-members">
              <RenderListItems userDetails={userDetails} title={title} user={user} />
            </ListGroup>
          )}
        </Card.Body>
      </Card>
    );
  }
}

const RenderListItems = ({userDetails, title, user}) => {
  return userDetails.map((el, index) => {
    return (
      <ListGroup.Item key={index}>
        {title !== "repos" ? (
          <Row>
            <Col md="1" xs="3">
              <div className="avatar">
                <a href={`https://github.com/${el.login}`}>
                  <img
                    alt="avatar"
                    className="img-circle img-no-padding img-responsive"
                    src={el.avatar_url}
                  />
                </a>
              </div>
            </Col>
            <Col md="11" xs="9">
              {el.login}
            </Col>
          </Row>
        ) : (
          <Row>
            <Col>
              <Link
                title="Show details"
                to={`/git_viewer/${user.login}/${title}/${el.name}`}
              >
                {el.name}
              </Link>
              <Row>
                <Col md="5" xs="5">
                  <span className="text-muted">
                    <small>Default branch</small>
                    <br />
                    <small>Language</small>
                  </span>
                </Col>
                <Col md="7" xs="7" className="text-right">
                  <small>{el.default_branch}</small>
                  <br />
                  <small>{el.language}</small>
                </Col>
              </Row>
            </Col>
          </Row>
        )}
      </ListGroup.Item>
    );
  });
};
