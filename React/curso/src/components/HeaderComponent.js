import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import NavbarBrand from "react-bootstrap/NavbarBrand";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
class Header extends Component {
  render() {
    return (
      <>
        <Navbar  variant="dark">
          <Container>
            <NavbarBrand href="/">Ristaurante con Fusion</NavbarBrand>
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
