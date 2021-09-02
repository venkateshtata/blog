import React from 'react'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import CardColumns from 'react-bootstrap/CardColumns'
import python from '../assets/python.png'
import pytorch from '../assets/pytorch.png'
import js from '../assets/js.png'
import cpp from '../assets/cpp.png'
import cuda from '../assets/cuda2.png'
import cv from '../assets/cv.png'
import '../styles/skills.css'

export default function Skills() {
    return (
        <div className="skills-wrapper">
            <p className="skills-title">Skills</p>
            <div className="skills-area">

                <Card border="dark" style={{ width: '25rem',height: '7rem', margin: '20px' }}>
                    <Card.Header>Python Scripting</Card.Header>
                    <Card.Body>
                        <div className="skill-card">
                        <img src={python} width={30} height={30} style={{marginRight: '30px', marginLeft: '20px' }}></img>
                        <Card.Title style={{ width: '18rem', fontSize: '14px' }}>Numpy, Pandas, CPython</Card.Title>
                        </div>
                    </Card.Body>
                </Card>

                <Card border="dark" style={{ width: '25rem',height: '7rem', margin: '20px' }}>
                    <Card.Header>Machine Learning</Card.Header>
                    <Card.Body>
                        <div className="skill-card">
                        <img src={pytorch} width={25} height={30} style={{marginRight: '30px', marginLeft: '20px' }}></img>
                        <Card.Title style={{ width: '18rem', fontSize: '14px' }}>PyTorch, SciPy, Scikit-learn</Card.Title>
                        </div>
                    </Card.Body>
                </Card>

                <Card border="dark" style={{ width: '25rem',height: '7rem', margin: '20px' }}>
                    <Card.Header>Javascript</Card.Header>
                    <Card.Body>
                        <div className="skill-card">
                        <img src={js} width={30} height={30} style={{marginRight: '30px', marginLeft: '20px' }}></img>
                        <Card.Title style={{ width: '18rem', fontSize: '14px' }}>React JS (For Mobile & Web)</Card.Title>
                        </div>
                    </Card.Body>
                </Card>

            </div>

            <div className="skills-area">

                <Card border="dark" style={{ width: '25rem',height: '7rem', margin: '20px' }}>
                    <Card.Header>C++</Card.Header>
                    <Card.Body>
                        <div className="skill-card">
                        <img src={cpp} width={30} height={30} style={{marginRight: '30px', marginLeft: '20px' }}></img>
                        <Card.Title style={{ width: '18rem', fontSize: '14px' }}>OpenCV, Cython, Aten</Card.Title>
                        </div>
                    </Card.Body>
                </Card>

                <Card border="dark" style={{ width: '25rem',height: '7rem', margin: '20px' }}>
                    <Card.Header>Computer Vision</Card.Header>
                    <Card.Body>
                        <div className="skill-card">
                        <img src={cv} width={30} height={30} style={{marginRight: '20px', marginLeft: '20px' }}></img>
                        <Card.Title style={{ width: '18rem', fontSize: '14px' }}>Photogrammetry with Python, Vision based SLAM</Card.Title>
                        </div>
                    </Card.Body>
                </Card>

                <Card border="dark" style={{ width: '25rem',height: '7rem', margin: '20px' }}>
                    <Card.Header>Parallel Computing</Card.Header>
                    <Card.Body>
                        <div className="skill-card">
                        <img src={cuda} width={35} height={30} style={{marginRight: '30px', marginLeft: '20px' }}></img>
                        <Card.Title style={{ width: '18rem', fontSize: '14px' }}>CUDA Programming</Card.Title>
                        </div>
                    </Card.Body>
                </Card>


            </div>
                
            
        </div>
    )
}
