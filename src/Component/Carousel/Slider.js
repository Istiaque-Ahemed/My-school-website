import React from 'react';
import { Container } from 'react-bootstrap';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


import '../Carousel/slider.css';


const Slider = () => {
    return (
        <Container>
            <>
                <div>
                    <img src={'https://i.ibb.co/6b9xF3R/pexels-max-fischer-5212345.jpg'} />

                </div>
                <div>
                    <img src={"https://i.ibb.co/CsbvxZN/pexels-pavel-danilyuk-8423425.jpg"} />

                </div>
                <div>
                    <img src={'https://i.ibb.co/Q9zqfn5/pexels-max-fischer-5212334.jpg'} />

                </div>
            </Carousel>
        </Container>
    );
};

export default Slider;
