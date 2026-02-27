import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const CTA = () => {
    return (
        <div className="relative overflow-hidden">

            {/* Moving Gradient Blobs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{ x: [0, 80, -80, 0], y: [0, -60, 60, 0] }}
                    transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
                    className="absolute top-0 left-0 w-64 h-64 bg-blue-600/20 blur-3xl rounded-full"
                />

                <motion.div
                    animate={{ x: [0, -90, 90, 0], y: [0, 70, -70, 0] }}
                    transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
                    className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-500/20 blur-3xl rounded-full"
                />
            </div>

            {/* Main Section */}
            <motion.section
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative py-20 px-6 bg-[#000814] text-white"
            >
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <h3 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                       Ready to Start Your Journey?
                    </h3>

                    <p className="text-sm md:text-xl text-blue-100 max-w-xl mx-auto mb-12 leading-relaxed">
                      Join thousands of students who are already achieving their dreams with us. Take the first step towards your success today.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">

                        {/* Register Button */}
                        <Link to="/register" className="w-full sm:w-auto">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-full sm:w-auto px-10 py-4 rounded-md text-lg font-semibold
                                bg-white text-blue-700 transition-all flex items-center justify-center gap-2"
                            >
                                Register Now
                                <FiArrowRight />
                            </motion.button>
                        </Link>

                        {/* Login Button */}
                        <Link to="/login" className="w-full sm:w-auto">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-full sm:w-auto px-10 py-4 rounded-md text-lg font-semibold
                                border border-white/30 text-white bg-white/10 backdrop-blur-sm
                                hover:bg-white/20 transition-all"
                            >
                                Login
                            </motion.button>
                        </Link>

                    </div>
                </div>
            </motion.section>
        </div>
    );
};

export default CTA;
