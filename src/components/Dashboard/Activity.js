import React,{Component} from "react";


import './Activity.css';

class Activity extends Component{
 
  setProgressForOuter(){
   let percent=1-(this.props.minutesSpent/this.props.minutesTotal);
   let value=percent*350;
   return value;

  }
  setProgressForInner(){
  
    let percent=1-(this.props.questionsSolved/this.props.totalQuestions);
   let value=percent*226;
   return value;
  }

 
  render(){

   
    return (
          
            <div className="Activity">
            
                                <span className="AL1">Today</span>
                <div className="line1">
                <span className="AL2">{this.props.minutesSpent}/{this.props.minutesTotal}</span>
                <span className="AL3">Minutes Watched</span>
                </div>
                <div>
                <span className="AL4">{this.props.questionsSolved}/{this.props.totalQuestions}</span>
                <span className="AL5">Questions Attempted</span>
                </div>
                <div>
            <a className="AL6" href="https://www.google.com/">See All Activity</a>
            </div>
            <svg width="121" height="121" className="outercircle">
                <circle r="54.5" cx="60.5" cy="60.5" className="backgroundtrack"></circle>
                <circle r="54.5" cx="60.5" cy="60.5" className="track"  strokeDashoffset={this.setProgressForOuter()} ></circle> 
                <circle r="36" cx="60.5" cy="60.5" className="backgroundtrack-inner"></circle>
                <circle r="36" cx="60.5" cy="60.5" className="track-inner" strokeDashoffset={this.setProgressForInner()}></circle>               
            </svg>
            </div>

         

       
       
        );
      }

}

export default Activity