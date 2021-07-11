import React from 'react';
// import logo from '../assets/euclid-logo.png'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import Catalog from '../documents/Euclid-Home.pdf'
import '../styles/customNavbar.css'

const CustomNavbar=()=>{
return(
  <Navbar expand="lg" sticky="top" className="custom-nav-wrapper" style={{justifyContent:'space-around'}}>
    <Navbar.Brand href="#home" id="nav-container" style={{display:'flex',justifyContent:'space-between',width:'100vw'}}>
       <Navbar.Brand className="nav-heading" style={{fontFamily:'Gilroy-SB',color:'white', marginLeft:'50px'}}>euclid<b className="dot">.</b>ai</Navbar.Brand>
       <Button id="download_brochure" variant="secondary"><a href = {Catalog} target = "_blank">Download Catalog</a></Button>
    </Navbar.Brand>
  
  </Navbar>
)
}
export default CustomNavbar