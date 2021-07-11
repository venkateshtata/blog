import React from 'react';
// import logo from '../assets/euclid-logo.png'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import Catalog from '../documents/Euclid-Home.pdf'
import '../styles/customNavbar.css'

import home_img from '../assets/home.svg';

const CustomNavbar=()=>{
return(
  <Navbar expand="lg" sticky="top" className="custom-nav-wrapper" style={{display:'flex',justifyContent:'space-between',width:'100vw'}}>
    <Navbar.Brand style={{display:'flex',justifyContent:'space-between',width:'100vw'}}>
    <Navbar.Brand id="nav-container" style={{display:'flex',}}>
    <img
        alt=""
        src={home_img}
        width="30px"
        height="30px"
        className="d-inline-block align-top"
      />
       <div className="nav-heading" style={{fontFamily:'Gilroy-SB',color:'white',marginLeft:'5%' }}>euclid Home</div>
    </Navbar.Brand>
    <Navbar.Brand>  <Button id="download_brochure" variant="secondary"><a href = {Catalog} target = "_blank">Catalog</a></Button></Navbar.Brand>
    </Navbar.Brand>
  </Navbar>
)
}
export default CustomNavbar