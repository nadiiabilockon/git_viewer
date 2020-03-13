import React, { Component } from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <Navbar expand="lg">
        <Navbar.Brand>
          <Link to="/git_viewer">
            <img src={require("../../../assets/img/Brand.png")}></img>
          </Link>
        </Navbar.Brand>
      </Navbar>
    );
  }
}
export default NavBar;
