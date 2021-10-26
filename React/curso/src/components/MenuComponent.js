/*First of all we import React */
import React, { Component } from "react";
/*Next we import our bootstrap components to use with react-bootstrap */
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
/*Now we create the class, that is a component we'll export to our app */
class Menu extends Component {
  constructor(props) {
    super(props);
  }

  /*once the dish is selectec we render a card image if the dish selected value is null
  then send an empty div */

  render() {
    /*here we use the props instead of the state, because now the data came from the App.js */
    const menu = this.props.dishes.map((dish) => {
      return (
        /* here we change the className to make the row flexible to shorw two elements */
        <Row key={dish.id} className="col-12 col-md-5 m-1 ">
          {/* Now we use the onClick event in every card, and we call a function
                     from this class using this, the function is above
 */}
          <Card onClick={() => this.props.onClick(dish.id)}>
            <Card.Img src={dish.image} alt={dish.name} />

            <Card.ImgOverlay>
              <Card.Title>{dish.name}</Card.Title>
            </Card.ImgOverlay>
          </Card>
        </Row>
      );
    });
    return (
      <Container>
        <Row>
          <CardGroup>{menu}</CardGroup>
        </Row>
        <Row>
          {/* As we see this element will render the new card
            below the cardGroup in case that a card has been selected*/}
        </Row>
      </Container>
    );
  }
}
export default Menu;
