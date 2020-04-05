import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import { TiUser, TiBook } from "react-icons/ti";
import { useSelector } from "react-redux";
import { RootState } from "../../redux";
import { User as UserType } from "../../models/interfaces";
import UserCardBody from "./UserCardBody";
import UserCardFooter from "./UserCardFooter";

export const UserContext = React.createContext<Partial<UserType>>({});

const UserCard: React.FC = () => {
  const [userData, setUserData] = useState({} as UserType);
  const { user } = useSelector((state: RootState) => state.userReducer);

  useEffect(() => {
    setUserData(user);
  }, [user]);

  const cardFooterData = [
    { prop: userData.followers, info: "followers", img: <TiUser /> },
    { prop: userData.public_repos, info: "repos", img: <TiBook /> },
    { prop: userData.following, info: "following", img: <TiUser /> },
  ];

  return (
    <Card className="card-user">
      <div className="image">
        <img alt="..." src={require("../../assets/img/damir-bosnjak.jpg")} />
      </div>
      <UserContext.Provider value={userData}>
        <UserCardBody />
        <UserCardFooter />
      </UserContext.Provider>
    </Card>
  );
};

export default UserCard;
