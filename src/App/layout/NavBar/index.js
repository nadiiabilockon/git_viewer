import React, { Component } from "react";
import { Navbar } from "react-bootstrap";

class NavBar extends Component {
  render() {
    return (
      <Navbar expand="lg">
        <Navbar.Brand href="/git_viewer">Git viewer</Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
          </Navbar.Collapse> */}
      </Navbar>
    );
  }
}
export default NavBar;
