import React, { Component } from "react";
import {
  Navbar,
  Nav
} from "react-bootstrap";

class NavBar extends Component {
  render() {
    return (
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="/">Git viewer</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    );
  }
}
export default NavBar