import React from 'react';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import YouTubeIcon from '@material-ui/icons/YouTube';
import CreateIcon from '@material-ui/icons/Create';

function CourseContent(){
    return(
        <div className='dividerTwo'>
        <ul className='content'>
        <li>{<PictureAsPdfIcon />}12 Chapter Notes</li>
        <li>{<BookmarkBorderIcon />}100+ MCQ's Question</li>
        <li>{<YouTubeIcon />}30+ Lecture video's</li>
        <li>{<CreateIcon />}10 Full tests</li>
        </ul>
    </div>
    )
}

export default CourseContent;