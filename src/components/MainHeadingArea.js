import React from 'react';
import { useState } from 'react';
import '../styles/mainHeadingArea.css';
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import validator from 'validator';
import home_logo from '../assets/home_logo.png';
import Lottie from 'react-lottie';
import swipedown from '../assets/slider-down-white.json'
// import Input from '@material-ui/core/Input';
// import InputLabel from '@material-ui/core/InputLabel';
// import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
// import Grid from '@material-ui/core/Grid';
// import AccountCircle from '@material-ui/icons/AccountCircle';
// import Mail from '@material-ui/icons/MailOutline'
// import Phone from '@material-ui/icons/Phone'
// import Address from '@material-ui/icons/Home'
// import { NearMe } from '@material-ui/icons';
import{ init } from 'emailjs-com';
import emailjs from 'emailjs-com'
import apiKey from '../../src/emailkey'

import * as Scroll from 'react-scroll';




init("user_UcKg874oCLiiNAHWtwaiv");

const MainHeadingArea = () => {

    let scroll    = Scroll.animateScroll;

    const swipeOptions = {
        loop: true,
        autoplay: true, 
        animationData: swipedown,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    const [show, setShow] = useState(false);

    const handleClose = () => {
        console.log("clicked")
        
        setShow(false);
    }

    const handleShow = () => {
        setShow(true);
    }
    
    const scrollTo = () => {
        scroll.scrollTo(700);
    }

    const [option, setOption] = React.useState('FreeTrial');
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [phone,setPhone]=useState('')
    const [address,setAddress]=useState('')
    const [city,setCity]=useState('')
    const handleChange = (event) => {
        setOption(event.target.value);
    };
    const sendDetails = (e) => {

        if(name==='' || email==='' || phone==='' || address==='' || city===''){
            alert("Please provide all the details before submitting");
        }

        else if(validator.isEmail(email)===false){
            alert("Please provide a valid email address");
        }

        else{
            console.log("event e",e.target)
            e.preventDefault(); // Prevents default refresh by the browser
            emailjs.send(`service_1rs0j8j`, apiKey.TEMPLATE_ID, {"to_name":"Venkatesh", "from_name": name, "message": {"name":name, "email":email, "phone":phone, "address":address, "city":city, "option":option}})
            .then((result) => {
            alert("Request have been sent successfully, we will get back to you shortly", result.text);
            handleClose()
            setName('')
            setEmail('')
            setPhone('')
            setAddress('')
            setCity('')
            setOption('FreeTrial')
            },
            (error) => {
            alert("An error occurred, Please try again", error);
            });
            };
        }
            
        

    // const useStyles = makeStyles((theme) => ({
    //     root: {
    //       '& > *': {
    //         // margin: theme.spacing(1),
    //         // width: '25ch',
    //         // color:'white'
    //       },
    //     },
    //   }));
    //   const classes = useStyles();
    return (

        <div className="main_heading_area_container">

            <Modal
                show={show}
                onHide={handleClose}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                id="experience-modal"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Please provide us the details
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body id="experience-modal-body">
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Interested in</FormLabel>
                        <RadioGroup aria-label="gender" name="gender1" value={option} onChange={handleChange} row>
                            <FormControlLabel value="FreeTrial" control={<Radio />} label="Free trial" />
                            <FormControlLabel value="Buy" control={<Radio />} label="Buy euclid home" />

                        </RadioGroup>
                    </FormControl>
                    <div className="option-explanation">
                        {option==='Buy'?'Thanks for considering to buy':'Experience euclid home in upto 3 rooms of your house for free!'}
                    </div>
                    <div className="experience-modal-inputs">
                    <form onSubmit={sendDetails} id="experience-modal-form">

                                <TextField 
                                     id="input-with-icon-grid" label="Name" value={name} onChange={(e)=>setName(e.target.value)}/>
                           
                       
                                <TextField id="input-with-icon-grid" label="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                       
                                <TextField id="input-with-icon-grid" label="Phone" value={phone} onChange={(e)=>setPhone(e.target.value)} />
                        
                                <TextField id="input-with-icon-grid" label="Address" value={address} onChange={(e)=>setAddress(e.target.value)}/>
                       
                                <TextField id="input-with-icon-grid" label="City" value={city} onChange={(e)=>setCity(e.target.value)}/>
                           
                        
                        </form>
                    </div>
                </Modal.Body>
                <Modal.Footer id="experience-modal-foot">
                    <Button id="experience-modal-button" onClick={sendDetails}>Confirm</Button>
                </Modal.Footer>
            </Modal>
            <div className="main_heading_text">
            <div className="section-1-text">
            <div>
           
                {/* <div className="head">
                    <img className="main_heading_logo" src={home_logo}/>
                    <div className="main_heading_text">euclid Home</div>
                </div> */}

            <div className="tagline">
                    <p>Make your home truly smart with <b className="dot">Adaptive Intelligence.</b></p>
                </div>
            </div>
            </div>
            <Button className="btn" id="header-btn" size="lg" onClick={handleShow}>experience</Button>{' '}
            
            <div onClick={scrollTo}>
                <Lottie options={swipeOptions}
                                    height="20%"
                                    width="20%"
                                    isStopped={false}
                                    isPaused={false}
                                />
            </div>
            </div>
           
        </div>
    )
}
export default MainHeadingArea;