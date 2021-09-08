import React from 'react'
import hack1 from '../assets/hack1.jpg';
import hack2 from '../assets/hack2.png';
import hack3 from '../assets/hack33.png';
import '../styles/hackathons.css'
import { Card } from 'antd';
const { Meta } = Card;

export default function Hackathons() {
    return (
        <div className="hackathons-wrapper">
            <p className="hackathon-title">Hackathons</p>
            <div className="hackathons-cards">

                <Card style={{ width: 350, marginLeft: 20, marginRight: 20,marginTop: 25 }} cover={<img alt="example" src={hack1}/>}>
                    <Meta style={{margin: 10 }} title="Hack.Bangalore by MBRDI" description="- 1st Runner Up"/>
                    <Meta style={{margin: 10 }} description="- Invited to showcase our project in Mobile World Congress, Barcelona, Spain."/>
                    <Meta style={{margin: 10 }} description="- Organized by Mercedes Benz Research & Development India."/>  
                </Card>

                <Card style={{ width: 350, marginLeft: 20, marginRight: 20,marginTop: 25 }} cover={<img alt="example" src={hack2}/>}>
                    <Meta style={{margin: 10, marginTop: 30 }} title="Vistara Aviation Hack" description="- 4th Place"/>
                    <Meta style={{margin: 10 }} description="- Built a face recognition system for airport security to ID the passangers while entering the enter their terminals"/>
                    <Meta style={{margin: 10 }} description="- Organized by Vistara Airlines."/> 
                </Card>

                <Card style={{ width: 350, marginLeft: 20, marginRight: 20,marginTop: 25 }} cover={<img alt="example" src={hack3}/>}>
                    <Meta style={{margin: 10, marginTop: 30  }} title="Space Apps Challenge" description="- 5th Place"/>
                    <Meta style={{margin: 10 }} description="- Built a tool that makes use of Geo-Spatial data and deep learning models  to project and provide analysis on geographical properties of a given region to help enterprises."/>
                    <Meta style={{margin: 10 }} description="- Organized by NASA."/> 
                </Card>

            </div>
        </div>
    )
}
