import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ShowNotice from '../ShowNotices/ShowNotice';
import '../Notices/Notices.css'

const Notices = () => {
    const [notices, SetNotice] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/schoolNotices')
            .then(res => res.json())
            .then(data => SetNotice(data))
    }, [])
    return (
        <div className='noticess'>


            <ShowNotice schoolNotice={notices} key={notices._id} />


        </div>
    );
};

export default Notices;