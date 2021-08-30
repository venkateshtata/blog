import React from 'react';
// import logo from '../assets/euclid-logo.png'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import Catalog from '../documents/Euclid-Home.pdf'
import '../styles/customNavbar.css'
import instagram from '../assets/instagram.png'
import linkedIn from '../assets/icons8-linkedin-50.png'
import github from '../assets/github.png'
import linkedin from '../assets/linkedin.png'
import medium from '../assets/medium.png'
// import home_img from '../assets/home.svg';

const CustomNavbar=()=>{
return(
  <Navbar expand="lg" sticky="top" className="custom-nav-wrapper" style={{display:'flex',justifyContent:'space-between',width:'100vw'}}>
    <Navbar.Brand style={{display:'flex',justifyContent:'space-between',width:'100vw'}}>
    <Navbar.Brand id="nav-container" style={{display:'flex',alignItems:'center'}}>
    {/* <img
        alt=""
        src={home_img}
        style={{marginRight:10,maxWidth:'2.9vw'}}
        className="d-inline-block align-top"
      /> */}
       <div className="nav-heading" style={{fontFamily:'Gilroy-SB',color:'white',marginLeft:"10%" }}><div>Venkatesh Tata</div></div>
    </Navbar.Brand>
    <Navbar.Brand>  
      {/* <Button id="download_brochure" variant="secondary"><a href = {Catalog} target = "_blank">catalog</a></Button> */}  
      <a href="https://github.com/venkateshtata"> <img src={github} className="footer-contact-icons"/></a>
      <a href="https://www.linkedin.com/in/venkatesh-tata-12a747100"> <img src={linkedin} className="footer-contact-icons"/></a>
      <a href="https://medium.com/@venkateshtata9"> <img src={medium} className="footer-contact-icons"/></a>
      <a href="https://www.instagram.com/venkatesh909"><img src={instagram} className="footer-contact-icons"/></a>
      </Navbar.Brand>
    </Navbar.Brand>
  </Navbar>
)
}
export default CustomNavbar