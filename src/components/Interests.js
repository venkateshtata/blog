import React from 'react'
import '../styles/interests.css'

export default function Interests() {
    return (
        <div className="interests-wrapper">
            <p className="interests-title">Interests</p>
            <div className="interests-area">
                
                <ul>
                    <li className="interest-title">Photogrammetric Computer Vision</li>
                        <ul>
                            <li className="interest-desc">I am interested in implementing research papers that leverage deep learning to extract denser and more accurate features than the traditional feature extraction approaches could do, from images, to build Localisation and Mapping systems.</li>
                        </ul>
                </ul>

                <ul>
                    <li className="interest-title">Rapid Prototyping of Ideas</li>
                        <ul>
                            <li className="interest-desc">I like fast prototyping of ideas, sometimes using unconventional engineering practices as it allows me to be LEAN in what I am building and keeps me from drowning in a single idea.</li>
                        </ul>
                </ul>

                <ul>
                    <li className="interest-title">Open-Source Contribution</li>
                        <ul>
                            <li className="interest-desc">Open-Source communities and have always been inspired by how production grade open-source deep learning frameworks like PyTorch are being developed by people from all around the world and am always looking to contribute my part to it.</li>
                        </ul>
                </ul>

            </div>
        </div>
    )
}
