import React from "react";
import {Circle } from 'rc-progress';

export default function Progress(){
  return(
    <div className='progress-table'>
      <table className="p-table">
        <tr>
          <td></td>
          <td>S</td>
          <td>M</td>
          <td>T</td>
          <td className='day-active'>W</td>
          <td>T</td>
          <td>F</td>
          <td>S</td>
        </tr>
        <tr>
          <td>10-17 August</td>
          <td><Circle percent="40" trailWidth='15' trailColor='#CCF0C5' strokeWidth ="15" strokeColor="#015F29" /> </td>
          <td><Circle percent="20" trailWidth='15' trailColor='#CCF0C5' strokeWidth ="15" strokeColor="#015F29" /></td>
          <td><Circle percent="40" trailWidth='15' trailColor='#CCF0C5' strokeWidth ="15" strokeColor="#015F29" /></td>
          <td><Circle percent="40" trailWidth='15' trailColor='#CCF0C5' strokeWidth ="15" strokeColor="#015F29" /></td>
          <td><Circle percent="40" trailWidth='15' trailColor='#CCF0C5' strokeWidth ="15" strokeColor="#015F29" /></td>
          <td><Circle percent="100" trailWidth='15' trailColor='#CCF0C5' strokeWidth ="15" strokeColor="#015F29" /></td>
          <td><Circle percent="40" trailWidth='15' trailColor='#CCF0C5' strokeWidth ="15" strokeColor="#015F29" /></td>
        </tr>
        <tr>
          <td>10-17 August</td>
          <td><Circle percent="40" trailWidth='15' trailColor='#CCF0C5' strokeWidth ="15" strokeColor="#015F29" /> </td>
          <td><Circle percent="25" trailWidth='15' trailColor='#CCF0C5' strokeWidth ="15" strokeColor="#015F29" /></td>
          <td><Circle percent="40" trailWidth='15' trailColor='#CCF0C5' strokeWidth ="15" strokeColor="#015F29" /></td>
          <td><Circle percent="40" trailWidth='15' trailColor='#CCF0C5' strokeWidth ="15" strokeColor="#015F29" /></td>
          <td><Circle percent="30" trailWidth='15' trailColor='#CCF0C5' strokeWidth ="15" strokeColor="#015F29" /></td>
          <td><Circle percent="40" trailWidth='15' trailColor='#CCF0C5' strokeWidth ="15" strokeColor="#015F29" /></td>
          <td><Circle percent="40" trailWidth='15' trailColor='#CCF0C5' strokeWidth ="15" strokeColor="#015F29" /></td>
        </tr>
        <tr>
          <td>10-17 August</td>
          <td><Circle percent="100" trailWidth='15' trailColor='#CCF0C5' strokeWidth ="15" strokeColor="#015F29" /> </td>
          <td><Circle percent="40" trailWidth='15' trailColor='#CCF0C5' strokeWidth ="15" strokeColor="#015F29" /></td>
          <td><Circle percent="50" trailWidth='15' trailColor='#CCF0C5' strokeWidth ="15" strokeColor="#015F29" /></td>
          <td><Circle percent="40" trailWidth='15' trailColor='#CCF0C5' strokeWidth ="15" strokeColor="#015F29" /></td>
          <td><Circle percent="40" trailWidth='15' trailColor='#CCF0C5' strokeWidth ="15" strokeColor="#015F29" /></td>
          <td><Circle percent="38" trailWidth='15' trailColor='#CCF0C5' strokeWidth ="15" strokeColor="#015F29" /></td>
          <td><Circle percent="40" trailWidth='15' trailColor='#CCF0C5' strokeWidth ="15" strokeColor="#015F29" /></td>
        </tr>
        <tr>
          <td className='day-active'>This week</td>
          <td><Circle percent="100" trailWidth='15' trailColor='#CCF0C5' strokeWidth ="15" strokeColor="#015F29" /> </td>
          <td><Circle percent="40" trailWidth='15' trailColor='#CCF0C5' strokeWidth ="15" strokeColor="#015F29" /></td>
          <td><Circle percent="50" trailWidth='15' trailColor='#CCF0C5' strokeWidth ="15" strokeColor="#015F29" /></td>
          <td><Circle percent="40" trailWidth='15' trailColor='#CCF0C5' strokeWidth ="15" strokeColor="#015F29" /></td>
          <td><Circle percent="40" trailWidth='15' trailColor='#CCF0C5' strokeWidth ="15" strokeColor="#015F29" /></td>
          <td><Circle percent="38" trailWidth='15' trailColor='#CCF0C5' strokeWidth ="15" strokeColor="#015F29" /></td>
          <td><Circle percent="40" trailWidth='15' trailColor='#CCF0C5' strokeWidth ="15" strokeColor="#015F29" /></td>
        </tr>
      </table>
    </div>
  )
}