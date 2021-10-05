import { Button } from './Button';
import React from 'react';



const HeaderCard = (props) => {
    return (
        <div className='styledCard'>
            <div className='headCardHead'>

            </div>
            <div className='payCardContent'>
                <div className='headCardContentWrapper'>
                <h2><i className="fas fa-rupee-sign"></i> 9999</h2>
                
                <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'>
           ADD TO CART
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
         BUY NOW
        </Button>
        
                </div>
            </div>
        </div>
    );
};
export default HeaderCard;


