import React from 'react';
import AboutBanner from './AboutBanner';
import LearningPath from './LearningPath';
import OurMission from './OurMission';
import SuccessStory from '../Home/SuccessStory';

const About = () => {
    return (
        <div>
            <AboutBanner></AboutBanner>
            <LearningPath></LearningPath>
            <OurMission></OurMission>
            <SuccessStory></SuccessStory>
        </div>
    );
};

export default About;