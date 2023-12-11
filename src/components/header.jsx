import React from 'react'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link as Scroll} from 'react-scroll';

const Header = () => {
  return <>
  
  <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Nav className="ml-auto">
            <img className='logo' src="/Image/header/ARAC Logo-ai 1.png" alt="logo" />
        </Nav>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Scroll spy={ true } activeClass='activeNav' smooth={true} offset={ -130 } className='nav-link ' to="hero">الرئيسية</Scroll>
            <Scroll spy={ true } activeClass='activeNav' smooth={true} offset={ -130 } className='nav-link ' to="hero">  لماذا نحن! </Scroll>
            <Scroll spy={ true } activeClass='activeNav' smooth={true} offset={ -130 } className='nav-link ' to="hero"> التدريبات </Scroll>
            <Scroll spy={ true } activeClass='activeNav' smooth={true} offset={ -130 } className='nav-link ' to="hero"> تواصل معنا </Scroll>
          </Nav>
            <button> انضم الآن </button>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  </>
}

export default Header