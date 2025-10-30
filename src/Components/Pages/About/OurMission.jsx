import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const OurMission = () => {
    const missions = [
        "প্রতিটি শিক্ষার্থীকে ICT বিষয়ে আত্মবিশ্বাসী করে তোলা।",
        "শিক্ষাকে আধুনিক প্রযুক্তির সাথে যুক্ত করে বাস্তবজীবনে প্রয়োগযোগ্য করা।",
        "প্রোগ্রামিং, ওয়েব ডেভেলপমেন্ট ও ডিজিটাল স্কিল উন্নয়ন।",
        "একটি দক্ষ ও আত্মনির্ভরশীল তরুণ প্রজন্ম গড়ে তোলা।",
        "বাংলাদেশকে স্মার্ট টেকনোলজি সমৃদ্ধ সমাজে রূপান্তর করা।",
        
    ];

    return (
        <div className="bg-transparent text-white py-20 px-6">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">

                {/* Left: Image */}
                <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="relative lg:w-1/2 w-full"
                >
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/40 to-transparent rounded-3xl blur-2xl"></div>
                    <img
                        src="https://i.ibb.co.com/8DmPgCr6/561295593-1223632413115548-3088177163967340016-n.jpg"
                        alt="Our Mission"
                        className="rounded-3xl relative z-10 shadow-xl border border-gray-700 hover:border-blue-500 transition duration-300"
                    />
                </motion.div>

                {/* Right: Content */}
                <motion.div
                    initial={{ opacity: 0, x: 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="lg:w-1/2 w-full"
                >
                    <h2 className="text-4xl font-bold mb-6 text-blue-400">Our Mission</h2>
                    <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                        Maruf’s ICT Care-এর লক্ষ্য একটি দক্ষ, প্রযুক্তি-নির্ভর এবং উদ্ভাবনী প্রজন্ম তৈরি করা,
                        যারা শুধু ICT বইয়ের জ্ঞানেই সীমাবদ্ধ নয়, বরং বাস্তবে প্রযুক্তির সঠিক ব্যবহার করতে পারবে।
                    </p>

                    <ul className="space-y-4">
                        {missions.map((item, index) => (
                            <motion.li
                                key={index}
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="flex items-start gap-3"
                            >
                                <CheckCircle2 className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                                <span className="text-gray-200 text-base">{item}</span>
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>
            </div>
        </div>
    );
};

export default OurMission;
