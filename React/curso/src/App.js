/*We import our CSS clases from the App css file */
import './App.css';
/*Next we import our bootstrap components to use with react-bootstrap */
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import NavbarBrand from 'react-bootstrap/NavbarBrand';
/*we import our react components */
import React, { Component } from "react";

/*we import our components */

import Menu from './components/MenuComponent';
/*Now we importe the dishes NOTE that we have the same name as in the export declaration in dishes.js*/
import {DISHES} from './shared/dishes'
/*We use the App to send all what is needed to the index using the root
the root is refering in the index.js file */
/*Now that we change the use of the app, we need to use a class with a constructor and 
proprierties as super and state, this data will be added to the MenuComponent*/
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      dishes:DISHES
    };
  }
  /*then we will need to use the render of a class with the html tags to render
  this is working with react- bootstrap */
  render(){
    return (

      <div className="App">
      <Navbar bg="primary" variant="dark">
        <Container>
          <NavbarBrand href="/">Ristaurante con Fusion</NavbarBrand>
        </Container>
      </Navbar>
       {/* Now we have a data to send to the Menu component 
 */}
      <Menu dishes={this.state.dishes}></Menu>
      </div>
    );
  
  }
}

export default App;

