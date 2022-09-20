import React from 'react';
import './App.css';
import { Container, Navbar, NavbarBrand } from 'reactstrap';
import chili from './app/assets/img/chili.jpg';

function App() {
  return (
    <div className="App">
      <Navbar dark color='primary' sticky='top' expand='md'>
        <Container>
          <NavbarBrand href='/'>
            <img src={chili} alt='temp logo'/>
          </NavbarBrand>
        </Container>
      </Navbar>
      I hate this shit!!!!!
    </div>
  );
}

export default App;
