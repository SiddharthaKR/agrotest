import React from 'react'
import Courses from './Courses'
import styled from 'styled-components'
function Coursespecific(props) {
    return (
        <CourseContentWrapper>
            <MainDiv/>
                <Courses name={props.name}/>
        </CourseContentWrapper>
    )
}

const CourseContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

const MainDiv = styled.div`
    background: #C4C4C4;
    height: 256px;
    margin-left: 16px;
    margin-right: 32px;
    margin-top: 20px;

`



export default Coursespecific
