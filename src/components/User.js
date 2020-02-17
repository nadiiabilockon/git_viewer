import React, { useState, useEffect } from "react";
import { Card, Row, Col, Button } from "react-bootstrap";
import { TiUser, TiBook } from "react-icons/ti";
import InfoList from "./InfoList";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

function User(props) {
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [followers, setFollowers] = useState("");
  const [following, setFollowing] = useState("");
  const [repos, setRepos] = useState("");
  const [avatar, setAvatar] = useState("");
  const [profileBio, setBio] = useState("");
  const [error, setError] = useState("");
  const [info, setInfo] = useState([]);
  const [show, toggleShow] = useState(false);
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    setData(user);
  }, [user]);

  const setData = ({
    name,
    login,
    followers,
    following,
    public_repos,
    avatar_url,
    bio
  }) => {
    setName(name);
    setUserName(login);
    setFollowers(followers);
    setFollowing(following);
    setRepos(public_repos);
    setAvatar(avatar_url);
    setBio(bio);
  };

  // const handleInfo = params => {
  //   axios
  //     .get(`${githubAPI}${userName}/${params}`)
  //     .then(data => {
  //       setInfo(data.data);
  //       toggleShow(params);
  //     })
  //     .catch(function(error) {
  //       console.log(error);
  //     });
  // };

  const cardFooterData = [
    { prop: followers, info: "followers", img: <TiUser /> },
    { prop: repos, info: "repos", img: <TiBook /> },
    { prop: following, info: "following", img: <TiUser /> }
  ];

  return (
    <Card className="card-user">
      <div className="image">
        <img alt="..." src={require("../assets/img/damir-bosnjak.jpg")} />
      </div>
      <Card.Body>
        <div className="author">
          <a href={`https://github.com/${userName}`}>
            <img alt="..." className="avatar border-gray" src={avatar} />
            <h5 className="title">{name}</h5>
          </a>
          <p className="description">{userName}</p>
        </div>
        <p className="description text-center">{profileBio}</p>
      </Card.Body>
      <Card.Footer>
        <hr />
        <div className="button-container">
          <Row>
            {cardFooterData.map((el, index) => {
              return (
                <Col key={index} className="ml-auto" lg="3" md="6" xs="6">
                 <span>{el.img}
                  {el.prop}
                   </span> 
                </Col>
              );
            })}
          </Row>
        </div>
        <div className="text-center mt-3">
          <Link to={`/user/info`}>More Info</Link>
        </div>
      </Card.Footer>
      {/* {show ? <InfoList info={info} header={show} /> : null} */}
    </Card>
  );
}

export default User;
