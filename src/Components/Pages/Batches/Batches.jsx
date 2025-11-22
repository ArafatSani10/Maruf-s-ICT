import React from 'react';
import BatchesBanner from './BatchesBanner';
import FeaturedBatchesGrid from './FeaturedBatchesGrid';
import SuccessStory from '../Home/SuccessStory';

const Batches = () => {
    return (
        <div>
            <BatchesBanner></BatchesBanner>
            <FeaturedBatchesGrid></FeaturedBatchesGrid>
            <SuccessStory></SuccessStory>
        </div>
    );
};

export default Batches;