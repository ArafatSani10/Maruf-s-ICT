import React from 'react';
// For icons, we will use Lucide React (assuming it's available)
import { GraduationCap, Library, Users, Book } from 'lucide-react';
import { IoBookSharp } from 'react-icons/io5';
import { PiStudentBold } from 'react-icons/pi';

const statsData = [
    {
        icon: PiStudentBold,
        number: "3020+",
        label: "সকল শিক্ষার্থী"
    },
    {
        icon: GraduationCap,
        number: "2+",
        label: "সর্বমোট শাখা"
    },
    {
        icon: GraduationCap,
        number: "8+",
        label: "সর্বমোট ব্যাচ "
    },
    {
        icon: Users,
        number: "10+",
        label: "অভিজ্ঞ শিক্ষক"
    },
    {
        icon: IoBookSharp,
        number: "40+",
        label: "সর্বমোট বই"
    },
];


const StatCard = ({ icon: Icon, number, label }) => (
    <div className='bg-gray-800/20 backdrop-blur-sm p-6 rounded-xl shadow-2xl border border-gray-700/50 hover:border-indigo-500 transition duration-300 transform hover:scale-[1.02] cursor-pointer text-center space-y-4'>
        {/* Icon Container */}
        <div className='flex justify-center'>
            <div className='bg-indigo-600 p-4 rounded-full text-white inline-block shadow-lg shadow-indigo-500/30'>
                <Icon size={32} strokeWidth={2.5} />
            </div>
        </div>

        {/* Number */}
        <p className='text-4xl font-extrabold text-indigo-400'>
            {number}
        </p>

        {/* Label */}
        <p className='text-lg font-medium text-gray-200'>
            {label}
        </p>
    </div>
);

const Welearn = () => {
    return (
        // Outer full-width container with custom dark background
        <div className='w-full bg-[#00091a] py-20 md:py-20'>
            {/* Centered max-width container */}
            <div className='max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-2'>

                {/* Title Section */}
                <div className='text-center mb-16'>
                    <h2 className='text-4xl md:text-5xl font-extrabold text-[#00baff]'>
                        এক নজরে - Maruf's ICT Care
                    </h2>
                    <div className='w-24 h-1 bg-indigo-500 mx-auto mt-4 rounded-full'></div>
                </div>

                {/* Statistics Cards Grid */}
                <div className='grid grid-cols-1 md:grid-cols-5 gap-6 lg:gap-4'>
                    {statsData.map((stat, index) => (
                        <StatCard
                            key={index}
                            icon={stat.icon}
                            number={stat.number}
                            label={stat.label}
                        />
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Welearn;
