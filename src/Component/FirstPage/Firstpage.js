import React from 'react';
import { Container } from 'react-bootstrap';
import "../FirstPage/Firstpage.css"

const Firstpage = () => {
    return (
        <Container>
            <div className="fullInfo">
                <div>
                    <h5 className='school-history-title'>প্রতিষ্ঠানের ইতিহাস
                    </h5>
                    <div class="School-history">
                        <img style={{ width: "400px", height: "150px", marginRight: "20px" }} src="https://i.ibb.co/KhJpx4s/school-photo.jpg" alt="" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat consectetur quibusdam magnam provident optio eaque eum deserunt? Asperiores temporibus voluptas dolorem earum consectetur, nam corporis tenetur. Beatae totam optio eos!</p>
                    </div>
                    <div className="teacher-quotes">
                        <div className='first-hadinf'>
                            <h4 className='heading'>অধ্যক্ষের বাণী
                            </h4>
                            <div class="head-techar-bani">
                                <img className='img' src={'https://i.ibb.co/72vGTqK/techar-1.gif'} alt="" />
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam minus reprehenderit sed provident distinctio est similique recusandae totam nisi asperiores porro doloremque neque delectus eligendi quas et dolore maxime eos molestias, tempore vitae quo reiciendis deleniti consectetur! Perferendis dolorum, harum voluptatem tempora repellat possimus? Asperiores cupiditate sapiente eos dicta soluta?</p>
                            </div>
                        </div>
                        <div>
                            <h4 className='heading'>উপধ্যক্ষের বাণী
                            </h4>
                            <div class="head-techar-bani">
                                <img className='img' src={'https://i.ibb.co/dfQKJW8/assiten-techar.gif'} alt="" />
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam minus reprehenderit sed provident distinctio est similique recusandae totam nisi asperiores porro doloremque neque delectus eligendi quas et dolore maxime eos molestias, tempore vitae quo reiciendis deleniti consectetur! Perferendis dolorum, harum voluptatem tempora repellat possimus? Asperiores cupiditate sapiente eos dicta soluta?</p>
                            </div>
                        </div>
                    </div>
                    <div className="teacher-quotes-1">
                        <div className='first-hadinf-1'>
                            <h4 className='heading-1'>ছাত্রছাত্রীদের তথ্য</h4>
                            <div class="head-techar-bani">
                                <img className='img-1' src={'https://i.ibb.co/YbJk62h/students.png'} alt="" />
                                <p></p>
                            </div>
                        </div>
                        <div className='first-hadinf-2'>
                            <h4 className='heading-2'>শিক্ষকদের তথ্য

                            </h4>
                            <div class="head-techar-bani">
                                <img className='img-1' src={'https://i.ibb.co/qdzjn5b/teacher.png'} alt="" />
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam minus reprehenderit sed provident distinctio est similique recusandae totam nisi asperiores porro doloremque neque delectus eligendi quas et dolore maxime eos molestias, tempore vitae quo reiciendis deleniti consectetur! Perferendis dolorum, harum voluptatem tempora repellat possimus? Asperiores cupiditate sapiente eos dicta soluta?</p>
                            </div>
                        </div>
                    </div>
                    <div className="teacher-quotes-2">
                        <div className='first-hadinf-1'>
                            <h4 className='heading-3'>ডাউনলোড

                            </h4>
                            <div class="head-techar-bani">
                                <img className='img-1' src={'https://i.ibb.co/dDtX1fW/cloud-computing.png'} alt="" />
                                <p></p>
                            </div>
                        </div>
                        <div className='first-hadinf-1'>
                            <h4 className='heading-4'>একাডেমীক তথ্য


                            </h4>
                            <div class="head-techar-bani">
                                <img className='img-1' src={'https://i.ibb.co/b3H5D3Z/information.png'} alt="" />
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam minus reprehenderit sed provident distinctio est similique recusandae totam nisi asperiores porro doloremque neque delectus eligendi quas et dolore maxime eos molestias, tempore vitae quo reiciendis deleniti consectetur! Perferendis dolorum, harum voluptatem tempora repellat possimus? Asperiores cupiditate sapiente eos dicta soluta?</p>
                            </div>
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