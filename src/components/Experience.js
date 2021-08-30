import React from 'react'
import '../styles/experience.css'
import {
    Timeline,
    Events,
    ImageEvent,
    themes, 
    createTheme
  } from '@merc/react-timeline';
import daimler from '../assets/daimler2.png'
import vidatt from '../assets/vidatt2.png'
import mercedes from '../assets/mercedes2.png'
import euclid from '../assets/euclid.png'

const customTheme = createTheme(themes.default, {
    card: {
      backgroundColor: '#fff'
    },
    date: {
      backgroundColor: '#007FFF',
    },
    marker: {
      borderColor: '#007FFF'
    },
    timelineTrack: {
      backgroundColor: '#0047ab',
    },
    ImageEvent:{

    }
  });


export default function Experience() {

    return (
        <div className="exp_container">

            <div className="sub-container">

                <div className="heading_text">
                    <div>
                    <p className="exp-title">Experience</p>
                    </div>
                </div>
                <div className="exp-diagram">
                    <Timeline theme={customTheme}>
                        <Events>

                            

                            <ImageEvent date="July 2020 - Currently Working" className="event" src={euclid}>
                                <div>
            
                                <p className="exp-card-title"><b className="sub-head">Company:</b> euclid.ai</p>
                                <p className="exp-card-role"><b className="sub-head">Role:</b> Founder, Cloud Architect</p>
      
                                </div>
                            </ImageEvent>

                            <ImageEvent date="Nov 2019 - April 2020" src={mercedes} >

                                <p className="exp-card-title"><b className="sub-head">Company:</b> Mercedes Benz Research & Development India</p>
                                <p className="exp-card-role"><b className="sub-head">Role:</b> Research Intern</p>
                            
                            </ImageEvent>


                            <ImageEvent date="June 2018 - Aug 2018" src={daimler}>
                                <div>
                        
                 
                                <p className="exp-card-title"><b className="sub-head">Company:</b> Daimler AG</p>
                                <p className="exp-card-role"><b className="sub-head">Role:</b> Research Intern</p>
                  
                                </div>
                            </ImageEvent>

                            <ImageEvent date="Sep 2017 - Nov 2018" src={vidatt} >
                                <p className="exp-card-title"><b className="sub-head">Company:</b> Vidatt Data Analytics</p>
                                <p className="exp-card-role"><b className="sub-head">Role:</b> Software Engineering Intern</p>
                            </ImageEvent>

                        </Events>
                    </Timeline>
                </div>

            </div>
            
        </div>
    )
}
