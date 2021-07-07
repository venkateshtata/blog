import React from 'react';
import { useState } from 'react';
import '../styles/mockArea.css';
import Lottie from 'react-lottie';
import phone from '../assets/iphone_X_Mockup.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import playStore from '../assets/playStore.png';
import appStore from '../assets/appStore.png';
import Modal from 'react-bootstrap/Modal';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import validator from 'validator';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import{ init } from 'emailjs-com';
import emailjs from 'emailjs-com'
import apiKey from '../../src/emailkey'
import Button from 'react-bootstrap/Button'

init("user_UcKg874oCLiiNAHWtwaiv");

const MockArea = () => {
    const [email,setEmail]=useState('');
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const sendDetails = (e) => {

        if( email==='' ){
            alert("Please provide us the details before submitting");
        }

        else if(validator.isEmail(email)===false){
            alert("Please provide a valid email address");
        }

        else{
            console.log("event e",e.target)
            e.preventDefault(); // Prevents default refresh by the browser
            emailjs.send(`service_1rs0j8j`, apiKey.TEMPLATE_ID, {"to_name":"Venkatesh", "from_name": email, "message": { "email":email,}})
            .then((result) => {
            alert("Request have been sent successfully, we will get back to you shortly", result.text);
            setEmail('')
            handleClose()
            },
            (error) => {
            alert("An error occurred, Please try again", error);
            });
            };
        }
    return (
        <div className="mock-area-container">
      
      <Modal
                show={show}
                onHide={handleClose}
               
                aria-labelledby="contained-modal-title-vcenter"
                centered
                id="experience-modal"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Request beta
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body id="experience-modal-body">
                    
                    
                    <div className="experience-modal-inputs">
                    <form onSubmit={sendDetails} id="features-modal-form">

      
                           
                       
                                <TextField id="input-with-icon-grid" label="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                       
                               
                           
                        
                        </form>
                    </div>
                </Modal.Body>
                <Modal.Footer id="experience-modal-foot">
                    <Button id="experience-modal-button" onClick={sendDetails}>Confirm</Button>
                </Modal.Footer>
            </Modal>
            <div className="mock_head">
                <p>Light up your home with a touch.</p>
            </div>
        
            <div className="mock_container">
                <div>
                <img className="phone-img" src={phone} style={{ width: "20vw", height: "40vw" }} />
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
                                <img src={playStore} style={{ width: "10vw" }} onClick={handleShow}/>
                                <img src={appStore} style={{ width: "9vw"}} onClick={handleShow}/>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MockArea;