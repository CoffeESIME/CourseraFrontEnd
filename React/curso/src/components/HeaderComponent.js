import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import NavbarBrand from "react-bootstrap/NavbarBrand";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import { NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import FormGroup from "react-bootstrap/FormGroup";
import Button from "react-bootstrap/Button";
import { Modal } from "react-bootstrap";
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false,
      isModalOpen: false,
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }
  handleLogin(event) {

    
    event.stopPropagation();
    alert(
      "Username: " +
        this.username.value +
        " Password: " +
        this.password.value +
        " Remember: " +
        this.remember.checked
    );
    
    this.toggleModal();
    event.preventDefault();

  }
  render() {
    return (
      <div>
        <Modal show={this.state.isModalOpen} onHide={this.toggleModal}>
          <Modal.Header closeButton>Login</Modal.Header>
          <Modal.Body>
            <Form noValidate  onSubmit={this.handleLogin}>
              <FormGroup>
                <Form.Label htmlFor="username">Username</Form.Label>
                <Form.Control
                  type="text"
                  id="username"
                  name="username"
                  ref={(input) => (this.username = input)}
                />
              </FormGroup>
              <FormGroup>
                <Form.Label htmlFor="password">Password</Form.Label>
                <Form.Control
                  type="password"
                  id="password"
                  name="password"
                  ref={(input) => (this.password = input)}
                />
              </FormGroup>
              <FormGroup>
                <Form.Check
                  type="checkbox"
                  name="remember"
                  label="Remember me"
                  ref={(input) => (this.remember = input)}
                />
              </FormGroup>
              <Button type="submit" value="submit" color="primary">
                Login
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
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
                <NavLink className="nav-link" to="/home">
                  <i className="fa fa-home fa-lg">Home</i>
                </NavLink>
                <NavLink className="nav-link" to="/aboutus">
                  <i className="fa fa-info fa-lg">About Us</i>
                </NavLink>
                <NavLink className="nav-link" to="/menu">
                  <i className="fa fa-list fa-lg">Menu</i>
                </NavLink>
                <NavLink className="nav-link" to="/contactus">
                  <i className="fa fa-address-card fa-lg">Contact</i>
                </NavLink>
              </Nav>
              <Nav className="ml-auto" navbar>
                <Nav.Item>
                  <Button onClick={this.toggleModal}>
                    <span className="fa fa-sign-in fa-lg"></span> Login
                  </Button>
                </Nav.Item>
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
      </div>
    );
  }
}

export default Header;
