import React from 'react';
import BatchesBanner from './BatchesBanner';
import FeaturedBatchesGrid from './FeaturedBatchesGrid';

const Batches = () => {
    return (
        <div>
            <BatchesBanner></BatchesBanner>
            <FeaturedBatchesGrid></FeaturedBatchesGrid>
        </div>
    );
};

export default Batches;