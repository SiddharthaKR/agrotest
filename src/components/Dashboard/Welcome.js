import React from 'react';
import './Welcome.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';



const Welcome = (props) => {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    const [streakSidebar, setStreakSidebar] = useState(false);

    const showStreakSidebar = () => setStreakSidebar(!streakSidebar);
    return (
        <div className="Welcome">
           <div className="Welcome-krishna">Welcome {props.pname}</div>
          
            <div className="Content">
               <span className="P1">Nice to see you again,</span>
             
               <Link to='#'>
                    <span className="L1" onClick={showSidebar} >
                         See your Schedule Today
                    </span>
                </Link>
            </div>

            <div>

               <span className="P2">There are some new courses for you, </span>
               <a className="L2"  href="https://www.google.com/" >Check it out</a>
             </div>

             <div>

               <span className="P3">Continue from where you left, </span>
               <Link to='#'>
                    <span className="L3" onClick={showStreakSidebar} >
                         See your Schedule Today
                    </span>
                </Link>
            </div>

        </div>
    )
}

export default Welcome
