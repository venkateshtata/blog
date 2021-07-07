import React from 'react';
import { useState } from 'react';
import '../styles/Footer.css';
// import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Privacy from '../documents/privacy.pdf'
import Terms from '../documents/terms.pdf'
import{ init } from 'emailjs-com';
import emailjs from 'emailjs-com'
import validator from 'validator';
import apiKey from '../../src/emailkey'
import instagram from '../assets/instagram.png'
import linkedIn from '../assets/icons8-linkedin-50.png'
init("user_UcKg874oCLiiNAHWtwaiv");

// const useStyles = makeStyles((theme) => ({
//     root: {
//       '& > *': {
//         // margin: theme.spacing(1),
//         width: '25ch',
//         display:'flex',
//         flexDirection:'column',
//         borderBottom:'white'

//       },
//     },
//   }));
const Footer = () => {
    const [name1,setName]=useState('')
    const [email1,setEmail]=useState('')
    const [message1,setMessage]=useState('')
    const handleSubmit = (e) => {

        if(name1==='' || email1==='' || message1===''){
            alert("Please provide all the details before submitting");
        }

        else if(validator.isEmail(email1)===false){
            alert("Please provide a valid email address");
        }

        else{
            console.log("event e",e.target)
            e.preventDefault(); // Prevents default refresh by the browser
            emailjs.send("service_1rs0j8j", apiKey.TEMPLATE_ID, {"to_name":"Venkatesh", "from_name": name1, "message": message1})
            .then((result) => {
            alert("Message Sent, we will get back to you shortly", result.text);
            },
            (error) => {
            alert("An error occurred, Please try again", error.text);
            });
            };
        }
    const useStyles = makeStyles((theme) => ({
        root: {
          '& > *': {
            marginBottom: theme.spacing(1),
            width: '25ch',
            color:'white'
          },
        },
      }));
    const classes = useStyles();
    return (
        <div className='footer-container'>
            <div className="footer-flex-wrapper">
                <div className="footer-sub-container">
                    <div className="company-name">
                        <div>euclid<b className="dot">.</b>Home</div>
                        <div className="contact-euclid">
                            <div>Reach out to us</div>
                            <div>contact@euclid-ai.com</div>
                        </div>

                    </div>
                    <div className="company-details">
                        <div className="contact-us">
                            <div className="contact-us-heading">Contact us</div>
                            <div className="contact-us-form">
                                <form className={classes.root} onSubmit={handleSubmit} id="contact-material-form" noValidate autoComplete="off">
                                    <TextField value={name1} onChange={(e)=>setName(e.target.value)}id="standard-basic" label="Name" color="white"/>
                                    <TextField value={email1} onChange={(e)=>{setEmail(e.target.value)}} id="standard-basic" label="Email" color="white"/>
                                    <TextField value={message1} onChange={(e)=>setMessage(e.target.value)} id="standard-basic" label="Message" color="white"/>
                                    <Button type="submit" id="header-btn-submit">submit</Button>{' '}
                                </form>
                                {/* <input type="submit" value="Send" /> */}
                            
                            </div>
                            </div>

                        </div>
                    </div>
                    <div className='policy-container'>
                        <div className="policy-subcontainer">
                         <hr className="seperator"></hr>
                         <div className="privacy-content">
                             <div className="linkedIn-profile">
                            <div className="icons-footer">
                             <img src={instagram} className="footer-contact-icons"/>
                             <img src={linkedIn} className="footer-contact-icons"/>
                             </div>
                             </div>
                             <div className="privacy-links">
                                 <div className="privacy-policy"><a href = {Privacy} target = "_blank">Privacy Policy</a></div>
                                 <div className="terms-of-service"><a href = {Terms} target = "_blank">Terms of Service</a></div>
                                 <div className="copyright">Copyright©2020 euclid.ai Pvt Ltd.</div>

                             </div>
                         </div>
                        </div>
                    </div>
                </div>
            </div>
            )
}
            export default Footer