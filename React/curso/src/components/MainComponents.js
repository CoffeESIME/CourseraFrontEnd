/*We import our CSS clases from the App css file */
/*Next we import our bootstrap components to use with react-bootstrap */


/*we import our react components */
import React, { Component } from "react";
import { Switch,Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
/*we import our components */

import Menu from "./MenuComponent";
import DishDetail from "./DishDetailComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import Contact from './ContactComponent';
import About from "./AboutComponent";

const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}

class Main extends Component {

  /*To make the site works as we want we need to show a new thing below our cards
  for this we change the value by default of our selectedDish above */
  /*then we will need to use the render of a class with the html tags to render
  this is working with react- bootstrap */
  render() {
    const HomePage=()=>{
      return(
        <Home dish={this.props.dishes.filter((dish)=>dish.featured)[0]}
        promotion={this.props.promotions.filter((promo)=>promo.featured)[0]}
        leader={this.props.leaders.filter((leader)=>leader.featured)[0]}
        ></Home>
      );
    }
    const DishWithId=({match})=>{
      return(
        <DishDetail dish={this.props.dishes.filter((dish)=>dish.id===parseInt(match.params.dishId,10))[0]}
        comments={this.props.comments.filter((comment)=>comment.dishId===parseInt(match.params.dishId,10))}>
        </DishDetail>
      );
    }
    return (
      <div className="App">
          <Header></Header>
          <Switch>
            <Route path='/home' component={HomePage}></Route>
            <Route exact path ='/menu' component={()=><Menu dishes={this.props.dishes}></Menu>}></Route>
            <Route path='/menu/:dishId' component={DishWithId}></Route>
            <Route exact path='/contactus' ><Contact></Contact> </Route>
            <Route exact path='/aboutus' component={()=><About leaders={this.props.leaders}></About>}></Route>
            <Redirect to="/home"></Redirect>
          </Switch>
        <Footer></Footer>
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps)(Main));
