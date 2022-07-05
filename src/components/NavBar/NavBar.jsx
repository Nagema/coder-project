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
import { Link } from 'react-router-dom';

export function NavBar() {

  return (
      <div>
        <Navbar fixed='top' bg="light" expand="lg">
          <Container fluid>
            <Link to="/">
              <img src={logo} className="App-logo" alt="logo" />
            </Link>         
            <Navbar.Brand href="#">Fleamarket &amp; other stories</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/category/jewelery">Jewelery</Nav.Link>
                <Nav.Link href="/category/electronics">Electronics</Nav.Link>
                <NavDropdown title="Clothes" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="/category/women's clothing">Women</NavDropdown.Item>
                  <NavDropdown.Item href="/category/men's clothing">Men</NavDropdown.Item>
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
              </Form>
              <CartWidget />
            </Navbar.Collapse> 
          </Container>
        </Navbar>
      </div> 
  )
}
