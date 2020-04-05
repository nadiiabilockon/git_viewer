import React, { useEffect } from "react";
import { Card, ListGroup } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserDetails } from "../../redux/actions";
import { RootState } from "../../redux";
import Loader from "../Loader/index";
import { InfoItems } from "./InfoItems";

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
            <InfoItems userDetails={userDetails} title={info} user={user} />
          </ListGroup>
        )}
      </Card.Body>
    );
  }
}
