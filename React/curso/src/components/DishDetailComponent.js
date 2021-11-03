import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/Button";
import { Modal, Stack } from "react-bootstrap";
import { Control, LocalForm, Errors } from "react-redux-form";
import Form from "react-bootstrap/Form";
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';



const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;

function RenderComments({ comments, addComment, dishId }) {
  const commenta = comments.map((comment) => {
    return (
      <Row key={comment.id}>
        <p>{comment.comment}</p>
        <p>
          --{comment.author},{" "}
          {new Intl.DateTimeFormat("en-US", {
            year: "numeric",
            month: "short",
            day: "2-digit",
          }).format(new Date(Date.parse(comment.date)))}
        </p>
      </Row>
    );
  });
  return (
    <div>
      {commenta}
      <CommentForm dishId={dishId} addComment={addComment} />
    </div>
  );
}
class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.handleShow = this.handleShow.bind(this);
  }

  handleShow() {
    this.setState({
      show: true,
    });
  }
  handleClose() {
    this.setState({
      show: false,
    });
  }
  handleSubmit(values) {
    alert("Current State is: " + JSON.stringify(values));
    this.props.addComment(
      this.props.dishId,
      values.rating,
      values.author,
      values.comment
    );
  }
  render() {
    return (
      <>
        <Button variant="primary" onClick={this.handleShow}>
          add Comment
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Submit comment</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <LocalForm noValidate onSubmit={(values) => this.handleSubmit(values)}>
              <Row className="form-group mb-3">
                <Col md={12}>
                  <Form.Label htmlFor="rating">Rating</Form.Label>
                </Col>
                <Col md={12}>
                  <Control.select
                    model=".rating"
                    id="rating"
                    name="rating"
                    className="form-control"
                  >
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                  </Control.select>
                </Col>
              </Row>
              <Row className="form-group mb-3">
                <Col md={12}>
                  <Form.Label htmlFor="author">Your Name</Form.Label>
                </Col>
                <Col md={12}>
                  <Control.text
                    model=".author"
                    id="author"
                    name="author"
                    placeholder="Your Name"
                    className="form-control"
                    validators={{
                      required,
                      minLength: minLength(3),
                      maxLength: maxLength(15),
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".author"
                    show="touched"
                    messages={{
                      required: "Required",
                      minLength: "Must be greater than 2 characters",
                      maxLength: "Must be 15 characters or less",
                    }}
                  />
                </Col>
              </Row>
              <Stack gap={2}>
                <Row className="form-group">
                  <Col md={12}>
                    <Form.Label htmlFor="comment">Comment</Form.Label>
                  </Col>
                  <Col md={12}>
                    <Control.textarea
                      model=".comment"
                      id="comment"
                      name="comment"
                      placeholder="Leave a comment here"
                      className="form-control"
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Button type="submit" color="primary">
                      Send Feedback
                    </Button>
                  </Col>
                </Row>
              </Stack>
            </LocalForm>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}

function DishDetail(props) {
  if (props.isLoading) {
    return(
        <div className="container">
            <div className="row">            
                <Loading />
            </div>
        </div>
    );
}
else if (props.errMess) {
    return(
        <div className="container">
            <div className="row">            
                <h4>{props.errMess}</h4>
            </div>
        </div>
    );
}
else if (props.dish != null) {
  return (
    <Container>
      <Row className="m-right-6">
        <Col sm={12} md={5} className="m-1">
          <Card>
            <Card.Img src={baseUrl + props.dish.image} alt={props.dish.name}  />
            <Card.Body>
              <Card.Title>{props.dish.name}</Card.Title>
              <Card.Text>{props.dish.description}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={5} className="m-1">

          <ListGroup variant="flush">
            <ListGroup.Item>"bootstrap": "5.1.3",</ListGroup.Item>
            <ListGroup.Item> "react": "^17.0.2",</ListGroup.Item>
            <ListGroup.Item> "react-bootstrap": "^2.0.0",</ListGroup.Item>
            <ListGroup.Item> "react-dom": "^17.0.2",</ListGroup.Item>
            <ListGroup.Item> "react-scripts": "4.0.3",</ListGroup.Item>
          </ListGroup>
          <h3>... And the comments</h3>
          <h4>Comments</h4>
          {/* Here we call the comments const */}
          <RenderComments
            comments={props.comments}
            addComment={props.addComment}
            dishId={props.dish.id}
          ></RenderComments>
        </Col>
      </Row>
    </Container>
  );
  }
  else {
    return (
<div></div>
    );
  }
}

export default DishDetail;
