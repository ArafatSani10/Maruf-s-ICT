import React from 'react';
import BooksBanner from './BooksBanner';
import BookGridPage from './BookGridPage';

const Books = () => {
    return (
        <div>
            <BooksBanner></BooksBanner>
            <BookGridPage></BookGridPage>
        </div>
    );
};

export default Books;