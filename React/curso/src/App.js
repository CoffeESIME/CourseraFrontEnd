
import React, { Component } from "react";
import './App.css';
import {BrowserRouter} from 'react-router-dom';
/*we import our components */

import Main from './components/MainComponents';
/*Now we importe the dishes NOTE that we have the same name as in the export declaration in dishes.js*/
/*We use the App to send all what is needed to the index using the root
the root is refering in the index.js file */
/*Now that we change the use of the app, we need to use a class with a constructor and 
proprierties as super and state, this data will be added to the MenuComponent*/
class App extends Component {

  /*then we will need to use the render of a class with the html tags to render
  this is working with react- bootstrap */
  render(){
    return (

      <div className="App">
        <BrowserRouter>
       {/* Now we have a data to send to the Menu component 
 */}
      <Main></Main>
      </BrowserRouter>
      </div>
    );
  
  }
}

export default App;

