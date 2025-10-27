import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CiMenuFries } from 'react-icons/ci';
import { IoClose } from 'react-icons/io5';


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const navItems = [
        { name: 'Home', to: '/' },
        { name: 'About', to: '/about' },
        { name: 'Batches', to: '/batches' },
        { name: 'Books', to: '/books' },
        { name: 'Instructors', to: '/instructor' },
        { name: 'Contact Us', to: '/contact-us' },
    ];

    // Scroll Logic Hook
    const handleScroll = () => {
        if (isOpen) return;

        const currentScrollY = window.scrollY;
        const scrollThreshold = 80;

        if (currentScrollY > lastScrollY && currentScrollY > scrollThreshold) {

            setIsVisible(false);
        } else if (currentScrollY < lastScrollY) {

            setIsVisible(true);
        }


        if (currentScrollY < scrollThreshold) {
            setIsVisible(true);
        }

        setLastScrollY(currentScrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY, isOpen]);


    const NAVBAR_TRANSITION_DURATION = 0.5;

    const navbarVariants = {
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: NAVBAR_TRANSITION_DURATION,
                ease: 'easeInOut'
            },
        },
        hidden: {
            y: -100,
            opacity: 0,
            transition: {
                duration: NAVBAR_TRANSITION_DURATION,
                ease: 'easeInOut'
            },
        },
    };

    const mobileMenuVariants = {
        closed: {
            opacity: 0,
            height: 0,
            transition: {
                duration: 0.3,
                ease: 'easeInOut',
            },
        },
        open: {
            opacity: 1,
            height: 'auto',
            transition: {
                duration: 0.3,
                ease: 'easeInOut',
            },
        },
    };

    const itemVariants = {
        closed: {
            opacity: 0,
            y: -20,
            transition: {
                duration: 0.2,
            },
        },
        open: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.3,
            },
        },
    };

    return (
        <motion.nav
            className='w-full bg-[#00091a] border-b border-gray-800 sticky top-0 z-50'
            variants={navbarVariants}
            initial="visible"
            animate={isVisible ? 'visible' : 'hidden'}
        >
            <div className='max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex justify-between items-center py-4'>
                    {/* Logo: Use Link to navigate to home page */}
                    <motion.div
                        className='flex items-center'
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Link to="/" className='flex items-center'>
                            <div className='w-20 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-3'>
                                <span className='text-white font-bold text-lg'>ICT</span>
                            </div>

                        </Link>
                    </motion.div>

                    {/* Desktop Navigation: Using Link components */}
                    <div className='hidden md:flex items-center space-x-8'>
                        {navItems.map((item, index) => (
                            <motion.div
                                key={item.name}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ scale: 1.05 }}
                            >
                                <Link
                                    to={item.to}
                                    className='text-white hover:text-[#00baff]  transition-colors duration-300 relative group'
                                >
                                    {item.name}
                                    <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300 group-hover:w-full'></span>
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    {/* Desktop Buttons */}
                    <div className='hidden md:flex items-center space-x-4'>
                        <motion.button
                            className="relative overflow-hidden px-7 py-2 rounded-lg border border-gray-700 text-gray-300 transition-all duration-500 group bg-transparent"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                            whileHover={{ scale: 1.06, boxShadow: "0 0 10px rgba(56, 189, 248, 0.4)" }}
                        >
                            <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] rounded-lg"></span>
                            <span className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-600/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-700 ease-out"></span>
                            <span className="relative z-10 font-medium tracking-wide group-hover:text-white transition-colors duration-500">
                                Login
                            </span>
                        </motion.button>
                        <motion.button
                            className='px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg transition-all duration-300'
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(59, 130, 246, 0.7)" }}
                        >
                            Register
                        </motion.button>
                    </div>

                    {/* Mobile Menu Button (Icon Toggle) */}
                    <motion.button
                        className='md:hidden text-white'
                        onClick={toggleMenu}
                        whileTap={{ scale: 0.9 }}
                    >
                        {isOpen ? (
                            <IoClose className='text-white text-3xl' />
                        ) : (
                            <CiMenuFries className='text-white text-2xl' />
                        )}
                    </motion.button>
                </div>

                {/* Mobile Navigation */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            className='md:hidden bg-[#0a1124] border-t border-gray-800'
                            variants={mobileMenuVariants}
                            initial='closed'
                            animate='open'
                            exit='closed'
                        >
                            <div className='py-4 space-y-4'>
                                {navItems.map((item, index) => (
                                    <motion.div
                                        key={item.name}
                                        variants={itemVariants}
                                        initial='closed'
                                        animate='open'
                                        exit='closed'
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <Link
                                            to={item.to}
                                            className='block px-4 py-3 text-white hover:text-[#00baff] hover:bg-gray-800 rounded-lg transition-colors duration-300'
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {item.name}
                                        </Link>
                                    </motion.div>
                                ))}
                                <div className='px-4 pt-4 space-y-3 border-t border-gray-800'>
                                    <motion.button
                                        className='w-full px-6 py-3 text-gray-300 border border-gray-600 rounded-lg hover:border-blue-500 transition-colors duration-300'
                                        variants={itemVariants}
                                        initial='closed'
                                        animate='open'
                                        exit='closed'
                                        transition={{ delay: 0.5 }}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        Login
                                    </motion.button>
                                    <motion.button
                                        className='w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg transition-colors duration-300'
                                        variants={itemVariants}
                                        initial='closed'
                                        animate='open'
                                        exit='closed'
                                        transition={{ delay: 0.6 }}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        Register
                                    </motion.button>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.nav>
    );
};

export default Navbar;