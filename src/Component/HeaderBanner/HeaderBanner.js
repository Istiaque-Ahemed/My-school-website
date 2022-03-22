import React from 'react';
import { Container } from 'react-bootstrap';
import '../HeaderBanner/HeaderBanner.css'

const HeaderBanner = () => {
    return (
        <Container>
            <img className='BannerImg' src={"https://i.ibb.co/pP2ZRt3/20220130-180437.jpg"} alt="" />
        </Container>
    );
};

export default HeaderBanner;