import React from 'react';
import Banner from './Banner';
import Welearn from './Welearn';
import WhyMarufsir from './WhyMarufsir';
import FeaturedBatchesSlider from './FeaturedBatchesSlider';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Welearn></Welearn>
           <WhyMarufsir></WhyMarufsir>
           <FeaturedBatchesSlider></FeaturedBatchesSlider>
        </div>
    );
};

export default Home;