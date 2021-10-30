/*We import our CSS clases from the App css file */
/*Next we import our bootstrap components to use with react-bootstrap */

import Stack from "react-bootstrap/Stack";

/*we import our react components */
import React, { Component } from "react";
import { Switch,Route, Redirect } from "react-router-dom";
/*we import our components */

import Menu from "./MenuComponent";
import DishDetail from "./DishDetailComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import Contact from './ContactComponent';

/*Now we importe the dishes NOTE that we have the same name as in the export declaration in dishes.js*/
import { DISHES } from "../shared/dishes";
import { COMMENTS } from "../shared/comments";
import { LEADERS } from "../shared/leaders";
import { PROMOTIONS} from "../shared/promotions";

/*We use the App to send all what is needed to the index using the root
the root is refering in the index.js file */
/*Now that we change the use of the app, we need to use a class with a constructor and 
proprierties as super and state, this data will be added to the MenuComponent*/
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      comments:COMMENTS,
      promotions:PROMOTIONS,
      leaders:LEADERS,
      selectedDish: null,
    };
  }
  /*To make the site works as we want we need to show a new thing below our cards
  for this we change the value by default of our selectedDish above */
  /*then we will need to use the render of a class with the html tags to render
  this is working with react- bootstrap */
  render() {
    const HomePage=()=>{
      return(
        <Home dish={this.state.dishes.filter((dish)=>dish.featured)[0]}
        promotion={this.state.promotions.filter((promo)=>promo.featured)[0]}
        leader={this.state.leaders.filter((leader)=>leader.featured)[0]}
        ></Home>
      );
    }
    return (
      <div className="App">
          <Header></Header>
          <Switch>
            <Route path='/home' component={HomePage}></Route>
            <Route exact path ='/menu' component={()=><Menu dishes={this.state.dishes}></Menu>}></Route>
            <Route exact path='/contactus' ><Contact></Contact> </Route>
            <Redirect to="/home"></Redirect>
          </Switch>
        <Footer></Footer>
      </div>
    );
  }
}

export default Main;
/*<Menu
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
</Stack>*/