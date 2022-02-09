import React from 'react';
import { Container, Carousel } from 'react-bootstrap';
import '../Carousel/slider.css';


const Slider = () => {
    return (
        <Container>
            <Carousel className='carousel'>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={"https://i.ibb.co/6b9xF3R/pexels-max-fischer-5212345.jpg"}
                        alt="First slide"
                    />
                    <Carousel.Caption>

                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src={"https://i.ibb.co/CsbvxZN/pexels-pavel-danilyuk-8423425.jpg"}
                        alt="Second slide"
                    />
                    <Carousel.Caption>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={"https://i.ibb.co/Q9zqfn5/pexels-max-fischer-5212334.jpg"}
                        alt="Third slide"
                    />
                    <Carousel.Caption>

                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </Container >
    );
};

export default Slider;
