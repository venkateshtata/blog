import React from 'react';
import '../styles/keyFeatures.css';
import Lottie from 'react-lottie';
import assistant from '../assets/assistant.json';
import patternRecognition from '../assets/patternRecognition.png';
import everyday from '../assets/everyday.png';
import dataPrivacy from '../assets/privacy.png';




const KeyFeatures = () => {

    const alertOptions = {
        loop: true,
        autoplay: true, 
        animationData: assistant,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <div className="features_container">

            <div className="features-wrap">
                <div className="feature-img">
                    <img src={patternRecognition} style={{ width: "6vw", margin:'30%'}}/>
                </div>
                <p className="heading">Pattern Recognition</p>
                <div className="feature-desc">
                <p>Euclid Home learns without being intrusive or obnoxious. If you like the shades closed on a hot afternoon, Home will take note of that preference even before you remember it and do it.</p>
                </div>
            </div>  

            <div className="features-wrap">
                <div className="feature-img">
                    <img src={dataPrivacy} style={{ width: "6vw",  margin:'30%'}}/>
                </div>
                <p className="heading">Data Privacy</p>
                <div className="feature-desc">
                <p>Privacy is our number one concern. Your data always stays with you and your home, while our AI takes advantage of Federated Learning to learn from you without seeing light of outside world.</p>
                </div>       
            </div>  

            <div className="features-wrap">
                <div className="feature-img">
                    <img src={everyday} style={{ width: "6vw", margin:'30%'}}/>
                </div>
                <p className="heading">Improving Everyday</p>
                <div className="feature-desc">
                <p>Euclid Home is always learning and growing. The more you interact with your home, the more it will understand you and try to optimize the power being consumed by your home.</p>
                </div>       
            </div>  

            
            
        </div>
    )
}
export default KeyFeatures;