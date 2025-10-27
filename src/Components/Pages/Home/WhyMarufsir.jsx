import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

// Helper component for cleaner list items (FIXED)
const FeatureListItem = ({ icon, iconClass, text }) => (
    <li className='flex items-start group hover:translate-x-1 transition-transform duration-300'>
        {/* Icon/Emoji wrapped in a subtle colored circle */}
        <span className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-1 ${iconClass} group-hover:scale-110 transition-transform duration-300`}>
            {icon}
        </span>
        <p className='mt-0.5 group-hover:text-gray-200 transition-colors duration-300'>{text}</p>
    </li>
);

const WhyMarufsir = () => {
    // 1. Setup useRef and useInView to detect when the section is visible
    const ref = useRef(null);
    // Trigger animation when 30% of the component is visible
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    // Animation Variants
    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
    };

    // 2. Define Animation Variants (Unchanged)
    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            }
        }
    };

    const itemVariants = {
        hidden: { y: 50, opacity: 0, scale: 0.95 },
        visible: {
            y: 0,
            opacity: 1,
            scale: 1,
            transition: {
                type: 'spring',
                stiffness: 100,
                damping: 20
            }
        }
    };

    const headerVariants = {
        hidden: { y: -20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };


    return (
        <div className='bg-[#00091a] w-full py-20 md:py-28 font-roboto text-white'>

            <div ref={ref} className='mx-auto px-4 max-w-7xl'>


                {/* Clean Header */}
                <motion.div
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={headerVariants}
                    className='text-center mb-12 md:mb-16'
                >
                    <motion.h2
                        className='text-2xl md:text-4xl font-bold mb-4 text-white'


                    >
                        কেন <span className="text-[#00baff]">মারুফ স্যার</span> কে বেছে নিবেন?
                    </motion.h2>
                    <motion.p
                        className='text-lg text-gray-300 max-w-2xl mx-auto'
                        whileHover={{ scale: 1.01 }}
                    >
                        ১০,০০০+ শিক্ষার্থী SSC, HSC ও ভর্তি পরীক্ষার Chemistry, ICT এ সাফল্য অর্জন করেছেন
                    </motion.p>
                </motion.div>


                {/* Content Cards Section */}
                <motion.div
                    className='grid grid-cols-1 lg:grid-cols-3 gap-8'
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={containerVariants}
                >
                    {/* Card 1: Maruf Sir এর বিশেষত্ব */}
                    <motion.div
                        className='bg-gradient-to-br from-[#0a1835] to-[#040f25] p-3 rounded-2xl shadow-2xl transition-all duration-500 transform hover:scale-[1.02]  border border-gray-800  relative overflow-hidden group'
                        variants={itemVariants}
                        whileHover={{ y: -5 }}
                    >
                        {/* Animated background effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                        <div className='flex items-start mb-6 relative z-10'>
                            <motion.span
                                className='text-4xl mr-4'
                                role='img'
                                aria-label='Teacher'
                                whileHover={{ scale: 1.1, rotate: 5 }}
                            >👨‍🏫</motion.span>
                            <h3 className='text-xl font-bold text-cyan-400 mt-1'>
                                মারুফ স্যারের বিশেষত্ব
                            </h3>
                        </div>
                        <ul className='space-y-4 text-gray-300 text-base relative z-10'>
                            <FeatureListItem
                                icon={<span className='text-blue-300'>📘</span>}
                                iconClass="bg-blue-900/40"
                                text="ব্যক্তিগত শিক্ষাদান - নিয়মিতভাবে ও প্রতিটি শিক্ষার্থীর ধৈর্য্য সহকারে দেখা হয়।"
                            />
                            <FeatureListItem
                                icon={<span className='text-green-300'>🧪</span>}
                                iconClass="bg-green-900/40"
                                text="সহজ কৌশল-বই এবং উদ্ভাবনী উপাদানের মাধ্যমে কঠিন বিষয়গুলোও আকর্ষণীয় করে তোলা হয়।"
                            />
                            <FeatureListItem
                                icon={<span className='text-red-300'>🚀</span>}
                                iconClass="bg-red-900/40"
                                text="BrainBuzz & ChemBond-এর মত আধুনিক অনলাইন-অফলাইন ল্যাব নিয়ে কুইজ ও পরীক্ষা নেওয়া হয়।"
                            />
                            <FeatureListItem
                                icon={<span className='text-yellow-300'>💡</span>}
                                iconClass="bg-yellow-900/40"
                                text="শিক্ষার্থীদের অগ্রগতি - আত্মবিশ্বাস ও মোটিভেশনেও স্যার নিয়মিত বিশেষ ভূমিকা রাখেন।"
                            />
                        </ul>
                    </motion.div>

                    {/* Card 2: কেন আমাদের কোর্সে জয়েন করবে? */}
                    <motion.div
                        className='bg-gradient-to-br from-[#0a1835] to-[#040f25] p-3 rounded-2xl shadow-2xl transition-all duration-500 transform hover:scale-[1.02]  border border-gray-800  relative overflow-hidden group'
                        variants={itemVariants}
                        whileHover={{ y: -5 }}
                    >
                        {/* Animated background effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                        <div className='flex items-start mb-6 relative z-10'>
                            <motion.span
                                className='text-4xl mr-4'
                                role='img'
                                aria-label='Target'
                                whileHover={{ scale: 1.1, rotate: -5 }}
                            >🎯</motion.span>
                            <h3 className='text-xl font-bold text-purple-400 mt-1'>
                                কেন আমাদের কোর্সে জয়েন করবে?
                            </h3>
                        </div>
                        <ul className='space-y-4 text-gray-300 text-base relative z-10'>
                            <FeatureListItem
                                icon={<span className='text-purple-300'>🏆</span>}
                                iconClass="bg-purple-900/40"
                                text="স্বল্পমূল্যে সব - সামান্য ফি-তে সেরা মানসম্মত শিক্ষাদান, যা গরিবদের কাছেও সহজ সাধ্য হয়।"
                            />
                            <FeatureListItem
                                icon={<span className='text-cyan-300'>📑</span>}
                                iconClass="bg-cyan-900/40"
                                text="আধুনিক প্রযুক্তি-সম্মত ইন্টারঅ্যাকটিভ অনলাইন লার্নিং নিশ্চিত, যা যেকোনো জায়গা থেকে শিখতে সাহায্য করে।"
                            />
                            <FeatureListItem
                                icon={<span className='text-orange-300'>⏰</span>}
                                iconClass="bg-orange-900/40"
                                text="সাপ্তাহিক লাইভ ক্লাস - নিয়মিত মূল্যায়ন পরীক্ষার মাধ্যমে পূর্ণ প্রস্তুতি হয়।"
                            />
                            <FeatureListItem
                                icon={<span className='text-pink-300'>📝</span>}
                                iconClass="bg-pink-900/40"
                                text="আকর্ষণীয় সামগ্রী - ২৪/৭ সাপোর্ট প্রদান করা হয় ও প্রয়োজনীয় প্রশ্ন সহজে পাওয়া যায়।"
                            />
                        </ul>
                    </motion.div>

                    {/* Card 3: আপনার কোর্স বিকল্পসমূহ */}
                    <motion.div
                        className='bg-gradient-to-br from-[#0a1835] to-[#040f25] p-3 rounded-2xl shadow-2xl transition-all duration-500 transform hover:scale-[1.02]  border border-gray-800  relative overflow-hidden group'
                        variants={itemVariants}
                        whileHover={{ y: -5 }}
                    >
                        {/* Animated background effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                        <div className='flex items-start mb-6 relative z-10'>
                            <motion.span
                                className='text-4xl mr-4'
                                role='img'
                                aria-label='Books'
                                whileHover={{ scale: 1.1, rotate: 5 }}
                            >📚</motion.span>
                            <h3 className='text-xl font-bold text-blue-400 mt-1'>
                                আপনার কোর্স বিকল্পসমূহ
                            </h3>
                        </div>
                        <div className='space-y-6 relative z-10'>
                            {[
                                { title: 'SSC Programs', description: 'Bangla Version & English Version – উচ্চতর মানদণ্ডে নিয়মিত প্রস্তুতি কার্যক্রম (সম্পূর্ণ)।' },
                                { title: 'HSC Programs', description: 'Bangla Version & English Version – বোর্ড পরীক্ষায় পূর্ণ প্রস্তুতি ও ভর্তি পরীক্ষার জন্য।' },
                                { title: 'Admission Preparation', description: 'Bangla Version & English Version – পূর্ণাঙ্গ কোর্স, অনলাইন ক্লাস এবং সর্বশেষ টেকনিক।' }
                            ].map((program, index) => (
                                <motion.div
                                    key={index}
                                    className='text-gray-300 group/item hover:bg-white/5 p-3 rounded-lg transition-all duration-300'
                                    whileHover={{ x: 5 }}
                                >
                                    <h4 className='font-semibold text-lg text-white mb-2 border-l-2 border-blue-500 pl-3 group-hover/item:border-cyan-400 transition-colors duration-300'>
                                        {program.title}
                                    </h4>
                                    <ul className='list-none space-y-1 pl-3'>
                                        <li className='text-gray-400 group-hover/item:text-gray-300 transition-colors duration-300'>
                                            {program.description}
                                        </li>
                                    </ul>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>


                {/* cta section */}
                <motion.div
                    className='max-w-6xl py-16 mx-auto'
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={{
                        hidden: {},
                        visible: { transition: { staggerChildren: 0.2 } }
                    }}
                >
                    {/* 1. Main Content Container - Sleek Border and Background */}
                    <motion.div
                        className='p-8 md:p-12 text-center rounded-3xl relative overflow-hidden shadow-2xl group'
                        variants={fadeUp}
                        style={{ background: 'linear-gradient(145deg, #0a1835 0%, #040f25 100%)' }}
                        whileHover={{ scale: 1.01 }}
                    >
                        {/* Animated gradient border */}
                        <div className="absolute inset-0 rounded-3xl p-[2px] bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 opacity-50 group-hover:opacity-100 transition-opacity duration-500">
                            <div className="absolute inset-0 rounded-3xl bg-[#00091a]"></div>
                        </div>

                        {/* Shine effect */}
                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>

                        {/* 4. Content */}
                        <div className='relative z-10'>
                            {/* Button/Tag */}
                            <motion.div variants={fadeUp} className='mb-6'>
                                <motion.button
                                    className='bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold py-2 px-6 rounded-full shadow-lg transition-all duration-300 hover:shadow-cyan-500/50 relative overflow-hidden group/btn'
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <span className="relative z-10">ফ্রী এক্সাম 📝</span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                                </motion.button>
                            </motion.div>

                            {/* Heading */}
                            <motion.h1
                                className='text-sm md:text-4xl font-extrabold mb-4 leading-tight'
                                variants={fadeUp}
                            >
                                HSC 26! <span className='bg-clip-text text-[#00baff]'>ফ্রী তে এক্সাম</span> দিয়ে জিতে নাও আকর্ষণীয় উপহার 🎉
                            </motion.h1>

                            {/* Paragraph */}
                            <motion.p
                                className='text-base text-gray-300 mb-8 max-w-3xl mx-auto'
                                variants={fadeUp}
                            >
                                আমাদের স্পেশাল ফ্রী এক্সামে পার্টিসিপেট করে জিতে নাও আকর্ষণীয় সব পুরষ্কার! এবার শেখা এবং জেতা একসাথে হবে <strong>Maruf's ICT Care</strong> এর সাথে! 🚀
                            </motion.p>

                            {/* Main CTA Button */}
                            <motion.div variants={fadeUp}>
                                <motion.button
                                    className='bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-xl py-3 px-5 rounded-lg shadow-xl transition-all duration-300 '
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => alert('Redirecting to Free Exam Registration...')}
                                >
                                    <span className="relative z-10">রেজিস্ট্রেশন করুন এখনই! ➡️</span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover/cta:opacity-100 transition-opacity duration-300"></div>
                                </motion.button>
                            </motion.div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default WhyMarufsir;