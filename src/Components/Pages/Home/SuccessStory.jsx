import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaQuoteRight } from 'react-icons/fa';

// === Updated Testimonials (ICT Care themed) ===
const testimonials = [
    {
        name: '@iTcarePath',
        text: 'ICT Care has truly changed the way I learn. The tutorials are simple yet powerful — it feels like every topic is designed for real growth. Grateful to be part of this journey!',
        avatar: 'https://i.ibb.co.com/nqJN5nSQ/r1-1.jpg',
        role: 'Learner at ICT Care'
    },
    {
        name: '@ayshataiba5624',
        text: 'অসাধারণ! ICT Care এমনভাবে শেখায় যেন টেকনোলজির ভয়টাই কেটে যায়। ধীরে ধীরে আমি নিজেকে অনেক কনফিডেন্ট মনে করছি। ধন্যবাদ ICT Care টিমকে!',
        avatar: 'https://i.ibb.co.com/93ChBtzy/360-F-1408824601-Y1f5y-VDcoq-Y1n-N52z-LI2-Pfk-XUu-Nbf-XSA.jpg',
        role: 'Student at ICT Care'
    },
    {
        name: '@alliswell9994',
        text: 'আমি ICT Care থেকে পাইথন শিখছি। অনেক সুন্দরভাবে শেখানো হয় — বেসিক থেকে এডভান্স পর্যন্ত। এখন কোডিং করতে ভয় লাগে না, বরং মজা লাগে!',
        avatar: 'https://i.ibb.co.com/PGLxXrBc/r3-1.jpg',
        role: 'Python Learner'
    },
    {
        name: 'PIAL PAUL',
        text: 'One of the best Bangla tech platforms! ICT Care makes complex things feel easy and exciting. Truly an initiative that helps our youth grow.',
        avatar: 'https://ui-avatars.com/api/?name=PP&background=4F46E5&color=ffffff&size=128',
        role: 'Course Participant'
    },
    {
        name: '@shortWM',
        text: 'ICT Care is making a real difference in the tech learning space of Bangladesh. It’s inspiring to see such dedication to education!',
        avatar: 'https://i.ibb.co.com/H8z0QC7/r6-1.jpg',
        role: 'From YouTube'
    },
    {
        name: 'Md. Saad',
        text: 'কয়েকদিন হলো ICT Care এর কোর্স দেখা শুরু করেছি। এত সুন্দরভাবে শেখানো হয়! আল্লাহ আপনাদের আরও সফলতা দিক, যাতে আরও অনেক মানুষ উপকৃত হয়।',
        avatar: 'https://ui-avatars.com/api/?name=MS&background=4F46E5&color=ffffff&size=128',
        role: 'From Course'
    },
    {
        name: '@allaboutsemicolons',
        text: 'I’m impressed by ICT Care’s GenAI and Machine Learning lessons. The platform truly bridges the gap between passion and profession!',
        avatar: 'https://i.ibb.co.com/Mk0kxTqZ/r4-1.jpg',
        role: 'AI Enthusiast'
    },
    {
        name: 'Rasel Sarker',
        text: 'বাংলা ভাষায় এমন কোয়ালিটি কনটেন্ট খুব কম পাওয়া যায়। ICT Care এই ঘাটতি পূরণ করছে। অসাধারণ উদ্যোগ!',
        avatar: 'https://ui-avatars.com/api/?name=RS&background=4F46E5&color=ffffff&size=128',
        role: 'From Course'
    },
    {
        name: '@saymaislam3242',
        text: 'ICT Care এর ভিডিও দেখে অনেক কিছু শিখেছি। সহজভাবে শেখানোর জন্য ধন্যবাদ ভাই! এটি আমাদের জন্য বড় অনুপ্রেরণা।',
        avatar: 'https://i.ibb.co.com/2Y7WZNDt/r2-1.jpg',
        role: 'YouTube Learner'
    },
    {
        name: 'Tanjin Adnan Abir',
        text: 'ICT Care এর কোর্সগুলোতে রিসার্চ, ডেডিকেশন এবং ক্রিয়েটিভিটি একসাথে পাওয়া যায়। শেখাটা সত্যিই আনন্দদায়ক!',
        avatar: 'https://ui-avatars.com/api/?name=TA&background=d1d5db&color=ffffff&size=128',
        role: 'LLM Student'
    },
];

// === Testimonial Card ===
const TestimonialCard = ({ item }) => (
    <motion.div
        className="shadow-lg rounded-3xl p-8 w-96 flex-shrink-0 relative border border-gray-100/10 bg-white/10 dark:bg-gray-900/40 backdrop-blur-md"
        whileHover={{ y: -8, scale: 1.03 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
    >
        <FaQuoteRight className="text-cyan-400 text-4xl absolute top-8 right-8 opacity-10" />

        {/* Avatar + Name */}
        <div className="flex items-center mb-4 relative z-10">
            <img
                src={item.avatar}
                alt={item.name}
                className="w-14 h-14 rounded-full mr-4 border-2 border-cyan-400/50 shadow-md"
            />
            <div>
                <h4 className="font-semibold text-white text-base">{item.name}</h4>
                <p className="text-gray-400 text-xs">{item.role}</p>
            </div>
        </div>

        <p className="text-gray-200 text-sm mb-5 leading-relaxed relative z-10">
            "{item.text}"
        </p>

        {/* Stars */}
        <div className="flex text-amber-400 relative z-10">
            {[...Array(5)].map((_, j) => (
                <motion.div
                    key={j}
                    whileHover={{ scale: 1.2, rotate: 15 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    <FaStar size={14} />
                </motion.div>
            ))}
        </div>
    </motion.div>
);

const SuccessStory = () => {
    const topRef = useRef(null);
    const bottomRef = useRef(null);
    const [topWidth, setTopWidth] = useState(0);
    const [bottomWidth, setBottomWidth] = useState(0);

    useEffect(() => {
        if (topRef.current) setTopWidth(topRef.current.scrollWidth / 2);
        if (bottomRef.current) setBottomWidth(bottomRef.current.scrollWidth / 2);
        const handleResize = () => {
            if (topRef.current) setTopWidth(topRef.current.scrollWidth / 2);
            if (bottomRef.current) setBottomWidth(bottomRef.current.scrollWidth / 2);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="relative py-16 overflow-hidden px-4 bg-transparent text-white">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16 text-center">
                    <motion.h2
                        className="text-2xl md:text-5xl font-extrabold text-[#00baff]"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                     Student's  Success Story
                    </motion.h2>
                    <motion.p
                        className="mt-4 text-gray-300 max-w-2xl mx-auto text-sm md:text-lg"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        Discover how <span className="text-cyan-400 font-semibold">ICT Care</span> is empowering students, professionals, and dreamers to learn technology in Bangla — from coding to AI and beyond.
                    </motion.p>
                </div>

                {/* Top Row - Left Scroll */}
                <motion.div
                    className="overflow-hidden relative mb-12 py-5"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.div
                        ref={topRef}
                        className="flex gap-8 items-start"
                        animate={{ x: [0, -topWidth] }}
                        transition={{ repeat: Infinity, ease: 'linear', duration: 70 }}
                    >
                        {[...testimonials, ...testimonials].map((item, i) => (
                            <TestimonialCard key={`top-${i}`} item={item} />
                        ))}
                    </motion.div>

                   
                </motion.div>

                {/* Bottom Row - Right Scroll */}
                <motion.div
                    className="overflow-hidden relative py-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    <motion.div
                        ref={bottomRef}
                        className="flex gap-8 items-start"
                        animate={{ x: [-bottomWidth, 0] }}
                        transition={{ repeat: Infinity, ease: 'linear', duration: 70 }}
                    >
                        {[...testimonials, ...testimonials].map((item, i) => (
                            <TestimonialCard key={`bottom-${i}`} item={item} />
                        ))}
                    </motion.div>

                </motion.div>
            </div>

            {/* Floating glow orbs */}
            <div className="absolute top-20 left-10 w-10 h-10 bg-cyan-400/20 blur-3xl rounded-full animate-pulse"></div>
            <div className="absolute bottom-1/4 right-20 w-16 h-16 bg-blue-500/20 blur-3xl rounded-full animate-pulse"></div>
            <div className="absolute top-1/3 right-1/4 w-8 h-8 bg-teal-400/20 blur-2xl rounded-full animate-pulse"></div>
        </div>
    );
};

export default SuccessStory;
