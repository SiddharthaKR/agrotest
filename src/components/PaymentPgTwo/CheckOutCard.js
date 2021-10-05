import React from 'react';
import { Button } from '../PaymentPg/Button';


function CheckOutCard() {
    return (
        <div className='coCardWrapper'>
            <div className='gap coCardHead'>
                <h4>TOTAL:</h4>
                <div className='priceTag'>
                    &#x20B9;
                    <span>9,999</span>
                </div>
            </div>
            <div className='gap'>
                <Button
                    className='btns coCardBtn'
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'>
                    CHECKOUT
                </Button>
            </div>
            <div className='gap coCardCont'>
                <h4>Promotions</h4>
            </div>
            <div className='gap coCardInput'>
                <input type="text" className='inp' placeholder='Enter Coupon' /><input className='sub' type="submit" value='APPLY' />
            </div>

        </div>

    );
}

export default CheckOutCard;