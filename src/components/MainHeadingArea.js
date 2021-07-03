import React from 'react';
import '../styles/mainHeadingArea.css';
import Button from 'react-bootstrap/Button'
const MainHeadingArea = () => {
    return (
        <div className="main_heading_area_container">
            <div className="main_heading_text">
            <p>euclid<b className="dot">.</b>Home</p>
            <Button id="header-btn" size="lg">Experience</Button>{' '}
            </div>
  
        </div>
    )
}
export default MainHeadingArea;