import React from 'react'
import logo from '../../assets/logo.png';
import Navbar from 'react-bootstrap/NavBar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { CartWidget } from '../CartWidget/CartWidget';

export function NavBar() {

  return (
      <div>
        <Navbar bg="light" expand="lg">
          <Container fluid>
            <img src={logo} className="App-logo" alt="logo" />
            <Navbar.Brand href="#">Fleamarket &amp; other stories</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">Clothes</Nav.Link>
                <Nav.Link href="action3">Furniture</Nav.Link>
                <NavDropdown title="Others" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">Tecnology</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">Home appliances</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
                <CartWidget />
              </Form>
            </Navbar.Collapse> 
          </Container>
        </Navbar>
      </div> 
  )
}
