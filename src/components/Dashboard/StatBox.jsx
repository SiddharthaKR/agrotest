import React from "react";


export default function StatBox(props){
  return(
    <>
      <div className='stat-box'>
        <div className='head'>
          <div className='icon'>{props.icon}</div>
          <div className='name'>{props.name}</div>
        </div>
        <div className='body'>
          {props.data}
        </div>
      </div>
    </>
  )
}