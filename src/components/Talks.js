import React from 'react'
import '../styles/talks.css'

export default function Talks() {
    return (    <div className="projects-wrapper">
    <p className="projects-title">Talks</p>


    <div className="projects-area">
        <p className="project-title1">Talk on Depth Perception with Computer Vision given at Mercedes Benz Research & Development India.</p>
        {/* <p className="project-desc">A tool that lets anyone create chatbots through a Drag-n-Drop interface written in React JS and deploy the bot in the platform of user’s choice. Later letting the user analyse the data collected over a dashboard as the bot is interacting with users. Helping recruiting organisations to avoid hundreds of phone calls for collecting the basic information from large numbers of people.</p> */}
        <div className="multi-video">
        <iframe src='https://www.youtube.com/embed/hZO5yc6q9s4'
                        frameborder='0'
                        allow='autoplay; encrypted-media'
                        allowfullscreen
                        title='video'
                        className='multi-video-single'
                    />
    </div>
    </div>

    <div className="projects-area">
        <p className="project-title">Talk on Deep Learning and Brain Computer Interface at PyCon, India.</p>
        {/* <p className="project-desc">Coordinate is a beacon free Indoor Positioning System built for CHLA campus (Children’s Hospital Los Angeles). The system uses ML to detect the step length and direction in which the user is moving from the IMU of the phone and update the position of the user within any area, hence no need to install any beacons around the area except at the entrances.</p> */}
        <div className="multi-video">
        <iframe src='https://www.youtube.com/embed/kuyZpOHDbss'
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
