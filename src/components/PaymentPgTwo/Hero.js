import React from 'react';
import './Hero.css';
import CheckOutCard from './CheckOutCard';
import CheckOut from '../Payment/CheckOut'
import PayCard from '../PaymentPg/PayCard';
import CourseData from '../PaymentPg/CourseData';

function Hero() {

  function createCourseData(data) {
    return (
        <PayCard
            key={data.id}
            title={data.title}
            studentsEnrolled={data.studentsEnrolled}
        />
    )
}

  return (
    <div className='hero-container'>
      <div className='payBodyWrapper'>
        <div className='payHead'>
          <div className='payHeadTitle'>
            <h2>Shopping Cart</h2>
            <h4>2 Courses in Cart</h4>
          </div>
          <div className='payContContainer'>
            <div>
              <CheckOut />
              <CheckOut />
            </div>
            <div>
              <CheckOutCard />
            </div>
          </div>
        </div>
        <div className='payBodyCont'>
        <h2>You may also like</h2>
             <div className='payContCard'>
             {CourseData.map(createCourseData)}
             </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;