/*We import our CSS clases from the App css file */
import './App.css';
/*Next we import our bootstrap components to use with react-bootstrap */
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import NavbarBrand from 'react-bootstrap/NavbarBrand';

/*we import our components */

import Menu from './components/MenuComponent';
/*We use the App to send all what is needed to the index using the root
the root is refering in the index.js file */
function App() {
  return (

    <div className="App">
    <Navbar bg="primary" variant="dark">
      <Container>
        <NavbarBrand href="/">Ristaurante con Fusion</NavbarBrand>
      </Container>
    </Navbar>
    <Menu></Menu>
    </div>
  );
}

export default App;

