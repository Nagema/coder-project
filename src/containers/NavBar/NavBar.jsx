import React, { useEffect, useState } from 'react';
import './styles.css';
import logo from '../../assets/logo.png';
import { Navbar } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import { CartWidget } from '../../components/CartWidget/CartWidget';
import { Link } from 'react-router-dom';
import constants from '../../utils/constants';
import SearchInput from '../../components/SearchInput/SearchInput';

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
              <SearchInput />
              <CartWidget />
            </Navbar.Collapse> 
          </Container>
        </Navbar>
      </div> 
  )
}
