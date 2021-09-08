import React from 'react';
import '../styles/cardArea.css';
import profilePic from '../assets/profile_pic.jpg';
import Avatar from 'react-avatar';
import Button from 'react-bootstrap/Button'
import resume from '../assets/VenkateshTataCV.pdf'




function CardArea() {
    const downloadFile = () => {
        window.location.href = "https://yoursite.com/src/assets/VenkateshTata_CV.pdf"
      }
    return (
        <div className="root-wrapper">
            <div className="root-div">

            <div className="profile-pic-area">
                <div>
                    <p className="profile-text1">Hi! I'm Venkatesh</p>
                </div>
                <Avatar size="250" round={true} src={profilePic} />
            </div> 

            <div className="intro-area">
                <div>
                    <p className="intro-text">Hi! I am Venkatesh. I founded euclid.ai, a software development and hardware design company headquartered in Bangalore, India. My current primary interest is to build computer-vision based privacy preserving deep learning models that could be scaled into a decentralized ecosystem. Check out my startup at <a href="https://www.euclid-ai.com/">euclid.ai</a>. My current role in the company is to design and build scalable cloud architecture for IoT systems integrating On-device learning for privacy preserving AI into an ecosystem binding edge devices and deep learning together for better understanding the user’s product usage patterns.</p>
                </div>
                <div className="cv-area">
                <a href = {resume} target = "_blank"><Button variant="outline-dark">Download CV</Button></a>
                </div>


            </div>

            </div>
        </div> 
    );
}

export default CardArea;