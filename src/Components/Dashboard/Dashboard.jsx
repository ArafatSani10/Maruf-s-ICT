import React, { useState, useEffect, useRef } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
    FaChartBar, FaUsers, FaUserPlus, FaBook, FaHome, FaCog,
    FaRegArrowAltCircleLeft, FaBars, FaClock, FaCalendarAlt, FaSignOutAlt,
    FaBell, FaUserCircle, FaChevronDown, FaRegArrowAltCircleRight,
    FaClipboardList, FaMoneyBillWave, FaSitemap, FaCalendarCheck, FaLink
} from 'react-icons/fa';

const SkeletonLoader = () => (
    <div className="space-y-6 animate-pulse">
        <div className="flex justify-between items-center">
            <div className="h-8 bg-gray-200 rounded-sm w-48"></div>
            <div className="h-8 bg-gray-200 rounded-sm w-32"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-28 bg-gray-200 rounded-sm"></div>
            ))}
        </div>
        <div className="h-80 bg-gray-100 rounded-sm w-full"></div>
    </div>
);

const UserDropdown = ({ user, onLogout }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="relative z-50" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center space-x-3 bg-white border border-slate-200 rounded-md p-1.5 hover:border-blue-300 transition-all active:scale-95 shadow-sm"
            >
                <img src={user.photoURL} alt="User" className="w-8 h-8 rounded-sm object-cover" />
                <div className="hidden lg:block text-left pr-1 ">
                    <p className="text-[12px] font-bold text-slate-800">{user.displayName}</p>
                    <p className="text-[9px] text-blue-600 font-semibold uppercase">Administrator</p>
                </div>
                <FaChevronDown className={`w-2.5 h-2.5 text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 10 }}
                        className="absolute right-0 mt-2 w-52 bg-white rounded-sm shadow-2xl border border-slate-100 p-1.5 origin-top-right overflow-hidden"
                    >
                        <Link to="/dashboard/settings" className="flex items-center w-full px-4 py-3 text-[13px] font-bold text-slate-600 hover:bg-slate-50 rounded-sm transition-colors group">
                            <FaUserCircle className="mr-3 text-slate-400 group-hover:text-blue-500" size={16} /> My Profile
                        </Link>
                        <div className="h-[1px] bg-slate-100 my-1 mx-2"></div>
                        <button onClick={onLogout} className="flex items-center w-full px-4 py-3 text-[13px] font-bold text-red-500 hover:bg-red-50 rounded-sm transition-colors group">
                            <FaSignOutAlt className="mr-3 opacity-70" size={16} /> Sign Out
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const NavGroup = ({ title, items, location, isSidebarExpanded }) => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    return (
        <div className="mb-6 px-4">
            {isSidebarExpanded && (
                <button
                    onClick={() => setIsCollapsed(!isCollapsed)}
                    className="flex items-center justify-between w-full mb-3 group outline-none"
                >
                    <span className="text-[10px] font-semibold text-gray-900 ">{title}</span>
                    <FaChevronDown className={`w-2 h-2 text-gray-900 transition-transform duration-300 ${isCollapsed ? '-rotate-90' : ''}`} />
                </button>
            )}
            <AnimatePresence initial={false}>
                {!isCollapsed && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="space-y-1 overflow-hidden"
                    >
                        {items.map((item) => {
                            const isActive = location.pathname === item.path;
                            return (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    className={`flex items-center p-2 rounded-sm transition-all duration-200 group ${isActive ? 'bg-blue-600 text-white shadow-sm shadow-blue-100' : 'text-gray-500 hover:bg-blue-50 hover:text-blue-700'
                                        }`}
                                >
                                    <item.Icon className={`w-4 h-4 flex-shrink-0 ${isActive ? 'text-white' : 'text-gray-400 group-hover:text-blue-600'}`} />
                                    {isSidebarExpanded && (
                                        <span className="ml-3 text-xs font-bold truncate">{item.label}</span>
                                    )}
                                </Link>
                            );
                        })}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const Dashboard = () => {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [currentDateTime, setCurrentDateTime] = useState(new Date());
    const location = useLocation();

    const mockUser = {
        displayName: "Maruf Admin",
        photoURL: "https://i.ibb.co.com/mrGbBCtq/511017443-1126095552869235-1406722978156443780-n.jpg"
    };

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 1200);
        const interval = setInterval(() => setCurrentDateTime(new Date()), 1000);
        return () => { clearTimeout(timer); clearInterval(interval); };
    }, []);

    const navSections = {
        "CORE MANAGEMENT": [
            { path: '/dashboard/Admin-home', Icon: FaChartBar, label: 'Dashboard' },
            { path: '/dashboard/batch', Icon: FaUsers, label: 'Batch' },
            { path: '/dashboard/enrollment-student', Icon: FaUserPlus, label: 'Students' },
            { path: '/dashboard/module', Icon: FaSitemap, label: 'Course Modules' },
        ],
        "SYSTEM OPERATIONS": [
            { path: '/dashboard/attendance', Icon: FaCalendarCheck, label: 'Attendance' },
            { path: '/dashboard/books', Icon: FaBook, label: 'Books' },
            { path: '/dashboard/notice', Icon: FaBell, label: 'Notice' },
            { path: '/dashboard/Bulk-SMS', Icon: FaClipboardList, label: 'Bulk Messaging' },
        ],
        "QUICK ACCESS": [
            { path: '/', Icon: FaHome, label: 'Live Website' },
            { path: '/dashboard/settings', Icon: FaCog, label: 'Settings' },
            { path: '/dashboard/subscription', Icon: FaLink, label: 'Subscription' },
        ]
    };

    return (
        <div className="flex h-screen bg-[#f1f5f9] overflow-hidden font-sans">
            <AnimatePresence>
                {mobileSidebarOpen && (
                    <motion.div
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        onClick={() => setMobileSidebarOpen(false)}
                        className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-40 md:hidden"
                    />
                )}
            </AnimatePresence>

            <motion.aside
                initial={false}
                animate={{
                    width: sidebarOpen ? 280 : 80,
                    x: (typeof window !== 'undefined' && window.innerWidth < 768 && !mobileSidebarOpen) ? -280 : 0
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="fixed md:relative z-50 bg-white border-r border-slate-200 h-full flex flex-col shadow-sm"
            >
                <div className="h-20 flex items-center justify-between px-5 border-b border-slate-100 flex-shrink-0">
                    <div className="flex items-center space-x-3 overflow-hidden">
                        <div className="w-9 h-9 bg-blue-600 rounded-sm flex items-center justify-center text-white font-black shadow-lg shadow-blue-100 flex-shrink-0">M</div>
                        {sidebarOpen && (
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="truncate">
                                <h1 className="text-xs font-black  ">Maruf's ICT</h1>
                                <p className="text-[9px] text-blue-600 font-bold ">Dashboard</p>
                            </motion.div>
                        )}
                    </div>
                    <button
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                        className="hidden md:block p-1.5 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-sm transition-all"
                    >
                        {sidebarOpen ? <FaRegArrowAltCircleLeft size={18} /> : <FaRegArrowAltCircleRight size={18} />}
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto overflow-x-hidden py-5 custom-scrollbar scroll-smooth">
                    {Object.entries(navSections).map(([title, items]) => (
                        <NavGroup
                            key={title}
                            title={title}
                            items={items}
                            location={location}
                            isSidebarExpanded={sidebarOpen}
                        />
                    ))}
                </div>
            </motion.aside>

            <div className="flex-1 flex flex-col min-w-0 h-full relative">
                <header className="h-20 bg-white/80 backdrop-blur-md border-b border-slate-200 flex items-center justify-between px-6 sticky top-0 z-30">
                    <div className="flex items-center space-x-4">
                        <button onClick={() => setMobileSidebarOpen(true)} className="md:hidden p-2 text-slate-600 bg-slate-100 rounded-sm"><FaBars /></button>
                        <div className="hidden sm:flex items-center bg-slate-50 px-4 py-2 rounded-sm border border-slate-100 space-x-4">
                            <div className="flex items-center space-x-2 border-r border-slate-200 pr-4 text-blue-600">
                                <FaClock size={12} />
                                <span className="text-xs font-black ">{currentDateTime.toLocaleTimeString()}</span>
                            </div>
                            <div className="flex items-center space-x-2 text-slate-500">
                                <FaCalendarAlt size={12} />
                                <span className="text-xs font-semibold ">{currentDateTime.toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center space-x-4">
                        <button className="relative p-2 text-slate-400 hover:text-blue-600 transition-colors group">
                            <FaBell />
                            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white group-hover:scale-110 transition-transform"></span>
                        </button>
                        <div className="w-[1px] h-6 bg-slate-200 mx-1"></div>
                        <UserDropdown user={mockUser} onLogout={() => { }} />
                    </div>
                </header>

                <main className="flex-1 overflow-y-auto bg-[#f8fafc] scroll-smooth">
                    <div className="p-3 lg:p-2 max-w-[1600px] mx-auto min-h-full">
                        {isLoading ? <SkeletonLoader /> : (
                            <motion.div
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4 }}
                                className="h-full"
                            >
                                <Outlet />
                            </motion.div>
                        )}
                    </div>
                </main>
            </div>

            <style jsx>{`
                .custom-scrollbar::-webkit-scrollbar { width: 4px; }
                .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
                .custom-scrollbar::-webkit-scrollbar-thumb { background: #e2e8f0; border-radius: 10px; }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #3b82f6; }
            `}</style>
        </div>
    );
};

export default Dashboard;