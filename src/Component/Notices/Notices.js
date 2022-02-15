import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ShowNotice from '../ShowNotices/ShowNotice';
import '../Notices/Notices.css'
import { Container } from 'react-bootstrap';

const Notices = () => {
    const [notices, SetNotice] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/schoolNotices')
            .then(res => res.json())
            .then(data => SetNotice(data))
    }, [])
    return (
        <Container>
            <div className='noticess'>
                <p className='notices-title'>ঘোষণা</p>


                <ShowNotice schoolNotice={notices} key={notices._id} />


            </div>
        </Container>
    );
};

export default Notices;