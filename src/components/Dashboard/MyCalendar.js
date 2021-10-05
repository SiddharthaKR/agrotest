import React, { Component } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';




class MyCalendar extends Component {


    render() {

        return (

            <div className="dashCalenderDiv">
                <div>
                    <h1>Calendar</h1>
                    
                </div>
                <div className="dashCalenderBorder">
                    <Calendar className="calendar" ></Calendar>
                    <div className="dashReminderDiv">
                        <div className='dashReminderHead'>
                            <p>Reminder</p>
                            <Fab>
                                <AddIcon />
                            </Fab>
                        </div>
                        <ol>
                            <li>1. Coffee</li>
                            
                        </ol>
                    </div>
                </div>
            </div>




        );
    }

}

export default MyCalendar;

