import React from "react";
import Progress from "./Progress";
import StreakTrack from "./StreakTrack";
import { useState } from "react";
import { Link } from 'react-router-dom';
import * as AiIcons from 'react-icons/ai';


export default function Streak() {

  
  return (
    <div className='container mb-4 mt-5'>
      
      <div className='left'><h2>Learning Streak</h2></div><div className='right mb-2'>20/60 minutes today</div>
      <StreakTrack />
      <Progress />
    </div>
  )
}