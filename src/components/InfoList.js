import React, { useState, useEffect } from "react";
import { Card, Row, Col } from "react-bootstrap";
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
            <ul className="list-unstyled team-members">
              {userDetails.map((el, index) => {
                return (
                  <li key={index}>
                    {title !== "repos" ? (
                      <Row>
                        <Col md="2" xs="2">
                          <div className="avatar">
                            <a href={`https://github.com/${el.login}`}>
                              <img
                                alt="..."
                                className="img-circle img-no-padding img-responsive"
                                src={el.avatar_url}
                              />
                            </a>
                          </div>
                        </Col>
                        <Col md="10" xs="10">
                          {el.login}
                        </Col>
                      </Row>
                    ) : (
                      <Row>
                        <Col>
                          <Link to={`/branch/${el.default_branch}`}>
                            {el.name}{" "}
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
                  </li>
                );
              })}
            </ul>
          )}
        </Card.Body>
      </Card>
    );
  }
}
