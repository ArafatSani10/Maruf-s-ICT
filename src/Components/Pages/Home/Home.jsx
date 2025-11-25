import React from 'react';
import Banner from './Banner';
import Welearn from './Welearn';
import WhyMarufsir from './WhyMarufsir';
import FeaturedBatchesSlider from './FeaturedBatchesSlider';
import OurBooks from './OurBooks';
import SuccessStory from './SuccessStory';
import CTA from './CTA';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Welearn></Welearn>
            <WhyMarufsir></WhyMarufsir>
            <FeaturedBatchesSlider></FeaturedBatchesSlider>
            <OurBooks></OurBooks>
            <SuccessStory></SuccessStory>
            <CTA></CTA>
        </div>
    );
};

export default Home;