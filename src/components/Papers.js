import React from 'react'
import '../styles/papers.css'
import { AwesomeButtonSocial} from "react-awesome-button";
import AwesomeButtonStyles from "react-awesome-button/src/styles/styles.scss";
import unet from '../assets/unet.png';

export default function Papers() {
    return (
        <div className="papers-wrapper">
             <p className="papers-title">Paper Implementations</p>

             <div className="paper-area">
                <p className="paper-title1">End to End Learning for Self-Driving Cars - By Karol Zieba, Nvidia Corporation</p>
                <AwesomeButtonSocial type="github" className="aws-btn" href='https://github.com/venkateshtata/research'>Github</AwesomeButtonSocial>
                <p className="paper-desc">A convolutional neural network to map raw pixels from a single front facing camera directly to steering commands in PyTorch. Trained and evaluated the model on comma ai dataset.</p>
                
                <iframe src='https://www.youtube.com/embed/GSU8tp1WxU8'
                                frameborder='0'
                                allow='autoplay; encrypted-media'
                                allowfullscreen
                                title='video'
                                className='project-video'
                />
             </div>

             <div className="paper-area">
                <p className="paper-title">U-Net: Convolutional Neural Net Architecture for Biomedical Image Segmentation - Florian Schroff, Google Inc.</p>
                <AwesomeButtonSocial type="github" className="aws-btn" href='https://github.com/venkateshtata/SemanticSegmentation'>Github</AwesomeButtonSocial>
                <p className="paper-desc">U-Net is a neural network architecture trained end-to-end with a very few images for performing pixel segmentation. I have trained the model on Electron Microscopy Dataset to transform a grayscale EM image of nerve cell into an accurate boundary map differentiating the walls in between, at a pixel level.</p>
                
                <img src={unet} width={350} height={280}/>

             </div>
        </div>
    )
}
