import React from 'react'
import profilePic from '../assets/profile_pic.jpg';
import '../styles/hackathons.css'
import { Card } from 'antd';
const { Meta } = Card;

export default function Hackathons() {
    return (
        <div className="hackathons-wrapper">
            <p className="hackathon-title">Hackathons</p>
            <div className="hackathons-cards">

                <Card style={{ width: 400, marginLeft: 50, marginRight: 50 }} cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"/>}>
                    <Meta style={{margin: 10 }} title="Hack.Bangalore by MBRDI" description="- 1st Runner Up"/>
                    <Meta style={{margin: 10 }} description="- Invited to showcase our project in Mobile World Congress, Barcelona, Spain."/>
                    <Meta style={{margin: 10 }} description="- Was organized by Mercedes Benz Research & Development India."/>  
                </Card>

                <Card style={{ width: 400, marginLeft: 50, marginRight: 50 }} cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"/>}>
                    <Meta style={{margin: 10 }} title="AgoraRTC Hack by Agora.io" description="- 4th Place"/>
                    <Meta style={{margin: 10 }} description="- Integrated Agora.io API into a BCI pipeline using a commercially available EEG Device for making video calls."/>
                </Card>

                <Card style={{ width: 400, marginLeft: 50, marginRight: 50 }} cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"/>}>
                    <Meta style={{margin: 10 }} title="NASA Space Apps Challenge" description="- 5th Place"/>
                    <Meta style={{margin: 10 }} description="- Built a tool that makes use of Geo-Spatial data and deep learning models  to project and provide analysis on geographical properties of a given region to help enterprises."/>
                </Card>
            
            </div>
        </div>
    )
}
