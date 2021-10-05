import React from "react";
import * as BsIcons from 'react-icons/bs' ;
import StatBox from "./StatBox";
export default function Stats(){
  return(
    <div className='container'>
    <div className='left'><h2>Stats</h2></div><div className='right mb-2'>Last 7 days</div>
    <div className='stats-body'>
      <StatBox name="Total watch time" data="24" icon={<BsIcons.BsCollectionPlay size={45}/>}/>
      <StatBox name="Total Tests Completed" data="15" icon={<BsIcons.BsPencilSquare size={45}/>}/>
    </div>
    <div className='stats-body'>
      <StatBox name="Total Courses Completed" data="24" icon={<BsIcons.BsBookmarkCheck size={45}/>}/>
      <StatBox name="Total Questions Completed" data="24" icon={<BsIcons.BsPencil size={45}/>}/>
    </div>
    </div>
  )
}