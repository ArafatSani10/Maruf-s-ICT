import React from 'react';
// import { motion } from "framer-motion"
import { Link } from 'react-router-dom';
const BooksBanner = () => {
    return (
        <div className="relative h-[500px] w-full overflow-hidden">
            <div className="absolute inset-0 bg-black/60 z-10" />
            <img
                src="https://images.unsplash.com/photo-1457369804613-52c61a468e7d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
                alt="About Us Banner"
                className="absolute inset-0 w-full h-full object-cover object-center"
            />

            <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-4">
                <div className="max-w-4xl">
                    <div className="text-sm font-medium mb-4 flex items-center justify-center text-white">
                        <Link to="/" className="hover:underline">
                            Home
                        </Link>
                        <span className="mx-2">/</span>
                        <span>Books</span>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default BooksBanner;