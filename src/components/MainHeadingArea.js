import React from 'react';
import '../styles/mainHeadingArea.css';
import Button from 'react-bootstrap/Button'
const MainHeadingArea = () => {
    return (
        <div className="main_heading_area_container">
            <div className="main_heading_text">
            <p>An AI enabled automation system that lets you
take control and saves energy   </p>
<Button variant="success" id="header-btn" size="lg">Experience</Button>{' '}
            </div>
  
        </div>
    )
}
export default MainHeadingArea;