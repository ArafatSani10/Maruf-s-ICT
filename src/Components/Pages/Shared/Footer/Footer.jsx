import React from 'react';
// I'm using icons from react-icons/fa and react-icons/md.
// You'll need to install them if you haven't already: npm install react-icons
import { FaFacebookF, FaYoutube } from 'react-icons/fa';
import { MdPhone, MdEmail, MdLocationOn } from 'react-icons/md';

const Footer = () => {
    return (
        // Main Footer Container with gradient background
        <footer className="bg-transparent text-gray-400">
            <div className="border-t border-gray-700/50 pt-16 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-20">
                    
                    {/* Column 1: Institute Info */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                            {/* Logo/Icon placeholder */}
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center p-1">
                                <img
                                    src="https://i.ibb.co.com/mrGbBCtq/511017443-1126095552869235-1406722978156443780-n.jpg" // Replace with your actual logo image path
                                    alt="M@RUF'S ICT CARE Logo"
                                    className="w-full h-full object-contain rounded-full"
                                />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white">M@RUF'S ICT CARE</h3>
                                <p className="text-sm text-green-400 italic">Excellence in Education</p>
                            </div>
                        </div>

                        <p className="text-sm mt-4 leading-relaxed max-w-sm">
                            আপনার সন্তানকে সুশিক্ষায়িত এবং ICT বিষয়ে EDÜ পরিবারে স্বাগত! আমাদের প্রতিষ্ঠানে 
                            ৯ টি ক্লাসের HSC ICT Zero To Hero ক্লাসগুলো করার কৌশলময় পরীক্ষা পদ্ধতি 
                            দিয়ে নিশ্চিতভাবে স্কুলে সফলতা আসবে।
                        </p>

                        <div className="pt-2 space-y-3">
                            <p className="flex items-center space-x-3 text-sm">
                                <MdPhone className="text-green-500 w-5 h-5" />
                                <span>01723619524</span>
                            </p>
                            <p className="flex items-center space-x-3 text-sm">
                                <MdEmail className="text-green-500 w-5 h-5" />
                                <span>marufsarvis@gmail.com</span>
                            </p>
                            <p className="flex items-start space-x-3 text-sm">
                                <MdLocationOn className="text-green-500 w-5 h-5 flex-shrink-0 mt-0.5" />
                                <span>Moriam Clinic Lane, Hospital Mor, Talipara, Kushtia</span>
                            </p>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-white">Quick Links</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-white transition duration-200">About Us</a></li>
                            <li><a href="#" className="hover:text-white transition duration-200">Our Branches</a></li>
                            <li><a href="#" className="hover:text-white transition duration-200">Batches</a></li>
                            <li><a href="#" className="hover:text-white transition duration-200">Student Login</a></li>
                            <li><a href="#" className="hover:text-white transition duration-200">Registration</a></li>
                        </ul>
                    </div>

                    {/* Column 3: Get Started & Follow Us */}
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h4 className="text-lg font-semibold text-white">Get Started</h4>
                            {/* Register Now Button (Green) */}
                            <a 
                                href="#" 
                                className="inline-block w-full py-3 px-6 text-white font-medium text-center rounded-lg transition duration-300 
                                bg-green-500 hover:bg-green-600 shadow-md shadow-green-500/30"
                                style={{ backgroundColor: '#20B95B' }} // Use exact green from the image
                            >
                                Register Now
                            </a>
                            {/* Student Login Button (Dark/Bordered) */}
                            <a 
                                href="#" 
                                className="inline-block w-full py-3 px-6 text-white font-medium text-center rounded-lg transition duration-300 
                                border border-gray-600 hover:bg-gray-700"
                                style={{ backgroundColor: '#182436' }} // Use exact background for the button
                            >
                                Student Login
                            </a>
                        </div>
                        
                        {/* Follow Us Section */}
                        <div className="space-y-3">
                            <h4 className="text-lg font-semibold text-white">Follow Us</h4>
                            <div className="flex space-x-3">
                                {/* Facebook Icon */}
                                <a 
                                    href="https://www.facebook.com/marufsictacare" 
                                    className="w-10 h-10 flex items-center justify-center bg-[#182436] rounded-md hover:bg-gray-700 transition duration-200"
                                    aria-label="Follow us on Facebook"
                                >
                                    <FaFacebookF className="w-4 h-4 text-white" />
                                </a>
                                {/* YouTube Icon */}
                                <a 
                                    href="#" 
                                    className="w-10 h-10 flex items-center justify-center bg-[#182436] rounded-md hover:bg-gray-700 transition duration-200"
                                    aria-label="Subscribe to our YouTube channel"
                                >
                                    <FaYoutube className="w-4 h-4 text-white" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Bottom Bar (Copyright & Legal Links) */}
            <div className="border-t border-gray-700/50 bg-gray-900 py-5 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-xs">
                    <p>&copy; 2025 M@RUF'S ICT CARE. All rights reserved.</p>
                    <div className="flex space-x-6 mt-3 sm:mt-0">
                        <a href="#" className="hover:text-white transition duration-200">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition duration-200">Terms of Service</a>
                        <a href="#" className="hover:text-white transition duration-200">Support</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;