import React from 'react';
import { Container } from 'react-bootstrap';
import Marquee from "react-fast-marquee";

import '../ShowNotices/ShowNotice.css';

const ShowNotice = ({ schoolNotice }) => {

    let shownotice = [];
    schoolNotice.map(noticess => shownotice.push(noticess.notice))


    return (
        <Container>
            {/* <div className='marquee'>

                <div className='marqueeContentContainer'>
                    <p>{shownotice.join("  *")}</p>

                </div>

            </div> */}
            <div class="marquee">
                <Marquee gradientWidth={0} pauseOnHover={true} speed={50}>
                    <p>{shownotice.join("  *")}</p>
                </Marquee>
            </div>
        </Container>


    );
};

export default ShowNotice;