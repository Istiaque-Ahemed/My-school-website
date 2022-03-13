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
                        src={"https://i.ibb.co/k8j96QC/musa1.jpgx"}
                        alt="First slide"
                    />
                    <Carousel.Caption>


                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src={"https://i.ibb.co/1RWW9FJ/musa3.jpg"}
                        alt="Second slide"
                    />
                    <Carousel.Caption>


                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={"https://i.ibb.co/HV5G8Pk/musa4.jpg"}
                        alt="Third slide"
                    />
                    <Carousel.Caption>


                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={"https://i.ibb.co/44DgDZH/musa2.jpg"}
                        alt="Third slide"
                    />
                    <Carousel.Caption>


                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </Container >
    );
};

export default Slider;
