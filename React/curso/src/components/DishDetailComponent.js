import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/esm/Container";
class DishDetail extends Component {
  render() {
    /* First of all we need to know if the data received is null or not */
    if (this.props.dish != null) {
      /*if not null then we create a constant, with arrow function
        that maps the content for the comments to send it later to 
        the jsx format */
      console.log(this.props.dish.comments);
      const comments = this.props.dish.comments.map((comment) => {
        return (
          /* here we change the className to make the row flexible to shorw two elements */
          <Row key={comment.id}>
            {/* Now we use the onClick event in every card, and we call a function
                           from this class using this, the function is above
       */}
            <p>{comment.comment}</p>

            <p>
              --{comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
            </p>
          </Row>
        );
      });

      return (
        <Container>
          <Row className="m-right-6">
            <Col sm={12} md={5} className="m-1">
              <Card>
                <Card.Img
                  src={this.props.dish.image}
                  alt={this.props.dish.name}
                />
                <Card.Body>
                  <Card.Title>{this.props.dish.name}</Card.Title>
                  <Card.Text>{this.props.dish.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12} md={5} className="m-1">
              <p>
                Hi, I'm Fabian from México and currently i study the MERN stack,
                I'm in this course using the latest version of react and
                bootstrap, react 17 and bootstrap 5.1, also instead of using
                reacstrap I'm working with react-boostrap so that are the main
                diferences that maybe you'll find in the peer revision, the
                Versions are:
              </p>
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
              {comments}
            </Col>
          </Row>
        </Container>
      );
    } else {
      /*otherwise send a empty div */
      return <div></div>;
    }
  }
}

export default DishDetail;
