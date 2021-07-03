import React from 'react';
import '../styles/assistantArea.css';
import Lottie from 'react-lottie';
import assistant from '../assets/assistant.json';




const AssistantArea = () => {

    const alertOptions = {
        loop: true,
        autoplay: true, 
        animationData: assistant,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <div className="main_container">

            <div className="sub-container">

                <div className="anim">
                    <Lottie options={alertOptions}
                        height="30%"
                        width="25%"
                        isStopped={false}
                        isPaused={false}
                    />
                </div>
                <div className="heading_text">
                    <p>Take control of your home by saying<b className="sub-text"> Ok Google </b> or <b className="sub-text"> Hey Alexa.</b></p>
                </div>
                
                <div className="examples">
                <p>" Hey Alexa! turn on the lights in hall "</p>
                <p>" Ok Google, activate guest mode in second floor "</p>
                </div>

            </div>
            
        </div>
    )
}
export default AssistantArea;