import React from 'react'
import LogoImgg from '../assests/images/DB-studio.png';

const Header = () => {
  return (  
    <div className='Header-div px-5 py-5'>
      <img alt='Header' src={LogoImgg} />
      <li className='header-ul' >
        <ul>About</ul>
        <ul>Services</ul>
        <ul>Contact us</ul>
        <ul>Blog</ul>
        <ul>PortFolio</ul>
      </li>
    </div>
  )
}

export default Header 