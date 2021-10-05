import React from 'react';
import LearnData from './LearnData';
import CheckIcon from '@material-ui/icons/Check';

function LearningContent() {

    function createDetails(detail, index) {
        return (
            <li key={index}>
                {<CheckIcon />} {detail}
            </li>
        )
    }

    return (
        <>
            {LearnData.map(createDetails)}
        </>
    )
}

export default LearningContent;