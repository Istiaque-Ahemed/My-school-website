import React from 'react';
import { Container } from 'react-bootstrap';

import '../ShowNotices/ShowNotice.css';

const ShowNotice = ({ schoolNotice }) => {
    console.log(schoolNotice)
    let shownotice = [];
    schoolNotice.map(noticess => shownotice.push(noticess._id))
    console.log(shownotice.join())

    return (
        <Container>
            <div className="demo-1">
                <h4>{shownotice.join()}</h4>

            </div>
            <p>ঘোষণা</p>
        </Container>


    );
};

export default ShowNotice;