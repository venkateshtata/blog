import React from 'react'
import '../styles/projects.css'

export default function Projects() {
    return (
        <div className="projects-wrapper">
            <p className="projects-title">Projects</p>


            <div className="projects-area">
                <p className="project-title1">Bot Creator : Automated chatbot design and deployment platform</p>
                <p className="project-desc">A tool that lets anyone create chatbots through a Drag-n-Drop interface written in React JS and deploy the bot in the platform of user’s choice. Later letting the user analyse the data collected over a dashboard as the bot is interacting with users. Helping recruiting organisations to avoid hundreds of phone calls for collecting the basic information from large numbers of people.</p>
                <div className="multi-video">
                <iframe src='https://www.youtube.com/embed/4600b7e7kl8'
                                frameborder='0'
                                allow='autoplay; encrypted-media'
                                allowfullscreen
                                title='video'
                                className='multi-video-single'
                            />
            </div>
            </div>

            <div className="projects-area">
                <p className="project-title">Coordinate : An indoor positioning system</p>
                <p className="project-desc">Coordinate is a beacon free Indoor Positioning System built for CHLA campus (Children’s Hospital Los Angeles). The system uses ML to detect the step length and direction in which the user is moving from the IMU of the phone and update the position of the user within any area, hence no need to install any beacons around the area except at the entrances.</p>
                <div className="multi-video">
                <iframe src='https://www.youtube.com/embed/hd3dEZCFYf0'
                                frameborder='0'
                                allow='autoplay; encrypted-media'
                                allowfullscreen
                                title='video'
                                className='multi-video-single'
                            />
                </div>
               
            </div>

            <div className="projects-area">
                <p className="project-title">EEG Controller Rover : A Brain-Computer Interface</p>
                <p className="project-desc">Developed a Brain-Computer Interface implementation to control a rover with just by thoughts, i.e with a raw stream of real-time EEG data. The project was developed by 2 people including me. In the project we used a commercially available EEG-Based BDI device called Emotiv Insight, that provides 5 electrodes to pick up signals from the scalp. We trained a time series classifier on this data to classify the signals in real-time and send the command to a raspberry-pi controlling the rover. Checkout the blog here https://medium.com/@prajwalgatti/mind-controlled-rover-2f43bcfe8eb6</p>
                <div className="multi-video">
                <iframe src='https://www.youtube.com/embed/d1QNUIWfFfg'  
                                frameborder='0'
                                allow='autoplay; encrypted-media'
                                allowfullscreen
                                title='video'
                                className='multi-video-single'
                            />
                <iframe src='https://www.youtube.com/embed/7oq8Gmlzn78'   
                                frameborder='0'
                                allow='autoplay; encrypted-media'
                                allowfullscreen
                                title='video'
                                className='multi-video-single'
                            />
                </div>
            </div>

            <div className="projects-area">
                <p className="project-title">Sketch to UI</p>
                <p className="project-desc">A rapid prototyping tool for converting hand drawn sketches on paper to a working html code using a trained end-to-end deep learning model integrated pipeline.</p>
                <div className="multi-video">
                <iframe src='https://www.youtube.com/embed/2wES0YKTFSY'
                                frameborder='0'
                                allow='autoplay; encrypted-media'
                                allowfullscreen
                                title='video'
                                className='multi-video-single'
                            />
                            </div>
            </div>
            
        </div>
    )
}
