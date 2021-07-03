import React from 'react';
import logo from '../assets/euclid-logo.png'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'

import '../styles/customNavbar.css'

const CustomNavbar=()=>{
return(
  <Navbar expand="lg" sticky="top" className="custom-nav-wrapper" style={{justifyContent:'space-around'}}>
    <Navbar.Brand href="#home" id="nav-container" style={{display:'flex'}}>
       <Navbar.Brand className="nav-heading" style={{fontFamily:'Gilroy-SB',color:'white',fontSize:'2vw', marginLeft:'50px'}}>euclid<b className="dot">.</b>ai</Navbar.Brand>
    </Navbar.Brand>
  </Navbar>
)
}
export default CustomNavbar