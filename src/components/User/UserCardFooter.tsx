import React, { useContext } from "react";
import { Card, Row, Col } from "react-bootstrap";
import { TiUser, TiBook } from "react-icons/ti";
import { UserContext } from "./UserCard";
import { Link } from "react-router-dom";

export default function UserCardFooter() {
  const { login, followers, following, public_repos } = useContext(UserContext);

  const cardFooterData = [
    { prop: followers, info: "followers", img: <TiUser /> },
    { prop: public_repos, info: "repos", img: <TiBook /> },
    { prop: following, info: "following", img: <TiUser /> },
  ];
  
  return (
    <Card.Footer>
      <hr />
      <div className="button-container">
        <Row>
          {cardFooterData.map((el, index) => {
            return (
              <Col key={index} className="ml-auto" lg="3" md="6" xs="6">
                <Link to={`/${login}/${el.info}`}>
                  <span>
                    {el.img}
                    {el.prop}
                  </span>
                </Link>
              </Col>
            );
          })}
        </Row>
      </div>
    </Card.Footer>
  );
}
