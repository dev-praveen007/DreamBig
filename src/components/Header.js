import React from 'react'
import LogoImgg from '../assests/images/DB-studio.png';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
  return (  
    <div className='Header-div px-5 py-4'>
      <img alt='Header' src={LogoImgg} />
      <li className='header-ul' >
        <ul>About</ul>
        <ul>Services</ul>
        <ul>Contact us</ul>
        <ul>Blog</ul>
        <ul>PortFolio</ul>
      </li>
    </div>
  //   <Navbar expand="lg" className="">
  //   <Container>
  //     <Navbar.Brand href="#home">
  //       <img alt='Header' src={LogoImgg} className='img-fluid w-50' />
  //     </Navbar.Brand>
  //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
  //     <Navbar.Collapse id="">
  //       <Nav className="me-auto">
  //         <Nav.Link href="#home">About</Nav.Link>
  //         <Nav.Link href="#link">Services</Nav.Link>
  //         <Nav.Link href="#home">Contact</Nav.Link>
  //         <Nav.Link href="#link">Blog</Nav.Link>
  //         <Nav.Link href="#home">PortFolio</Nav.Link>
  //       </Nav>
  //     </Navbar.Collapse>
  //   </Container>
  // </Navbar>
  )
}

export default Header 