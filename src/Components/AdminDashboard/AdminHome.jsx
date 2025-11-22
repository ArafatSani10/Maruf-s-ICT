import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    FaUserGraduate, FaUsers, FaCalendarAlt, FaMoneyBillWave, FaRegBuilding, FaFilter,
    FaCalendarDay, FaBookOpen, FaBirthdayCake, FaChartBar, FaDollarSign, FaRegSadTear,
    FaRegGrinAlt, FaChevronDown, FaTimes, FaGift, FaCheckCircle
} from 'react-icons/fa';
import Chart from './Chart';

// ===============================================
// MOCK DATA (API Simulation)
// ===============================================

const MOCK_DATA = {
    topStats: [
        { title: "Total Students", value: "17", icon: FaUserGraduate, gradient: { start: "#3b82f6", end: "#60a5fa" } },
        { title: "Active Batches", value: "13", icon: FaUsers, gradient: { start: "#8b5cf6", end: "#a78bfa" } },
        { title: "Total Enrolled Students", value: "16", icon: FaBookOpen, gradient: { start: "#ef4444", end: "#f87171" } },
        { title: "Total Revenue", value: "0", valueSuffix: "৳", icon: FaDollarSign, gradient: { start: "#f97316", end: "#fb923c" } },
    ],
    financialSummary: [
        { title: "Total Revenue", value: "0", subText: "Enrollment: ৳0 + Balance: ৳0", bgColor: "bg-blue-50", textColor: "text-blue-600" },
        { title: "Total Expenses", value: "0", subText: "0 expense records", bgColor: "bg-red-50", textColor: "text-red-600" },
        { title: "Net Income", value: "0", subText: "Profit for period", bgColor: "bg-green-50", textColor: "text-green-600" },
        { title: "Profit Margin", value: "0", subText: "Healthy margin", bgColor: "bg-purple-50", textColor: "text-purple-600", isPercentage: true },
    ],
    dropdownItems: {
        branches: [{ label: "Kushtia Branch" }, { label: "Dhaka Branch (Mock)" }],
        batches: [{ label: "Web Dev 2024" }, { label: "App Dev Q3" }],
    },
    todayBirthdays: [
        { id: 101, name: "Rony Ahmed", batch: "Web Dev 2024" },
        { id: 102, name: "Maria Khan", batch: "App Dev Q3" },
        { id: 103, name: "Sajib Sen", batch: "Web Dev 2024" },
    ]
};

// ===============================================
// Reusable Components
// ===============================================

const StatCard = React.memo(({ title, value, valueSuffix, gradient, icon: Icon }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`bg-white p-5 rounded-xl shadow-lg border border-gray-100 overflow-hidden transform transition duration-300 hover:scale-[1.03] hover:shadow-xl cursor-pointer`}
        style={{ borderTop: `4px solid ${gradient.start}`, background: `linear-gradient(to right, ${gradient.start}10, #fff 90%)` }}
    >
        <div className="flex justify-between items-start">
            <div>
                <p className="text-sm font-medium text-gray-500">{title}</p>
                <p className="mt-1 text-2xl font-extrabold text-gray-900">
                    {value}{valueSuffix && <span className="text-base font-semibold text-gray-600 ml-1">{valueSuffix}</span>}
                </p>
            </div>
            <div className={`p-3 rounded-xl shadow-md bg-white`} style={{ border: `1px solid ${gradient.start}` }}>
                <Icon className="w-5 h-5" style={{ color: gradient.start }} />
            </div>
        </div>
    </motion.div>
));

const FinancialCard = React.memo(({ title, value, subText, bgColor, textColor, isPercentage = false }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className={`p-6 rounded-xl border border-gray-200 bg-white transform transition duration-300 hover:shadow-lg`}
        >
            <p className="text-sm font-semibold text-gray-500">{title}</p>
            <p className={`mt-2 text-2xl font-extrabold ${textColor}`}>
                ৳{value}
                {isPercentage && <span className="text-xl ml-1">%</span>}
            </p>
            <p className="text-xs text-gray-400 mt-1">{subText}</p>
        </motion.div>
    );
});


const InfoCard = React.memo(({ title, children, icon: Icon, rightContent = null }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-5 rounded-xl border border-gray-200 min-h-[200px] flex flex-col transition duration-300 hover:border-blue-300"
        >
            <div className="flex justify-between items-center mb-4 pb-2 border-b border-gray-100">
                <h2 className="text-lg font-semibold text-gray-800 flex items-center">
                    {Icon && <Icon className="w-5 h-5 text-blue-600 mr-2" />}
                    {title}
                </h2>
                {rightContent}
            </div>
            <div className="flex-1">
                {children}
            </div>
        </motion.div>
    );
});


const DropdownMenu = React.memo(({ buttonText, items }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative inline-block text-left z-10">
            <motion.button
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center px-4 py-2 bg-gray-200 text-gray-800 font-semibold rounded-lg hover:bg-gray-300 transition duration-150"
            >
                {buttonText} <FaChevronDown className={`w-3 h-3 ml-2 transition-transform duration-200 ${isOpen ? 'rotate-180' : 'rotate-0'}`} />
            </motion.button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none origin-top-right"
                        onBlur={() => setIsOpen(false)}
                        tabIndex="-1"
                    >
                        <div className="py-1">
                            {items.map((item, index) => (
                                <a
                                    key={index}
                                    href="#"
                                    onClick={(e) => { e.preventDefault(); setIsOpen(false); console.log(`${buttonText} selected: ${item.label}`); }}
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                                >
                                    {item.label}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
});


const BirthdayModal = ({ isOpen, onClose, initialStudents }) => {
    const [students, setStudents] = useState(initialStudents.map(s => ({ ...s, isSelected: false })));
    const [wishMessage, setWishMessage] = useState('');

    const selectedStudents = useMemo(() => students.filter(s => s.isSelected), [students]);
    const selectedCount = selectedStudents.length;
    const hasBirthdays = initialStudents.length > 0;

    const defaultCaption = `Happy Birthday to our amazing ${selectedCount > 0 ? selectedCount : ''} student${selectedCount !== 1 ? 's' : ''}! Wishing you a year full of learning, growth, and success. Stay awesome! 🎉🎂`;

    const toggleStudentSelection = (id) => {
        setStudents(prevStudents =>
            prevStudents.map(student =>
                student.id === id ? { ...student, isSelected: !student.isSelected } : student
            )
        );
    };

    const selectAllStudents = () => {
        const allSelected = students.every(s => s.isSelected);
        setStudents(prevStudents =>
            prevStudents.map(student => ({ ...student, isSelected: !allSelected }))
        );
    };

    const handleSendWish = () => {
        if (selectedCount === 0) return alert("Please select at least one student to send a wish.");

        console.log(`WISH SENT TO: ${selectedStudents.map(s => s.name).join(', ')}`);
        alert(`Wish sent successfully to ${selectedCount} student(s)!`);

        setStudents(initialStudents.map(s => ({ ...s, isSelected: false })));
        setWishMessage('');
        onClose();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ scale: 0.9, y: 50 }}
                        animate={{ scale: 1, y: 0 }}
                        exit={{ scale: 0.9, y: 50 }}
                        transition={{ duration: 0.3 }}
                        className="bg-white p-6 rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col"
                        onClick={(e) => e.stopPropagation()}
                    >

                        <div className="flex justify-between items-center border-b pb-3 mb-4 flex-shrink-0">
                            <h3 className="text-2xl font-bold text-pink-600 flex items-center">
                                <FaGift className="w-7 h-7 mr-2" /> Today's Birthdays ({initialStudents.length})
                            </h3>
                            <button onClick={onClose} className="text-gray-500 hover:text-gray-800 p-2 rounded-full hover:bg-gray-100 transition">
                                <FaTimes className="w-5 h-5" />
                            </button>
                        </div>


                        <div className="flex-1 overflow-y-auto pr-2 mb-4 space-y-3">
                            {hasBirthdays ? (
                                <>
                                    <h4 className='text-md font-semibold text-gray-700'>Select Students to Wish:</h4>


                                    <div className='flex justify-between items-center p-3 bg-pink-50 border border-pink-200 rounded-lg cursor-pointer hover:bg-pink-100 transition' onClick={selectAllStudents}>
                                        <span className='font-bold text-pink-700'>
                                            {students.every(s => s.isSelected) ? 'Deselect All' : 'Select All'}
                                        </span>
                                        <span className='text-sm font-medium text-pink-600'>
                                            {selectedCount} / {students.length} Selected
                                        </span>
                                    </div>


                                    {students.map((student) => (
                                        <motion.div
                                            key={student.id}
                                            onClick={() => toggleStudentSelection(student.id)}
                                            whileHover={{ scale: 1.01, boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}
                                            className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition duration-200 ${student.isSelected ? 'bg-pink-100 border-2 border-pink-500 shadow-md' : 'bg-white border border-gray-200 hover:bg-gray-50'
                                                }`}
                                        >
                                            <div className="flex flex-col">
                                                <span className="font-semibold text-gray-800">{student.name}</span>
                                                <span className="text-xs text-gray-500">Batch: {student.batch}</span>
                                            </div>
                                            {student.isSelected ? <FaCheckCircle className="w-5 h-5 text-pink-600" /> : <div className="w-5 h-5 border-2 border-gray-400 rounded-full"></div>}
                                        </motion.div>
                                    ))}
                                </>
                            ) : (

                                <div className="flex flex-col items-center justify-center h-40 text-center text-gray-500">
                                    <FaRegSadTear className="w-10 h-10 mb-3" />
                                    <p className="text-lg font-semibold">No Birthdays Today</p>
                                    <p className="text-sm">Come back another day!</p>
                                </div>
                            )}
                        </div>


                        {hasBirthdays && (
                            <>
                                <h4 className='text-md font-semibold text-gray-700 mt-2 mb-3'>Wish Message:</h4>
                                <p className="text-sm text-gray-600 mb-2">Caption for {selectedCount} student(s) will be used:</p>

                                <textarea
                                    defaultValue={defaultCaption}
                                    onChange={(e) => setWishMessage(e.target.value)}
                                    rows="4"
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-pink-500 focus:border-pink-500 transition resize-none"
                                ></textarea>
                            </>
                        )}


                        <div className="mt-4 flex justify-end space-x-3 flex-shrink-0">
                            <button onClick={onClose} className="px-5 py-2 text-sm font-semibold rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300 transition">
                                Cancel
                            </button>
                            <button
                                onClick={handleSendWish}
                                disabled={selectedCount === 0 && hasBirthdays}
                                className={`px-5 py-2 text-sm font-semibold rounded-lg text-white transition shadow-md ${selectedCount === 0 && hasBirthdays ? 'bg-gray-400 cursor-not-allowed' : 'bg-pink-600 hover:bg-pink-700'
                                    }`}
                            >
                                Send Wish ({selectedCount})
                            </button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

// ===============================================
// Main AdminHome Component
// ===============================================

const AdminHome = () => {

    const topStats = MOCK_DATA.topStats;
    const financialSummary = MOCK_DATA.financialSummary;
    const branchItems = MOCK_DATA.dropdownItems.branches;
    const batchItems = MOCK_DATA.dropdownItems.batches;
    const todayBirthdays = MOCK_DATA.todayBirthdays;

    const [isBirthdayModalOpen, setIsBirthdayModalOpen] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
        >


            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {topStats.map((stat, index) => (
                    <StatCard key={index} {...stat} />
                ))}
            </div>


            <div className="flex flex-wrap gap-3 items-center justify-between">
                <div className="flex flex-wrap gap-3">
                    <button className="flex items-center px-4 py-2 bg-purple-600 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 transition duration-150">
                        <FaFilter className="w-4 h-4 mr-2" /> Custom Report
                    </button>
                    <button className="flex items-center px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-150">
                        <FaCalendarDay className="w-4 h-4 mr-2" /> Today's Report
                    </button>

                    <DropdownMenu buttonText="Branch Report" items={branchItems} />
                    <DropdownMenu buttonText="Batch Report" items={batchItems} />

                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setIsBirthdayModalOpen(true)}
                        className="flex items-center px-4 py-2 bg-pink-100 text-pink-600 font-semibold rounded-lg hover:bg-pink-200 transition duration-150"
                    >
                        <FaBirthdayCake className="w-4 h-4 mr-2" /> Birthdays
                    </motion.button>
                </div>


                <div className="flex items-center px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm cursor-pointer hover:border-blue-500 transition duration-150">
                    <span className="text-gray-700 font-medium">Today</span>
                    <FaChevronDown className="w-3 h-3 text-gray-500 ml-2" />
                </div>
            </div>


            <div className="space-y-4">
                <div className="flex items-center text-xl font-extrabold text-gray-900">
                    <FaChartBar className="w-5 h-5 text-gray-600 mr-2" /> Net Income Summary
                    <span className="text-sm font-medium text-gray-500 ml-2">(Today)</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {financialSummary.map((item, index) => (
                        <FinancialCard key={index} {...item} />
                    ))}
                </div>
            </div>


            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                <InfoCard title="Student Count by Branch" icon={FaRegBuilding} rightContent={
                    <span className="text-xs text-gray-500">0 students</span>
                }>

                    <div className="flex flex-col space-y-3">
                        <div className="flex justify-between items-center text-sm font-medium text-gray-800">
                            <span>Kushtia Branch</span>
                            <span>0 students (0%)</span>
                        </div>

                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div className="bg-green-500 h-2.5 rounded-full" style={{ width: '0%' }}></div>
                        </div>
                    </div>
                    <p className="text-xs text-gray-500 mt-4">
                        98/A, Nurpur United Lane, Hospital Mor, Tulpura, Kushtia
                    </p>
                </InfoCard>


                <InfoCard title="Revenue by Branch" icon={FaDollarSign} rightContent={
                    <span className="text-xs text-gray-500">0% of total</span>
                }>

                    <div className="flex flex-col space-y-3">
                        <div className="flex justify-between items-center text-sm font-medium text-gray-800">
                            <span>Kushtia Branch</span>
                            <span>৳0 (0%)</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: '0%' }}></div>
                        </div>
                    </div>
                </InfoCard>


                <InfoCard title="Expenses by Branch" icon={FaRegGrinAlt}>
                    <div className="flex flex-col items-center justify-center h-full text-center p-8 text-gray-500">
                        <FaRegSadTear className="w-12 h-12 mb-3" />
                        <p className="text-lg font-semibold mb-1">No expenses found</p>
                        <p className="text-sm">No expense data available for the selected time period</p>
                    </div>
                </InfoCard>


                <InfoCard title="Attendance by Branch" icon={FaCalendarAlt}>
                    <div className="flex items-center justify-c enter h-full text-gray-400">
                        Attendance data chart will be added here
                    </div>
                </InfoCard>
            </div>



            <BirthdayModal
                isOpen={isBirthdayModalOpen}
                onClose={() => setIsBirthdayModalOpen(false)}
                initialStudents={todayBirthdays}
            />


            <Chart></Chart>

        </motion.div>
    );
};

export default AdminHome;