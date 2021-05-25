import React from 'react';
import logo from '../assets/euclid-logo.png'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import { Nav } from 'react-bootstrap';
import '../styles/customNavbar.css'

const CustomNavbar=()=>{
return(
    <Navbar expand="lg" sticky="top" className="custom-nav-wrapper" style={{justifyContent:'space-around'}}>
    <Navbar.Brand href="#home" id="nav-container" style={{display:'flex'}}>
      <img
        alt=""
        src={logo}
        width="50"
        height="50"
        style={{marginRight:10}}
        className="d-inline-block align-top"
      />
       <Navbar.Brand className="nav-heading" style={{fontFamily:'Gilroy',color:'white',fontSize:25}}>Euclid ai</Navbar.Brand>
       </Navbar.Brand>
      
     
      
      <Button id="header-btn" size="lg" variant="outline-success">Know more</Button>
  
    
  </Navbar>
)
}
export default CustomNavbar