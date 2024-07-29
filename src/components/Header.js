import React, { useState } from 'react'
import LogoImgg from '../assests/images/DB-studio.png';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ContatusModal from './ContactModal';

const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (  
    // <div className='Header-div px-5 py-4'>
    //   <img alt='Header' src={LogoImgg} />
    //   <li className='header-ul' >
    //     <ul>About</ul>
    //     <ul>Services</ul>
    //     <ul>Contact us</ul>
    //     <ul>Blog</ul>
    //     <ul>PortFolio</ul>
    //   </li>
    // </div>
    <Navbar expand="lg" className="cus-navbar">
    <Container>
      <Navbar.Brand href="#home">
        <img alt='Header' src={LogoImgg} className='header-icon' />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="#home" className='header-items'>About</Nav.Link>
          <Nav.Link href="#ourSevices" className='header-items'>Services</Nav.Link>
          <Nav.Link href="#" onClick={()=>handleShow()} className='header-items'>Contact</Nav.Link>
          {/* <Nav.Link href="#link" className='header-items'>Blog</Nav.Link> */}
          <Nav.Link href="/DreamBigStudio/portfolio" className='header-items'>PortFolio</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
    <ContatusModal
        show={show}
        handleShow={handleShow}
        handleClose={handleClose}
      />
  </Navbar>
  )
}

export default Header 