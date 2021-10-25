/*First of all we import React */
import React, { Component } from "react";
/*Next we import our bootstrap components to use with react-bootstrap */
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import FigureImage from "react-bootstrap/FigureImage";
import Card from "react-bootstrap/Card"

import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/esm/ListGroupItem";
/*Now we create the class, that is a component we'll export to our app */
class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }
  render() {
      /*here we use the props instead of the state, because now the data came from the App.js */
    const menu = this.props.dishes.map((dish) => {
      return (
        <ListGroupItem className="border border-white">
          <Row key={dish.id} className="col-12 col-md-5 m-1 ">
            <Card>
              <Card.Img src={dish.image} alt={dish.name}/>
            </Card>
            <Card.ImgOverlay>
              <Card.Title>{dish.name}</Card.Title>
              <Card.Text>{dish.description}</Card.Text>
            </Card.ImgOverlay>
          </Row>
        </ListGroupItem>
      );
    });
    return (
      <Container>
        <Row>
          {menu}
        </Row>
      </Container>
    );
  }
}
export default Menu;
