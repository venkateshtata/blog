import React from 'react'
import '../styles/magazine.css'
import { AwesomeButton} from "react-awesome-button";

export default function Magazine() {
    return (
        <div className="magazines-wrapper">
            <p className="magazines-title">Magazine Publications</p>

            <div className="magazine-area">
                <p className="magazine-title1">3D Reconstruction with Vision</p>
                <p className="magazine-desc">Exactly a year back, before I started writing this article, I watched Andrej Karapathy, the director of AI at Tesla delivering a talk where he showed the world a glimpse of how a Tesla car perceives depth using the cameras hooked to the car in-order to reconstruct its surroundings in 3D and take decisions in real-time, everything(except the front radar for safety) was being computed just with vision ...</p>
                <p className="magazine-reads">~ 19,600 reads</p>
                <AwesomeButton type="primary" href='https://towardsdatascience.com/3-d-reconstruction-with-vision-ef0f80cbb299'>Article</AwesomeButton>
            </div>

            <div className="magazine-area">
                <p className="magazine-title">Understanding Generative Adversarial Networks with PyTorch</p>
                <p className="magazine-desc">GANs contain two separate neural networks. Let us call one neural network as “G”, which stands for Generator and the other neural network as “D”, which is a Discriminator. The Generator first generates random images and a Discriminator sees those images and tells the Generator how real the generated images are ...</p>
                <p className="magazine-reads">~ 25,000 reads</p>
                <AwesomeButton type="primary" href='https://becominghuman.ai/understanding-and-building-generative-adversarial-networks-gans-8de7c1dc0e25'>Article</AwesomeButton>
            </div>

            <div className="magazine-area">
                <p className="magazine-title">Building Convolutional Neural Networks</p>
                <p className="magazine-desc">In this article we will be solving an image classification problem, where our goal will be to tell which class the input image belongs to. The way we are going to achieve it is by training an artificial neural network on few thousand images of cats and dogs and make the NN(Neural Network) learn to predict which class the image belongs to, next time it sees an image having a cat or dog in it ...</p>
                <p className="magazine-reads">~ 3,00,000 reads</p>
                <AwesomeButton type="primary" href='https://becominghuman.ai/building-an-image-classifier-using-deep-learning-in-python-totally-from-a-beginners-perspective-be8dbaf22dd8'>Article</AwesomeButton>
            </div>

        </div>
    )
}
