import React, { useState, useRef, useEffect } from 'react';
import Lottie from 'react-lottie-player';
import { Eye, EyeOff, Mail, Lock } from 'lucide-react';
import lottieJson from "../../../../public/Lottie/zpunet icon.json";
import { Link } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const lottieRef = useRef();

    useEffect(() => {
        if (lottieRef.current) {
            lottieRef.current.play();
        }
    }, []);

    return (
        <div className="mt-12  flex items-center justify-center p-4 bg-[#00091a]">
            <div className="w-full max-w-7xl rounded-2xl overflow-hidden flex flex-col lg:flex-row  ">

                {/* Lottie Panel */}
                <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
                    <div className="w-full max-w-md">
                        <Lottie
                            ref={lottieRef}
                            loop
                            animationData={lottieJson}
                            play
                            speed={1}
                            style={{ width: '100%', height: 'auto' }}
                        />
                    </div>
                </div>

                {/* Login Form */}
                <div className="w-full lg:w-1/2 mt-5 flex flex-col justify-center">
                    <div className="text-center mb-8">
                        <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                            <span className="text-2xl text-white">👋</span>
                        </div>
                        <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mb-2">
                            স্বাগতম!
                        </h2>
                        <p className="text-gray-300">আপনার অ্যাকাউন্টে লগইন করুন</p>
                    </div>

                    <form className="space-y-6">
                        {/* Email */}
                        <div className="relative">
                            <input
                                type="email"
                                required
                                placeholder="আপনার ইমেইল দিন"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-4 py-3 rounded-xl bg-white/10 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                            />
                            <div className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-300">
                                <Mail size={20} />
                            </div>
                        </div>

                        {/* Password */}
                        <div className="relative">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                required
                                placeholder="আপনার পাসওয়ার্ড দিন"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-4 py-3 rounded-xl bg-white/10 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                            />
                            <div
                                className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-300 cursor-pointer"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                            </div>
                        </div>

                        {/* Login Button */}
                        <button
                            type="submit"
                            className="w-full py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl transition-transform duration-300 transform hover:scale-105"
                        >
                            লগইন করুন
                        </button>
                    </form>

                    <div className="mt-8 space-y-4">
                        {/* Warning Message */}
                        <div className="p-4 bg-red-50 border-l-4 border-red-500 rounded-r-lg">
                            <div className="flex items-start">
                                <span className="text-red-500 text-lg mr-2">⚠️</span>
                                <div>
                                    <p className="text-red-700 text-sm font-semibold">সতর্কবাণী</p>
                                    <p className="text-red-600 text-xs mt-1">
                                        আইডি/পাসওয়ার্ড ভুলে গেলে অনুগ্রহ করে অফিসে যোগাযোগ করুন।
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Back to Home Button */}

                        <Link to="/register">

                            <button
                                type="button"
                                onClick={() => console.log('Going back to home')}
                                className="w-full mt-4 py-3 px-4 border border-gray-300 bg-gradient-to-r from-blue-500 to-purple-600 text-white  font-medium rounded-xl shadow-sm hover:text-gray-800 hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                            >
                                নতুন অ্যাকাউন্ট তৈরি করুন
                            </button>

                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login;
