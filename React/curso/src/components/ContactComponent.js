import React, { Component } from "react";
import { Breadcrumb, Stack } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import FormGroup from "react-bootstrap/FormGroup";
import FormLabel from "react-bootstrap/FormLabel";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: "",
      lastname: "",
      telnum: "",
      email: "",
      agree: false,
      contactType: "Tel.",
      message: "",
      touched: {
        firstname: false,
        lastname: false,
        telnum: false,
        email: false,
      },
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  handleBlur = (field) => (evt) => {
    this.setState({
      touched: { ...this.state.touched, [field]: true },
    });
  };

  validate(firstname, lastname, telnum, email) {
    const errors = {
      firstname: "",
      lastname: "",
      telnum: "",
      email: "",
    };

    if (this.state.touched.firstname && firstname.length < 3) {
      errors.firstname = "First Name should be >= 3 characters";
    } else if (this.state.touched.firstname && firstname.length > 10)
      errors.firstname = "First Name should be <= 10 characters";

    if (this.state.touched.lastname && lastname.length < 3)
      errors.lastname = "Last Name should be >= 3 characters";
    else if (this.state.touched.lastname && lastname.length > 10)
      errors.lastname = "Last Name should be <= 10 characters";

    const reg = /^\d+$/;
    if (this.state.touched.telnum && !reg.test(telnum))
      errors.telnum = "Tel. Number should contain only numbers";

    if (
      this.state.touched.email &&
      email.split("").filter((x) => x === "@").length !== 1
    )
      errors.email = "Email should contain a @";

    return errors;
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    /* console.log("Current State is: " + JSON.stringify(this.state));*/
    /* alert("Current State is: " + JSON.stringify(this.state));*/
    event.preventDefault();
  }

  render() {
    const errors = this.validate(
      this.state.firstname,
      this.state.lastname,
      this.state.telnum,
      this.state.email
    );

    return (
      <Container>
        <div className="row">
          <Breadcrumb>
            <Breadcrumb.Item>
              <Link to="/home">Home</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Contact Us</Breadcrumb.Item>
          </Breadcrumb>
          <div className="col-12">
            <h3>Contact Us</h3>
            <hr />
          </div>
        </div>
        <div className="row row-content">
          <div className="col-12">
            <h3>Location Information</h3>
          </div>
          <div className="col-12 col-sm-4 offset-sm-1">
            <h5>Our Address</h5>
            <address>
              121, Clear Water Bay Road
              <br />
              Clear Water Bay, Kowloon
              <br />
              HONG KONG
              <br />
              <i className="fa fa-phone"></i>: +852 1234 5678
              <br />
              <i className="fa fa-fax"></i>: +852 8765 4321
              <br />
              <i className="fa fa-envelope"></i>:{" "}
              <a href="mailto:confusion@food.net">confusion@food.net</a>
            </address>
          </div>
          <div className="col-12 col-sm-6 offset-sm-1">
            <h5>Map of our Location</h5>
          </div>
          <div className="col-12 col-sm-11 offset-sm-1">
            <div className="btn-group" role="group">
              <a
                role="button"
                className="btn btn-primary"
                href="tel:+85212345678"
              >
                <i className="fa fa-phone"></i> Call
              </a>
              <a role="button" className="btn btn-info">
                <i className="fa fa-skype"></i> Skype
              </a>
              <a
                role="button"
                className="btn btn-success"
                href="mailto:confusion@food.net"
              >
                <i className="fa fa-envelope-o"></i> Email
              </a>
            </div>
          </div>
        </div>
        <div className="row row-content">
          <div className="col-12">
            <h3>Send us your Feedback</h3>
          </div>
          <div className="col-12 col-md-9">
            <Form noValidate onSubmit={this.handleSubmit}>
              <FormGroup as={Row} className="mb-3">
                <Col md={2}>
                  <FormLabel htmlFor="firstname">First Name</FormLabel>
                </Col>
                <Col md={10}>
                  <Form.Control
                    type="text"
                    id="firstname"
                    name="firstname"
                    placeholder="First Name"
                    value={this.state.firstname}
                    onChange={this.handleInputChange}
                    isValid={
                      errors.firstname !== "" &&
                      (this.state.touched.firstname = true)
                    }
                    isInvalid={errors.firstname !== ""}
                    onBlur={this.handleBlur("firstname")}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.firstname}{" "}
                  </Form.Control.Feedback>
                </Col>
              </FormGroup>

              <FormGroup as={Row} className="mb-3">
                <Col md={2}>
                  <FormLabel htmlFor="lastname">Last Name</FormLabel>
                </Col>
                <Col md={10}>
                  <Form.Control
                    type="text"
                    id="lastname"
                    name="lastname"
                    placeholder="Last Name"
                    value={this.state.lastname}
                    onChange={this.handleInputChange}

                    isValid={
                        errors.firstname !== "" &&
                        (this.state.touched.lastname = true)
                      }
                      isInvalid={errors.lastname !== ""}
                      onBlur={this.handleBlur("lastname")}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.lastname}{" "}
                    </Form.Control.Feedback>
                </Col>
              </FormGroup>
              <FormGroup as={Row} className="mb-3">
                <Col md={2}>
                  <FormLabel htmlFor="telnum">Contact Tel.</FormLabel>
                </Col>
                <Col md={10}>
                  <Form.Control
                    type="tel"
                    id="telnum"
                    name="telnum"
                    placeholder="Tel. Number"
                    value={this.state.telnum}
                    onChange={this.handleInputChange}
                    isValid={
                        errors.telnum !== "" &&
                        (this.state.touched.telnum= true)
                      }
                      isInvalid={errors.telnum !== ""}
                      onBlur={this.handleBlur("telnum")}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.telnum}{" "}
                    </Form.Control.Feedback>
                </Col>
              </FormGroup>
              <FormGroup as={Row} className="mb-3">
                <FormLabel column sm={2} htmlFor="email">
                  Email
                </FormLabel>
                <Col md={10}>
                  <Form.Control
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={this.handleInputChange}
                    isValid={
                        errors.email !== "" &&
                        (this.state.touched.email = true)
                      }
                      isInvalid={errors.email !== ""}
                      onBlur={this.handleBlur("email")}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.email}{" "}
                    </Form.Control.Feedback>
                </Col>
              </FormGroup>
              <Stack gap={2} className="mx-auto">
                <FormGroup as={Row}>
                  <Col md={{ span: 6, offset: 2 }} ClassName="mb-0">
                    <strong>
                      <Form.Check type="checkbox" label="May we contact you?" />
                    </strong>
                  </Col>
                  <Col md={{ span: 3, offset: 1 }}>
                    <Form.Select defaultValue="Choose...">
                      <option>Tel.</option>
                      <option>Email</option>
                    </Form.Select>
                  </Col>
                </FormGroup>

                <FormGroup as={Row}>
                  <Col md={2}>
                    <FormLabel htmlFor="message">Your Feedback</FormLabel>
                  </Col>
                  <Col md={10}>
                    <Form.Control
                      as="textarea"
                      id="message"
                      name="message"
                      placeholder="Leave a comment here"
                      style={{ height: "100px" }}
                      value={this.state.message}
                      onChange={this.handleInputChange}
                    />
                  </Col>
                </FormGroup>
                <FormGroup as={Row}>
                  <Col md={{ size: 10, offset: 2 }}>
                    <Button type="submit" color="primary">
                      Send Feedback
                    </Button>
                  </Col>
                </FormGroup>
              </Stack>
            </Form>
          </div>
        </div>
      </Container>
    );
  }
}

export default Contact;
