import React from 'react';
import '../styles/cardArea.css';
import ReactCardCarousel from "react-card-carousel";
import Lottie from 'react-lottie';
import animationData from '../assets/data.json';
import alertData from '../assets/alert2.json';
import energy_monitor from '../assets/energy2.json';
import automatic from '../assets/automatic2.json';
// import power from '../assets/power.png';
import pattern from '../assets/pattern.png';


function CardArea() {

    // const defaultOptions = {
    //     loop: true,
    //     autoplay: true, 
    //     animationData: animationData,
    //     rendererSettings: {
    //       preserveAspectRatio: 'xMidYMid slice'
    //     }
    //   };

    const alertOptions = {
        loop: true,
        autoplay: true, 
        animationData: alertData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    const energyOptions = {
        loop: true,
        autoplay: true, 
        animationData: energy_monitor,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    const automaticOptions = {
        loop: true,
        autoplay: true, 
        animationData: automatic,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <div className="root-wrapper">

            <div className="root-div">

            <div className="text-area">
                
                    <text className="left-text-1">Save</text> 
                    <text className="left-text-1">Energy</text>   
                    <text className="left-text">with</text>  
                    <text className="left-text-2">Intelligent</text>  
                    <text className="left-text-2">Automation</text>  
            </div>

            <div className="cards-area">
                {/* <img src={pattern} className="icon-style"/> */}

                <ReactCardCarousel autoplay={true} autoplay_speed={2500} alignment="horizontal">
                    
                    <div className="card1-style">
                        <div className="card-content">
                                <Lottie options={alertOptions}
                                    height="20%"
                                    width="20%"
                                    isStopped={false}
                                    isPaused={false}
                                />
                                <text className="card-heading-text">Real-Time User Alerts</text>  
                                {/* <text className="card-desc-text">User can enable this option so the system can alert the user whenever there’s a light that is on while no one’s in the room.</text> */}
                        </div>
                    </div>

                    <div className="card2-style">
                        <div className="card-content">
                                <Lottie options={energyOptions}
                                    height="40%"
                                    width="40%"
                                    isStopped={false}
                                    isPaused={false}
                                />
                            <text className="card-heading-text">Energy Monitoring</text>
                            {/* <text className="card-desc-text">Access energy consumption statistics of your home through our App and set the target for the system to save. </text> */}
                        </div>
                    </div>

                    <div className="card3-style">     
                        <div className="card-content">
                                <img src={pattern} className="icon-style"/>
                                <text className="card-heading-text">User Pattern Recognition</text>
                                {/* <text className="card-desc-text">EuclidHome learns the pattern in which users interact with their home and uses that data to optimise power usage. </text> */}
                        </div>
                    </div>

                    <div className="card4-style">     
                        <div className="card-content">
                                    <Lottie options={automaticOptions}
                                        height="45%"
                                        width="45%"
                                        isStopped={false}
                                        isPaused={false}
                                    />
                                <text className="card-heading-text">Automatic Control</text>  
                                {/* <text className="card-desc-text">The system automatically detects in-activity in house and  switches off lights.</text> */}
                        </div>
                    </div>

                </ReactCardCarousel>
            </div>

            </div>
        </div> 
    );
  }

export default CardArea;