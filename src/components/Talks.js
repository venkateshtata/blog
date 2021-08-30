import React from 'react'
import '../styles/talks.css'

export default function Talks() {
    return (
        <div className="talks_wrapper">
            <div className="talks-container">
                    <div>
                        <p className="talks-title">Talks</p>
                    </div>

                    <div className="talks-video-container">

                        <div className="talk-title-wrapper">
                            <div className="talk-title-area">
                                <p className="talk-title">Talk on Depth Perception with Computer Vision given at Mercedes Benz Research & Development India.</p>
                            </div>
                            <iframe src='https://www.youtube.com/embed/hZO5yc6q9s4'
                                frameborder='0'
                                allow='autoplay; encrypted-media'
                                allowfullscreen
                                title='video'
                                className='talk-video'
                            />
                        </div>

                        <div className="talk-title-wrapper">
                            <div className="talk-title-area">
                                <p className="talk-title">Talk on Deep Learning and Brain Computer Interface at PyCon, India.</p>
                            </div>
                            <iframe src='https://www.youtube.com/embed/kuyZpOHDbss'
                                frameborder='0'
                                allow='autoplay; encrypted-media'
                                allowfullscreen
                                title='video'
                                className='talk-video'
                            />
                        </div>
                    </div>
            </div>
            
        </div>
    )
}
