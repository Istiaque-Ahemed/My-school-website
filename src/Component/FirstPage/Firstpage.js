import React from 'react';
import { Container } from 'react-bootstrap';
import "../FirstPage/Firstpage.css"

const Firstpage = () => {
    return (
        <Container>
            <div className="fullInfo">
                <div>
                    <h5 className='school-history-title'>School History</h5>
                    <div class="School-history">
                        <img style={{ width: "400px", height: "150px", marginRight: "20px" }} src="https://i.ibb.co/KhJpx4s/school-photo.jpg" alt="" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat consectetur quibusdam magnam provident optio eaque eum deserunt? Asperiores temporibus voluptas dolorem earum consectetur, nam corporis tenetur. Beatae totam optio eos!</p>
                    </div>
                    <div class="teacher-quotes">
                        <div>
                            <h2>istiaqj</h2>
                        </div>
                        <div>
                            ahmed
                        </div>
                    </div>
                </div>
                <div>
                    <h3>ahemed</h3>
                </div>
            </div>
        </Container>
    );
};

export default Firstpage;