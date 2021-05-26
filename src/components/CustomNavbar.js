import React from 'react';
import logo from '../assets/euclid-logo.png'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'

import '../styles/customNavbar.css'

const CustomNavbar=()=>{
return(
    <Navbar expand="lg" sticky="top" className="custom-nav-wrapper" style={{justifyContent:'space-around'}}>
    <Navbar.Brand href="#home" id="nav-container" style={{display:'flex'}}>
      <img
        alt=""
        src={logo}
        // width="50vw"
        // height="50vw"
        style={{marginRight:10,maxWidth:'3.9vw'}}
        className="img-responsive"
        
      />
       <Navbar.Brand className="nav-heading" style={{fontFamily:'Gilroy',color:'white',fontSize:'2vw'}}>Euclid ai</Navbar.Brand>
       </Navbar.Brand>
      
     
      
      <Button id="header-nav-btn" size="lg" >Know more</Button>
  
    
  </Navbar>
)
}
export default CustomNavbar