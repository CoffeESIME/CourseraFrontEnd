import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

import NavbarBrand from 'react-bootstrap/NavbarBrand';

function App() {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <NavbarBrand href="/">Ristaurante con Fusion</NavbarBrand>
      </Container>
    </Navbar>
  );
}

export default App;
