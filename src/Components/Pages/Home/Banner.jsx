import React from 'react';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import animationData from "../../../../public/Lottie/Study Abroad.json";

const Banner = () => {
    return (
        <div className="w-full bg-transparent text-white py-16 md:py-24 overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-10">
                    <motion.div
                        className="w-full space-y-10 md:w-1/2 text-start md:text-left"
                        initial={{ opacity: 0, x: -80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                    >
                        <motion.h1
                            className="text-4xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent"
                            initial={{ y: -30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1 }}
                        >
                            M@RUF'S ICT CARE
                        </motion.h1>

                        <motion.p
                            className="text-lg md:text-xl text-gray-300 leading-relaxed"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.2 }}
                        >
                            প্রফেশনাল সফটওয়্যার ইঞ্জিনিয়ার এবং ICT স্কিলস EDU মাষ্টার ট্রেইনার মারুফ স্যারের পরিচালিত
                            ৭২ টি ক্লাস এর HSC ICT ZERO TO HERO অ্যাডভান্সড কোর্স — ফাইনাল পরীক্ষা পর্যন্ত ফ্রি রিভিশন ক্লাস থাকবে।
                        </motion.p>

                        <motion.div
                            className="flex justify-start md:justify-start gap-4 pt-4"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.4 }}
                        >
                            <button className="px-6 py-3 rounded-lg font-semibold bg-gradient-to-r from-indigo-500 to-blue-500 hover:from-blue-600 hover:to-indigo-600 transition duration-300 ">
                                Start Your Journey
                            </button>
                            <button className="px-6 py-3 rounded-lg font-semibold border border-indigo-400 text-indigo-400 hover:bg-indigo-500 hover:text-white transition duration-300">
                                Student Login
                            </button>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className="w-full md:w-1/2"
                        initial={{ opacity: 0, x: 80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
                    >
                        <Lottie animationData={animationData} loop={true} className="w-full md:h-[550px] h-full" />
                    </motion.div>


                </div>
            </div>

        </div>
    );
};

export default Banner;
