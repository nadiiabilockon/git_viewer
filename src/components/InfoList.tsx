import React, { useEffect } from "react";
import { Card, Row, Col, ListGroup } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserDetails } from "../redux/actions";
import { RootState } from "../redux";
import Loader from "./Loader/index";
import { UserDetails } from "../models/interfaces";

export default function InfoList() {
  const { userDetails, isLoginPending, user } = useSelector(
    (state: RootState) => state.userReducer
  );
  const { info } = useParams<any>();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserDetails(info, user.login));
  }, []);

  if (isLoginPending) {
    return <Loader />;
  } else {
    return (
      <Card.Body>
        {!userDetails.length ? (
          <div>No data</div>
        ) : (
          <ListGroup variant="flush" className="list-unstyled team-members">
            <RenderListItems
              userDetails={userDetails}
              title={info}
              user={user}
            />
          </ListGroup>
        )}
      </Card.Body>
    );
  }
}

const RenderListItems = ({ userDetails, title, user }) => {
  return userDetails.map(
    (el: UserDetails, index: string | number | undefined) => {
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
                <Row>{el.name}</Row>
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
                <Row className="justify-content-between">
                  <Col>
                    {/* <Link
                      className="mt-2 btn btn-outline-info btn-sm"
                      to={`/git_viewer/${user.login}/${el.name}/compare/branches`}
                    >
                      Compare branches
                    </Link> */}
                  </Col>
                  <Col className="text-right">
                    <Link
                      className="mt-2 btn btn-outline-info btn-sm"
                      to={`/git_viewer/${user.login}/${title}/${el.name}/branches`}
                    >
                      Compare commits
                    </Link>
                  </Col>
                </Row>
              </Col>
            </Row>
          )}
        </ListGroup.Item>
      );
    }
  );
};
