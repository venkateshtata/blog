import React from 'react';
import '../styles/mockArea.css';
// import Lottie from 'react-lottie';
import phone from '../assets/phone.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import playStore from '../assets/playStore.png';
import appStore from '../assets/appStore.png';




const MockArea = () => {

    return (
        <div className="mock_container">

            <div>
            <img src={phone} style={{ width: "20vw", height: "40vw" }} />
            </div>

            <div>
                <div className="features">   

                        <div className="feature">
                            <FontAwesomeIcon icon={['fas', 'check']} />  
                            <p className="app-features">Monitor current usage of your home at a glance</p>
                        </div>

                        <div className="feature">
                            <FontAwesomeIcon icon={['fas', 'check']} />  
                            <p className="app-features">Create your own ambiences for your home</p>
                        </div>

                        <div className="feature" >
                            <FontAwesomeIcon icon={['fas', 'check']} />  
                            <p className="app-features">Stream cameras around your house from your phone</p>
                        </div>

                        <div className="feature">
                            <FontAwesomeIcon icon={['fas', 'check']} />  
                            <p className="app-features">Setup automated triggers to match your daily routine</p>
                        </div>

                        <div className="feature">
                            <FontAwesomeIcon icon={['fas', 'check']} />  
                            <p className="app-features">Trigger your home appliances from anywhere on the planet</p>
                        </div>

                        <div className="download-img">
                            <img src={playStore} style={{ width: "10vw", margin:'10%', marginTop:'5%' }}/>
                            <img src={appStore} style={{ width: "10vw", margin:'10%', marginTop:'5%' }}/>
                        </div>

                </div>
            </div>
        </div>
    )
}
export default MockArea;