import React from 'react'
import './HeroSection.css';
import Review from './Review.js'
import ReviewData from './ReviewData'
import FeedCard from './FeedCard';
import PercentData from './PercentData'
import DisplayBar from './DisplayBar';
import CourseContent from './CourseContent';
import LearningContent from './LearningContent';
import PayCard from "../PaymentPg/PayCard";
import CourseData from "./CourseData";
import Head from './Head';
import PayCardMobile from "../PaymentPg/PayCardMobile";

function HeroSection() {







    function createReview(review) {
        return (
            <Review
                key={review.id}
                name={review.name}
                img={review.imgURL}
                detail={review.detail}
                rating={review.rating}
                date={review.date}
            />
        )
    }

    function createBar(percent) {
        return (<DisplayBar
            key={percent.id}
            percentage={percent.percentage}
            rating={percent.id}
        />
        )
    }

    function createCourseData(data) {
        return (
            <PayCard
                key={data.id}
                title={data.title}
                studentsEnrolled={data.studentsEnrolled}
                
            />
        )
    }


    function createMobileCourseData(data) {
        return (
            <PayCardMobile
                key={data.id}
                title={data.title}
                studentsEnrolled={data.studentsEnrolled}
                rating={data.rating}
            />
        )
    }

    return (
        <div>
            <div className='hero-container'>
                <Head />
            </div>
            <div className='bodyWrapper'>
                <div className='midSection'>
                    <div className='midColOne' >
                        <h2>What you'll learn</h2>
                        <div className='divider'>
                            <div >
                                <LearningContent />
                            </div>
                            <div>
                                <LearningContent />
                            </div>
                        </div>
                    </div>
                    <div className='midColTwo'>
                        <h2>This Course Includes</h2>
                        <div className='dividerTwo'>
                            <CourseContent />
                        </div>
                    </div>
                </div>
                <section className='cardSection'>
                    <div className='cardHeader'>
                        <h1>Students also bought this</h1>
                        {/* <div className='spanDiv'>
                            <div>
                                <KeyboardArrowRightIcon />
                            </div>
                            <div>
                                <KeyboardArrowLeftIcon />
                            </div>
                        </div> */}
                    </div>
                    <div className='cardWrapper'>
                        {CourseData.map(createCourseData)}
                        <div className='MobilePayCard'>{CourseData.map(createMobileCourseData)}</div>
                    </div>
                </section>

                <section className='feedback'>
                    <h1>Student Feedback</h1>
                    <div className='feedbackWrapper'>
                        <FeedCard key={ReviewData[2].id}
                            rating={ReviewData[2].rating}
                        />
                        <div className='feedColTwo'>
                            {PercentData.map(createBar)}
                        </div>
                    </div>
                </section>

                <section className='review'>
                    <h1>Reviews</h1>
                    {ReviewData.map(createReview)}
                </section>

            </div>
        </div>
    )
}

export default HeroSection;