import React from 'react'
import '../styles/papers.css'

export default function Papers() {
    return (
        <div className="papers-wrapper">
             <p className="papers-title">Paper Implementations</p>

             <div className="paper-area">
                <p className="paper-title">End to End Learning for Self-Driving Cars - By Karol Zieba, Nvidia Corporation.</p>
                <p className="paper-desc">A convolutional neural network to map raw pixels from a single front facing camera directly to steering commands in PyTorch. Trained and evaluated the model on comma ai dataset.</p>
                <p className="paper-desc"> Github : <href link="https://github.com/venkateshtata/research">hello</href></p>
                <iframe src='https://www.youtube.com/embed/GSU8tp1WxU8'
                                frameborder='0'
                                allow='autoplay; encrypted-media'
                                allowfullscreen
                                title='video'
                                className='project-video'
                            />

             </div>
        </div>
    )
}
