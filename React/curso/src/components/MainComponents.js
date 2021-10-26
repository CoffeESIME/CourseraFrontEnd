/*We import our CSS clases from the App css file */
/*Next we import our bootstrap components to use with react-bootstrap */
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import NavbarBrand from "react-bootstrap/NavbarBrand";
import Stack from "react-bootstrap/Stack";

/*we import our react components */
import React, { Component } from "react";

/*we import our components */

import Menu from "./MenuComponent";
import DishDetail from "./DishDetailComponent";
/*Now we importe the dishes NOTE that we have the same name as in the export declaration in dishes.js*/
import { DISHES } from "../shared/dishes";
/*We use the App to send all what is needed to the index using the root
the root is refering in the index.js file */
/*Now that we change the use of the app, we need to use a class with a constructor and 
proprierties as super and state, this data will be added to the MenuComponent*/
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      selectedDish: null,
    };
  }
  /*To make the site works as we want we need to show a new thing below our cards
  for this we change the value by default of our selectedDish above */
  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId });
  }
  /*then we will need to use the render of a class with the html tags to render
  this is working with react- bootstrap */
  render() {
    return (
      <div className="App">
        <Navbar bg="primary" variant="dark">
          <Container>
            <NavbarBrand href="/">Ristaurante con Fusion</NavbarBrand>
          </Container>
        </Navbar>

        <Menu
          dishes={this.state.dishes}
          onClick={(dishId) => this.onDishSelect(dishId)}
        ></Menu>
        <Stack className="mx-auto">
          <DishDetail
            dish={
              this.state.dishes.filter(
                (dish) => dish.id === this.state.selectedDish
              )[0]
            }
          ></DishDetail>
        </Stack>
      </div>
    );
  }
}

export default Main;
