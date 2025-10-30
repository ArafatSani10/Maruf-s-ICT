import React from 'react';
import { MapPin, Phone, Mail, Send, CheckCircle, Smartphone } from 'lucide-react';

const ContactUs = () => {

    // --- CORRECTED GOOGLE MAPS EMBED CODE ---
    // This iframe source uses a search query focused on "Talipara, Kushtia" and the specific landmarks.
    // NOTE: For the final production website, it is recommended to get the static Google Maps iframe code
    // directly from Google Maps after searching for the location and clicking "Share" -> "Embed a map".
    const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1159.2783063854133!2d89.12328738367733!3d23.90382025350503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fe972e7188708b%3A0x8ef4e70e9f168153!2sTalipara%2C%20Kushtia!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd";

    // Updated Contact Information
    const CONTACT_INFO = {
        phone: "+880 1723-619524",
        email: "marufjarvis@gmail.com",
        address: "Moriom Clinic Lane, Hospital Mor, Talipara, Kushtia",
    };

    // Dummy Captcha generation
    const currentCaptcha = "924873";

    return (
        <div className="bg-[#00091a] min-h-screen text-white py-16 px-4 sm:px-6 lg:px-12">
            <div className="max-w-7xl mx-auto">

                {/* Header Section */}
                <div className="text-center mt-16 mb-20">
                    <span className="inline-block px-4 py-1 mb-3 text-sm font-semibold text-teal-400 bg-teal-900/30 rounded-full border border-teal-500/50">
                        GET CONNECTED 🌐
                    </span>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#00baff] tracking-tight">
                        Contact Us
                    </h1>
                    <p className="text-gray-400 mt-4 max-w-3xl mx-auto text-lg">
                        We are ready to respond quickly. Contact Maruf's ICT Care today.
                    </p>
                </div>

                {/* --- */}

                {/* Main Content: Info and Form (Side-by-Side) */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

                    {/* 1. Our Information (Left Section - 1/3 width) */}
                    <div className="lg:col-span-1 space-y-8 p-6 bg-gradient-to-br from-[#121c32] to-[#0d1425] rounded-3xl  border border-teal-600/40">
                        <h2 className="text-3xl font-bold text-white mb-6 border-b border-teal-600 pb-3">
                            Contact Details
                        </h2>

                        {/* Contact Items */}
                        <ContactItem
                            icon={MapPin}
                            title="Our  Location"
                            detail={CONTACT_INFO.address}
                        />
                        <ContactItem
                            icon={Smartphone}
                            title=" Phone Number"
                            detail={CONTACT_INFO.phone}
                            link={`tel:${CONTACT_INFO.phone.replace(/ /g, '')}`}
                        />
                        <ContactItem
                            icon={Mail}
                            title="Support Email"
                            detail={CONTACT_INFO.email}
                            link={`mailto:${CONTACT_INFO.email}`}
                        />


                        {/* Visual Divider */}
                        <div className="h-0.5 bg-gray-700/30 my-6"></div>

                        {/* Office Hours */}
                        <div className="mt-8">
                            <h3 className="text-xl font-semibold text-teal-400 mb-2">Office Hours</h3>
                            <p className="text-gray-400">
                                Sat - Thu: <span className="text-white font-medium">9:00 AM - 9:00 PM</span>
                            </p>
                            <p className="text-gray-400">
                                Friday: <span className="text-red-400 font-medium">Closed for support</span>
                            </p>
                        </div>
                    </div>

                    {/* 2. Send Us a Message (Right Section - 2/3 width) */}
                    <div className="lg:col-span-2 p-8 bg-gradient-to-br from-[#121c32] to-[#0d1425] rounded-3xl  border border-blue-600/40">
                        <h2 className="text-3xl font-bold text-white mb-8 border-b border-blue-600 pb-3">
                            Send Us a Message
                        </h2>

                        {/* Form */}
                        <form className="space-y-6">
                            {/* Two-Column Name/Email */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <FormInput type="text" placeholder="Full Name (Required)" />
                                <FormInput type="email" placeholder="Your Email Address" />
                            </div>

                            {/* Subject */}
                            <FormInput type="text" placeholder="Subject / Query Title" />

                            {/* Message */}
                            <textarea
                                rows="5"
                                placeholder="Write your detailed message here..."
                                className="w-full bg-[#0e1628] text-gray-200 p-4 border border-gray-700/50 rounded-xl focus:ring-teal-500 focus:border-teal-500 transition duration-300 resize-none placeholder-gray-500"
                            ></textarea>

                            {/* Captcha and Terms */}
                            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center pt-4">

                                {/* Captcha Input */}
                                <div className="flex items-center space-x-4 mb-4 lg:mb-0">
                                    <div className="text-xl font-mono px-4 py-2 bg-gray-800 rounded-lg text-yellow-400 font-bold tracking-widest select-none shadow-inner border border-yellow-700/50 transform rotate-[-2deg]">
                                        {currentCaptcha}
                                    </div>
                                    <input
                                        type="text"
                                        placeholder="Type Captcha"
                                        className="w-32 bg-[#0e1628] text-white p-3 border border-gray-700 rounded-xl focus:ring-cyan-500 focus:border-cyan-500 transition duration-300 placeholder-gray-500"
                                    />
                                </div>

                                {/* Terms Checkbox */}
                                <div className="text-sm">
                                    <input type="checkbox" id="terms" className="mr-2 w-4 h-4 accent-teal-500" required />
                                    <label htmlFor="terms" className="text-gray-400">
                                        I Agree with the <a href="#" className="text-teal-400 hover:text-teal-300 font-medium transition duration-300">Terms & Rules</a>
                                    </label>
                                </div>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full mt-6  text-white font-bold text-lg py-4 rounded-xl bg-blue-600 transition-all duration-300 transform hover:scale-[1.005] flex items-center justify-center gap-3"
                            >
                                <Send className="w-5 h-5" />
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>

                {/* --- */}

                {/* 3. Map Section (Full Width at Bottom) */}
                <div className="mt-16">
                    <h2 className="text-3xl font-bold text-center text-[#00baff] mb-8">
                        📍 Find Our Location in Kushtia
                    </h2>
                    <div className="rounded-3xl overflow-hidden shadow-2xl shadow-gray-900/50 border-4 border-[#121c32]">
                        <iframe
                            // CORRECTED URL IS HERE: It focuses on the Talipara, Kushtia area.
                            src={mapEmbedUrl}
                            width="100%"
                            height="550"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Moriom Clinic Lane, Hospital Mor, Talipara, Kushtia Location"
                        ></iframe>
                    </div>
                </div>

            </div>
        </div>
    );
};

// Helper component for Contact Information Items
const ContactItem = ({ icon: Icon, title, detail, link }) => (
    <div className="flex items-start">
        <div className="p-3 bg-teal-600/20 border border-teal-600 rounded-xl flex-shrink-0 mt-1">
            <Icon className="w-5 h-5 text-teal-400" />
        </div>
        <div className="ml-4">
            <p className="text-lg font-semibold text-white mb-0.5">{title}</p>
            {link ? (
                <a href={link} className="text-md text-gray-400 hover:text-teal-400 transition duration-300">
                    {detail}
                </a>
            ) : (
                <p className="text-md text-gray-400">{detail}</p>
            )}
        </div>
    </div>
);

// Helper component for Form Input
const FormInput = ({ type, placeholder }) => (
    <input
        type={type}
        placeholder={placeholder}
        className="w-full bg-[#0e1628] text-gray-200 p-4 border border-gray-700/50 rounded-xl focus:ring-teal-500 focus:border-teal-500 transition duration-300 placeholder-gray-500"
    />
);

export default ContactUs;