import React from 'react';
// import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
// import StarIcon from '@material-ui/icons/Star';
import HeaderCard from './HeaderCard';
import Rating from './Rating';
import './Button.css'
// import { colors } from '@material-ui/core';


const Head = (props) => {

    return (
        <div className='head-wrapper'>
            <div className='headColumnDivider'>
                <div className='headColOne'>
                    <div className='test'>
                        <p className='path'>Exam <KeyboardArrowRightIcon />Gate<KeyboardArrowRightIcon />Physics </p>
                        <h1>Thermodynamics</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati et ipsa fuga nihil eos nesciunt labore dolorem at mollitia aperiam. Accusantium alias dolorum et aperiam non expedita, incidunt deleniti praesentium?
                            quos tenetur nesciunt reiciendis quas rem reddpudiandae exercitationem provident</p>
                        <Rating style={{ padding: 5 }} value={5} />
                    </div>
                    <div id='headBottom'>
                        <button className='headBtn'>START FREE TRAIL</button>
                    </div>
                </div>
                <div className='headColTwo'>
                    <HeaderCard />
                </div>
            </div>
        </div>
    );
};
export default Head;



