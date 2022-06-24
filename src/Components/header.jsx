import React, {Component} from 'react';
import {Nav, Navbar,Container, NavDropdown} from 'react-bootstrap';
import foto from './logo192.png'
import './header.css'



export default class Header extends Component {
    render () {
        return(
           <Navbar >
            <Container className='text'>
              <Navbar.Brand >
                  <img 
                  src={foto}
                  height='30'
                  width='30'
                  />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav  className="me-auto">
                  <Nav.Link id = 'text' href="#about">About Me</Nav.Link>
                  <Nav.Link id = 'text'  href="#contacts">Contacts</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        )
    }
}

