import React from 'react';
import './styles.css';
import logo from '../../assets/logo.png';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/NavBar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { CartWidget } from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';
import constants from '../../utils/constants';

export function NavBar() {

  return (
      <div>
        <Navbar fixed='top' bg="light" expand="lg">
          <Container fluid>
            <Link to="/">
              <img src={logo} className="App-logo" alt="logo" />
            </Link>         
            <Navbar.Brand href="#">{constants.fleamarketAndOtherStories}</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Link className='links' to="/">{constants.home}</Link>  
                <Link className='links' to="/category/jewelery">{constants.jewelery}</Link>
                <Link className='links' to="/category/electronics">{constants.electronics}</Link>
                <NavDropdown title="Clothes" id="navbarScrollingDropdown">
                  <div>
                    <Link className='dropdown-link'to="/category/women's clothing">{constants.women}</Link>
                  </div>
                  <div>
                    <Link className='dropdown-link'to="/category/men's clothing">{constants.men}</Link>
                  </div>
                </NavDropdown>
              </Nav>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">{constants.search}</Button>
              </Form>
              <CartWidget />
            </Navbar.Collapse> 
          </Container>
        </Navbar>
      </div> 
  )
}
