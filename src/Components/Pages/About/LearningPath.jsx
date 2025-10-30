import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Code2, Laptop, Rocket } from 'lucide-react';

const steps = [
    {
        icon: BookOpen,
        title: "ICT Foundation",
        description:
            "কম্পিউটার বেসিক, হার্ডওয়্যার-সফটওয়্যার, ইন্টারনেট, এবং ICT বইয়ের সম্পূর্ণ ভিত্তি তৈরি করা হয় এই ধাপে।",
    },
    {
        icon: Code2,
        title: " Programming Fundamentals",
        description:
            "এই পর্যায়ে শেখানো হয় প্রোগ্রামিং এর মূল ধারণা — C, Python বা JavaScript ব্যবহার করে লজিক ও কোডিং স্কিল তৈরি।",
    },
    {
        icon: Laptop,
        title: " Web Development ",
        description:
            "HTML, CSS, JavaScript এবং আধুনিক লাইব্রেরি (React, Tailwind) দিয়ে রেসপনসিভ ওয়েবসাইট তৈরি শেখানো হয়।",
    },
    {
        icon: Rocket,
        title: " Project & Career Growth",
        description:
            "বাস্তব প্রজেক্টে কাজ করা, ফ্রিল্যান্সিং ও ক্যারিয়ার গাইডলাইন — যেন শেখা স্কিল বাস্তবে প্রয়োগ করা যায়।",
    },
];

const LearningPath = () => {
    return (
        <div className="bg-transparent text-white py-16 px-6">
            <div className="max-w-7xl mx-auto text-center mb-12">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400"
                >
                    🚀 Learning Path
                </motion.h2>
                <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                    Maruf’s ICT Care-এ শেখার পথ সাজানো হয়েছে ধাপে ধাপে — একেবারে
                    ভিত্তি থেকে শুরু করে প্রফেশনাল ডেভেলপমেন্ট পর্যন্ত।
                </p>
            </div>

            {/* **Container Max Width Increased for Wider Cards** */}
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-[1400px] mx-auto">
                {steps.map((step, index) => {
                    const Icon = step.icon;
                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8, y: 20 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.15, type: "spring", stiffness: 100 }}
                            viewport={{ once: true }}
                            // **Shadow Removed. Modern Hover Effect Added**
                            whileHover={{
                                scale: 1.03, // Slight scale up
                                borderColor: "#3b82f6", // Border color change to Blue-500
                                // backgroundColor: "rgba(31, 41, 55, 0.9)", // Darken background slightly
                                transition: { type: "spring", duration: 0.3 }
                            }}
                            // **Card Style: No shadow, modern border, flatter look**
                            className="bg-gray-900/90 backdrop-blur-sm rounded-lg p-5 text-left border border-gray-900/50 cursor-pointer h-full flex flex-col justify-between transition-colors duration-300"
                        >
                            <div className='flex flex-col space-y-2 items-start mb-2'>
                                {/* Icon Circle */}
                                <div className="p-3 bg-blue-600/30 rounded-full mr-4 flex-shrink-0">
                                    <Icon className="w-6 h-6 text-blue-400" />
                                </div>
                                {/* Title - Reduced size for better fit on wider cards */}
                                <h3 className="text-lg font-semibold text-white tracking-wider leading-snug pt-1">
                                    {step.title}
                                </h3>
                            </div>

                            {/* Description */}
                            <p className="text-gray-300 text-sm mt-2 flex-grow">
                                {step.description}
                            </p>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
};

export default LearningPath;