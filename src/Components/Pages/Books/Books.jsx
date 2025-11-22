import React from 'react';
import BooksBanner from './BooksBanner';
import BookGridPage from './BookGridPage';
import SuccessStory from '../Home/SuccessStory';

const Books = () => {
    return (
        <div>
            <BooksBanner></BooksBanner>
            <BookGridPage></BookGridPage>
            <SuccessStory></SuccessStory>
        </div>
    );
};

export default Books;