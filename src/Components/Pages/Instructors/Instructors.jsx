import React from 'react';
import InstructorBanner from './InstructorBanner';
import InstructorInfo from './Instructorinfo';
import SuccessStory from '../Home/SuccessStory';

const Instructors = () => {
    return (
        <div>
            <InstructorBanner></InstructorBanner>
            <InstructorInfo></InstructorInfo>
            <SuccessStory></SuccessStory>
        </div>
    );
};

export default Instructors;