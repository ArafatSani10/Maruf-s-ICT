import React from 'react';
import { FaUser, FaCalendarAlt, FaEnvelope, FaLock, FaFacebook, FaPlus } from 'react-icons/fa';
import { FiPhone, FiChevronDown, FiBookOpen, FiUserCheck } from 'react-icons/fi';
import { CheckCircle } from 'lucide-react';

const RegistrationForm = () => {
    const inputStyle =
        "w-full p-4 rounded-xl bg-[#0d1220] border border-[#1b2a42] text-gray-200 placeholder-gray-500 transition duration-300 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500";

    const labelStyle = "block text-sm font-medium text-gray-300 mb-1";

    const sectionTitleStyle =
        "text-xl font-bold text-gray-100 mb-6 tracking-wide flex items-center gap-2 pb-2 border-b border-[#1b2a42]";

    const formSectionStyle =
        "mb-10 p-6 bg-[#0f1526]/60 backdrop-blur-md rounded-2xl border border-[#1b2a42] transition-all";

    const PhoneInput = ({ label, name, isRequired = true }) => (
        <div className="relative">
            <label className={labelStyle}>{label} {isRequired && '*'}</label>
            <div className="flex rounded-xl overflow-hidden border border-[#1b2a42] bg-[#0d1220]">
                <span className="px-4 py-3 bg-[#131a2c] text-teal-400 font-medium border-r border-[#1b2a42]">
                    +88
                </span>
                <input
                    type="tel"
                    name={name}
                    placeholder="01xxxxxxxxx"
                    className="flex-1 px-4 py-3 bg-transparent text-gray-200 placeholder-gray-500 focus:outline-none"
                />
            </div>
            <FiPhone className="absolute right-3 top-[50px] text-teal-400/70 hidden md:block" size={18} />
        </div>
    );

    const GenderRadio = ({ name, value, label }) => (
        <div className="flex items-center space-x-2">
            <input
                type="radio"
                id={value}
                name={name}
                value={value}
                className="w-5 h-5 text-teal-500 bg-[#0d1220] border-[#1b2a42]"
            />
            <label htmlFor={value} className="text-gray-300">{label}</label>
        </div>
    );

    return (
        <div className="min-h-screen bg-[#00091a] py-20 flex items-center justify-center p-4">
            <div className="w-full max-w-6xl bg-[#0a0f1d]/80 backdrop-blur-xl text-gray-100 rounded-3xl p-3 md:p-5 border border-[#1b2a42]">

                {/* Title */}
                <h1 className="text-4xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500 mb-2">
                    Create Your Account
                </h1>
                <p className="text-center text-gray-400 mb-10 text-lg">
                    Fill in your information to get started.
                </p>

                {/* Photo Upload */}
                <div className="flex justify-center mb-10">
                    <label
                        htmlFor="photo-upload"
                        className="w-32 h-32 rounded-full flex flex-col items-center justify-center bg-[#0f1526] border border-[#1b2a42] cursor-pointer hover:border-teal-500 transition">
                        <FaPlus className="text-teal-400 text-2xl" />
                        <span className="text-sm text-gray-400 mt-2">Upload Photo</span>
                        <input type="file" id="photo-upload" className="hidden" accept="image/*" />
                    </label>
                </div>

                {/* Personal Info */}
                <div className={formSectionStyle}>
                    <h2 className={sectionTitleStyle}>
                        <FaUser className="text-teal-400" /> Personal Information
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className={labelStyle}>Full Name *</label>
                            <input type="text" placeholder="Your full name" className={inputStyle} />
                        </div>

                        <div className="relative">
                            <label className={labelStyle}>Date of Birth *</label>
                            <input
                                type="date"
                                className={`${inputStyle} cursor-pointer`}
                            />
                            <FaCalendarAlt className="absolute right-4 top-11 text-gray-500" />
                        </div>
                    </div>

                    <div className="mt-6">
                        <label className={labelStyle}>Gender *</label>
                        <div className="flex space-x-8 pt-2">
                            <GenderRadio name="gender" value="male" label="Male" />
                            <GenderRadio name="gender" value="female" label="Female" />
                            <GenderRadio name="gender" value="other" label="Other" />
                        </div>
                    </div>
                </div>

                {/* Contact Info */}
                <div className={formSectionStyle}>
                    <h2 className={sectionTitleStyle}>
                        <FiPhone className="text-teal-400" /> Contact Information
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <PhoneInput label="Student Phone" name="studentPhone" />
                        <PhoneInput label="Guardian Phone" name="guardianPhone" />
                    </div>

                    <div className="mt-6 relative">
                        <label className={labelStyle}>Email (Optional)</label>
                        <input type="email" placeholder="example@email.com" className={inputStyle} />
                        <FaEnvelope className="absolute right-4 top-4 text-gray-500" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                        <PhoneInput label="WhatsApp Number (Optional)" name="whatsAppNumber" isRequired={false} />
                        <div className="relative">
                            <label className={labelStyle}>Facebook Profile (Optional)</label>
                            <input type="text" placeholder="https://facebook.com/username" className={inputStyle} />
                            <FaFacebook className="absolute right-4 top-4 text-gray-500" />
                        </div>
                    </div>

                    <div className="mt-6">
                        <label className={labelStyle}>Referred By (Optional)</label>
                        <input type="text" placeholder="Enter referrer name or ID" className={inputStyle} />
                    </div>
                </div>

                {/* Academic Info */}
                <div className={formSectionStyle}>
                    <h2 className={sectionTitleStyle}>
                        <FiBookOpen className="text-teal-400" /> Academic Information
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="relative">
                            <label className={labelStyle}>Class *</label>
                            <select className={inputStyle} defaultValue="">
                                <option value="" disabled>Select class</option>
                                <option>Class 9</option>
                                <option>Class 10</option>
                                <option>Class 11</option>
                                <option>Class 12</option>
                            </select>
                            <FiChevronDown className="absolute right-4 top-4 text-gray-500" />
                        </div>

                        <div>
                            <label className={labelStyle}>School/College Name *</label>
                            <input type="text" placeholder="Your institution name" className={inputStyle} />
                        </div>
                    </div>
                </div>

                {/* Batch Info */}
                <div className={formSectionStyle}>
                    <h2 className={sectionTitleStyle}>
                        <FiUserCheck className="text-teal-400" /> Batch Information
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="relative">
                            <label className={labelStyle}>Group (Optional)</label>
                            <select className={inputStyle}>
                                <option value="">Select</option>
                                <option>Science</option>
                                <option>Commerce</option>
                                <option>Arts</option>
                            </select>
                            <FiChevronDown className="absolute right-4 top-4 text-gray-500" />
                        </div>

                        <div className="relative">
                            <label className={labelStyle}>Batch (Optional)</label>
                            <select className={inputStyle}>
                                <option value="">Select</option>
                                <option>Morning</option>
                                <option>Evening</option>
                                <option>Day</option>
                            </select>
                            <FiChevronDown className="absolute right-4 top-4 text-gray-500" />
                        </div>
                    </div>
                </div>

                {/* Account Security */}
                <div className={formSectionStyle}>
                    <h2 className={sectionTitleStyle}>
                        <FaLock className="text-teal-400" /> Account Security
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className={labelStyle}>Password *</label>
                            <input type="password" placeholder="Enter password" className={inputStyle} />
                        </div>

                        <div className="relative">
                            <label className={labelStyle}>Confirm Password *</label>
                            <input type="password" placeholder="Re-enter password" className={inputStyle} />
                            <CheckCircle className="absolute right-4 top-4 text-teal-400" />
                        </div>
                    </div>
                </div>

                {/* Submit */}
                <button
                    type="submit"
                    className="w-full py-5 text-xl bg-gradient-to-r from-teal-500 to-blue-600 font-bold rounded-2xl hover:from-teal-600 hover:to-blue-700 transition">
                    Create Account & Verify
                </button>

                <p className="text-center text-sm text-gray-400 mt-6">
                    By creating an account, you agree to our
                    <span className="text-teal-400 ml-1 cursor-pointer hover:underline">Terms</span> &
                    <span className="text-teal-400 ml-1 cursor-pointer hover:underline">Privacy Policy</span>.
                </p>
            </div>
        </div>
    );
};

export default RegistrationForm;
