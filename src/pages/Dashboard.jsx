import Navbar from "../components/global/Navbar";
import React, { useState } from 'react';
import Activity from '../components/Dashboard/Activity.js';
import DashCourseCard from "../components/Dashboard/DashCourseCard";
import DashBar from "../components/Dashboard/DashBar.js";
import MyCalendar from '../components/Dashboard/MyCalendar.js';
import DashQuizCard from '../components/Dashboard/DashQuizCard.js';
import '../components/Dashboard/Welcome.css';
import { Link } from 'react-router-dom';
import * as AiIcons from 'react-icons/ai';
import { DashStreakSidebar } from "../components/Dashboard/DashStreakSidebar";
import { DashScheduldeSidebar } from "../components/Dashboard/DashScheduldeSidebar";



function Dashboard(props) {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);


  const [streakSidebar, setStreakSidebar] = useState(false);

  const showStreakSidebar = () => setStreakSidebar(!streakSidebar);



  return (

    <div>
      <Navbar></Navbar>
      <div className='dashWrapper'>
        <div className="dashHead">
          {/* <Welcome pname='Krishna Thirumurugan'></Welcome> */}
          <div className="Welcome">
            <div className="Welcome-krishna" >Welcome Krishna Thirumurugan</div>

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
              <a className="L2" href="https://www.google.com/" >Check it out</a>
            </div>

            <div>

              <span className="P3">Continue from where you left, </span>
              <Link to='#'>
                <span className="L3" onClick={showStreakSidebar} >
                  Thermodynamics Test
                </span>
              </Link>
            </div>

          </div>
          <Activity minutesSpent={20} minutesTotal={60} questionsSolved={20} totalQuestions={60}>
          </Activity>
        </div>
        <div className="dashBody">
          <div className="dashCardCont">
            <div className='dashCardContHead'>
              <h1>Your Courses</h1> <p>4 ongoing</p>
              <span>View all</span>
            </div>
            <div className='dashCardWrapper'>
              <DashCourseCard />
              <DashCourseCard />

            </div>
          </div>

          <MyCalendar></MyCalendar>
        </div>

        <div className="dashBottom">
          <div className="dashProgressDiv">
            <h1>Your Progress</h1>
            <div className='barBorder'>
              <DashBar />
            </div>
          </div>
          <div className="dashQuizDiv">
            <h1>Your Quizzes</h1>
            <DashQuizCard />
          </div>
        </div>
      </div>

      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className='nav-menu-items'>
          <li className='navbar-toggle'>
            <Link to='#' className='menu-bars'>
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </Link>
          </li>
          <DashScheduldeSidebar />
        </ul>
      </nav>
      <nav className={streakSidebar ? 'nav-menu active' : 'nav-menu'}>
        
        <DashStreakSidebar />

      </nav>
    </div>

  )
}



export default Dashboard;