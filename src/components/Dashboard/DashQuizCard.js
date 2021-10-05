import React from "react";
import './DashBoard.css';

const DashQuizCard= () => {
    return (
        <div className="dashGlobalContainer">
        <div className='dashStyledCard'>
            <div className='dashCardHead'>
               <h1>Thermodynamics</h1>
            </div>
            <div className='dashCardContent'>
              <div className='dashContHead'>
                <h3 >thermo</h3>
                <span className='dashPriceTag'>Take Test <i class="fas fa-chevron-right"></i></span>
              </div>
              <p>welcome dear</p>
            </div>
        </div>
        <div className='dashStyledCard'>
            <div className='dashCardHead'>
               <h1>Thermodynamics</h1>
            </div>
            <div className='dashCardContent'>
              <div className='dashContHead'>
                <h3 >thermo</h3>
                <span className='dashPriceTag'>Take Test <i class="fas fa-chevron-right"></i></span>
              </div>
              <p>welcome dear</p>
            </div>
        </div>
        </div>
    );
};
  
  export default DashQuizCard;