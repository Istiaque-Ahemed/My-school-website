import React from 'react';
import { Container } from 'react-bootstrap';

import '../ShowNotices/ShowNotice.css';

const ShowNotice = ({ schoolNotice }) => {

    let shownotice = [];
    schoolNotice.map(noticess => shownotice.push(noticess.notice))


    return (
        <Container>
            <div className='marquee'>

                <div className='marqueeContentContainer'>
                    <i class="fa-solid fa-flag"></i><p>{shownotice.join("  *")}</p>
                </div>
            </div>
        </Container>


    );
};

export default ShowNotice;