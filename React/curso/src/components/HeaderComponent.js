import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import NavbarBrand from "react-bootstrap/NavbarBrand";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import { NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
class Header extends Component {
  render() {
    return (
      <>
        <Navbar collapseOnSelect expand="lg" variant="dark">
          <Container>
            <NavbarBrand href="/">
              <img
                alt=""
                src="assets/images/logo.png"
                height="30"
                width="41"
                className="d-inline-block align-top"
              />
              Ristaurante con Fusion
            </NavbarBrand>
            <NavbarToggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">

            <Nav className="me-auto">
              <NavLink className="nav-link" to="/home"><i className="fa fa-home fa-lg">Home</i></NavLink>
              <NavLink className="nav-link" to="/aboutus"><i className="fa fa-info fa-lg">About Us</i></NavLink>
              <NavLink className="nav-link" to="/menu"><i className="fa fa-list fa-lg">Menu</i></NavLink>
              <NavLink className="nav-link" to="/contactus"><i className="fa fa-address-card fa-lg">Contact</i></NavLink>

            </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div className="p-5 mb-4 border jumbotron rounded-3">
          <Container>
            <Row className="row-header">
              <Col sm={6}>
                <h1>Ristaurante con Fusion</h1>
                <p>
                  We take inspiration from the World's best cuisines, and create
                  a unique fusion experience. Our lipsmacking creations will
                  tickle your culinary senses!
                </p>
              </Col>
            </Row>
          </Container>
        </div>
      </>
    );
  }
}

export default Header;
