import React from "react";


export default function StreakTrack(props){
  const box = {
    display : 'flex' ,
    justifyContent : 'space-around' ,
    margin : '30px 0px' ,
  }
  const subbox = {
    textAlign : 'center' ,
    fontWeight : 'bold' ,
    fontSize : '1.2rem' ,


  }
  return(
    <>
      <div style={box}>
        <div style={subbox}>Current<br/><span style={{color:'green'}}>5 days</span></div>
        <div style={subbox}>Longest<br/><span style={{color:'blue'}}>9 days</span></div>
        <div style={subbox}></div>
      </div>
    </>
  )
}