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

import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Mail from '@material-ui/icons/MailOutline'
import Phone from '@material-ui/icons/Phone'
import Address from '@material-ui/icons/Home'
import { NearMe } from '@material-ui/icons';
import{ init } from 'emailjs-com';
import emailjs from 'emailjs-com'
import apiKey from '../../src/emailkey'
init("user_UcKg874oCLiiNAHWtwaiv");
const MainHeadingArea = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [option, setOption] = React.useState('FreeTrial');
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [phone,setPhone]=useState('')
    const [address,setAddress]=useState('')
    const [city,setCity]=useState('')
    const handleChange = (event) => {
        setOption(event.target.value);
    };
    const handleSubmit = (e) => {
        console.log("event e",e.target)
        e.preventDefault(); // Prevents default refresh by the browser
        emailjs.sendForm(`service_1rs0j8j`, apiKey.TEMPLATE_ID, e.target, apiKey.USER_ID)
        .then((result) => {
        alert("Message Sent, We will get back to you shortly", result.text);
        },
        (error) => {
        alert("An error occurred, Please try again", error.text);
        });
        };
    const useStyles = makeStyles((theme) => ({
        root: {
          '& > *': {
            // margin: theme.spacing(1),
            // width: '25ch',
            // color:'white'
          },
        },
      }));
      const classes = useStyles();
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
                        <FormLabel component="legend">Option, that you are interested in</FormLabel>
                        <RadioGroup aria-label="gender" name="gender1" value={option} onChange={handleChange}>
                            <FormControlLabel value="FreeTrial" control={<Radio />} label="Free trial" />
                            <FormControlLabel value="Buy" control={<Radio />} label="Buy euclid home" />

                        </RadioGroup>
                    </FormControl>
                    <div className="option-explanation">
                        {option==='Buy'?'Thanks for considering to buy':'This lets you automate few appliances in your home'}
                    </div>
                    <div className="experience-modal-inputs">
                    <form  onSubmit={handleSubmit} >

                        <Grid container spacing={1} alignItems="flex-end">
                            <Grid item>
                                <AccountCircle />
                            </Grid>
                            <Grid item>
                                <TextField style={{ width: '100%' }}
                                    inputStyle={{ width: '100%' }} id="input-with-icon-grid" label="Name" value={name} onChange={(e)=>setName(e.target.value)}/>
                            </Grid>
                        </Grid>
                        <Grid container spacing={1} alignItems="flex-end">
                            <Grid item>
                                <Mail />
                            </Grid>
                            <Grid item>
                                <TextField id="input-with-icon-grid" label="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                            </Grid>
                        </Grid>
                        <Grid container spacing={1} alignItems="flex-end">
                            <Grid item>
                                <Phone />
                            </Grid>
                            <Grid item>
                                <TextField id="input-with-icon-grid" label="Phone" value={phone} onChange={(e)=>setPhone(e.target.value)} />
                            </Grid>
                        </Grid>
                        <Grid container spacing={1} alignItems="flex-end">
                            <Grid item>
                                <Address />
                            </Grid>
                            <Grid item>
                                <TextField id="input-with-icon-grid" label="Address" value={address} onChange={(e)=>setAddress(e.target.value)}/>
                            </Grid>
                        </Grid>
                        <Grid container spacing={1} alignItems="flex-end">
                            <Grid item>
                                <Address />
                            </Grid>
                            <Grid item>
                                <TextField id="input-with-icon-grid" label="City" value={city} onChange={(e)=>setCity(e.target.value)}/>
                            </Grid>
                        </Grid>
                        </form>
                    </div>
                </Modal.Body>
                <Modal.Footer id="experience-modal-foot">
                    <Button id="experience-modal-button" onClick={handleClose}>Done</Button>
                </Modal.Footer>
            </Modal>
            <div className="main_heading_text">
                <p>euclid<b className="dot">.</b>Home</p>
                <Button onClick={handleShow} id="header-btn" size="lg">Experience</Button>{' '}
            </div>

        </div>
    )
}
export default MainHeadingArea;