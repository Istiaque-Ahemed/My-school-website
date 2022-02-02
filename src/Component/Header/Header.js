import React from 'react';
import '../Header/Header.css'
import {Container} from "react-bootstrap";

const Header = () => {
    return (
        <Container>
           <div className='school-name'>
              <div className='school-name-1'>
                <img className='BD-logo' src={"https://i.ibb.co/CbQL0Wp/government-bangladesh-logo.png"} alt=""/>
                <span>মুছা মিয়া উচ্চ বিদ্যালয়</span>
                <img className='school-logo' src={'https://i.ibb.co/t2Xygwy/school-logo-removebg-preview.png'} alt=""/>

              </div>
              <p className='school-area-name'>আলী আকবরী, কুলিয়ারচর, কিশোরগঞ্জ</p>
              <p className='school-area-name-1'>স্থাপিত: ১৯৮২ ইং , কোড: ১১০৫০৯  </p>

           </div>
        
        </Container>
    );
};  

export default Header;