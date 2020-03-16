import React, { Component } from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar: React.FC = () => {
  return (
    <Navbar expand="lg">
      <Navbar.Brand>
        <Link to="/git_viewer">
          <img
            alt="Brand"
            src={require("../../assets/img/Brand.png")}
          ></img>
        </Link>
      </Navbar.Brand>
    </Navbar>
  );
}
export default NavBar;
