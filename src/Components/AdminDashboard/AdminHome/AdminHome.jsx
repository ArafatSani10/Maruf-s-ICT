import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUserGraduate, FaUsers, FaBookOpen, FaDollarSign, FaUserPlus, FaPlusSquare, FaDatabase, FaHistory } from 'react-icons/fa';
import AddStudent from './AddStudent';
import AddCourse from './AddCourse';
import AddBatch from './AddBatch';

const MOCK_DATA = {
    topStats: [
        { title: "Total Students", value: "17", icon: FaUserGraduate, gradient: { start: "#3b82f6", end: "#60a5fa" } },
        { title: "Active Batches", value: "13", icon: FaUsers, gradient: { start: "#8b5cf6", end: "#a78bfa" } },
        { title: "Total Enrolled Students", value: "16", icon: FaBookOpen, gradient: { start: "#ef4444", end: "#f87171" } },
        { title: "Total Revenue", value: "0", valueSuffix: "৳", icon: FaDollarSign, gradient: { start: "#f97316", end: "#fb923c" } },
    ],
};

const StatCard = React.memo(({ title, value, valueSuffix, gradient, icon: Icon }) => (
    <div
        className="bg-white p-8 rounded-sm shadow-sm border border-gray-100"
        style={{ borderTop: `4px solid ${gradient.start}` }}
    >
        <div className="flex justify-between items-start">
            <div>
                <p className="text-sm font-semibold text-gray-700 ">{title}</p>
                <p className="mt-1 text-2xl font-black text-gray-800">
                    {value}{valueSuffix && <span className="text-sm font-semibold text-gray-500 ml-1">{valueSuffix}</span>}
                </p>
            </div>
            <div className="p-2.5 rounded-md bg-gray-50 border shadow-inner">
                <Icon className="w-5 h-5" style={{ color: gradient.start }} />
            </div>
        </div>
    </div>
));

const AdminHome = () => {
    const [isStudentOpen, setIsStudentOpen] = useState(false);
    const [isCourseOpen, setIsCourseOpen] = useState(false);
    const [isBatchOpen, setIsBatchOpen] = useState(false);

    const [recentStudents] = useState([]);
    const [recentActivities] = useState([]);

    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="p-1 space-y-10 bg-gray-50 min-h-screen"
            >
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                    {MOCK_DATA.topStats.map((stat, index) => (
                        <StatCard key={index} {...stat} />
                    ))}
                </div>

                <section className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-700">Quick Actions</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <button
                            onClick={() => setIsStudentOpen(true)}
                            className="group bg-white p-5 rounded-md border-2 border-dashed border-gray-200 hover:border-indigo-400 hover:bg-indigo-50/30 transition-all flex flex-col items-center justify-center gap-4 text-center"
                        >
                            <div className="p-4 bg-indigo-50 rounded-2xl text-indigo-600 group-hover:scale-110 transition-transform shadow-sm">
                                <FaUserPlus size={28} />
                            </div>
                            <div>
                                <p className="text-lg font-semibold text-gray-800">Add Student</p>
                                <p className="text-xs text-gray-500 font-medium">Register new student</p>
                            </div>
                        </button>

                        <button
                            onClick={() => setIsCourseOpen(true)}
                            className="group bg-white p-5 rounded-md border-2 border-dashed border-gray-200 hover:border-indigo-400 hover:bg-indigo-50/30 transition-all flex flex-col items-center justify-center gap-4 text-center"
                        >
                            <div className="p-4 bg-indigo-50 rounded-2xl text-indigo-600 group-hover:scale-110 transition-transform shadow-sm">
                                <FaPlusSquare size={28} />
                            </div>
                            <div>
                                <p className="text-lg font-semibold text-gray-800">Create Course</p>
                                <p className="text-xs text-gray-500 font-medium">Add new course</p>
                            </div>
                        </button>

                        <button
                            onClick={() => setIsBatchOpen(true)}
                            className="group bg-white p-5 rounded-md border-2 border-dashed border-gray-200 hover:border-indigo-400 hover:bg-indigo-50/30 transition-all flex flex-col items-center justify-center gap-4 text-center"
                        >
                            <div className="p-4 bg-indigo-50 rounded-2xl text-indigo-600 group-hover:scale-110 transition-transform shadow-sm">
                                <FaPlusSquare size={28} />
                            </div>
                            <div>
                                <p className="text-lg font-semibold text-gray-800">Create Batch</p>
                                <p className="text-xs text-gray-500 font-medium">Add new batch</p>
                            </div>
                        </button>
                    </div>
                </section>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pb-10">
                    <div className="bg-white rounded-sm border border-gray-100 shadow-sm flex flex-col min-h-[400px]">
                        <div className="p-5 border-b border-gray-50 flex items-center gap-2">
                            <FaUserGraduate className="text-indigo-500" />
                            <h3 className="font-bold text-gray-700">Recent Students</h3>
                        </div>
                        <div className="flex-1 flex flex-col items-center justify-center p-10 text-center">
                            {recentStudents.length > 0 ? (
                                <div className="w-full text-left">Data mapping here</div>
                            ) : (
                                <>
                                    <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-4">
                                        <FaDatabase className="text-gray-200 text-3xl" />
                                    </div>
                                    <h4 className="text-gray-400 font-bold">No Data Found</h4>
                                    <p className="text-gray-300 text-xs mt-1">There are no recently admitted students to display.</p>
                                </>
                            )}
                        </div>
                    </div>

                    <div className="bg-white rounded-sm border border-gray-100 shadow-sm flex flex-col min-h-[400px]">
                        <div className="p-5 border-b border-gray-50 flex items-center gap-2">
                            <FaHistory className="text-amber-500" />
                            <h3 className="font-bold text-gray-700">Recent Activity</h3>
                        </div>
                        <div className="flex-1 flex flex-col items-center justify-center p-10 text-center">
                            {recentActivities.length > 0 ? (
                                <div className="w-full text-left">Activity mapping here</div>
                            ) : (
                                <>
                                    <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-4">
                                        <FaHistory className="text-gray-200 text-3xl" />
                                    </div>
                                    <h4 className="text-gray-400 font-bold">No Activity Data</h4>
                                    <p className="text-gray-300 text-xs mt-1">System logs are empty or no recent actions performed.</p>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </motion.div>

            <AddStudent isOpen={isStudentOpen} onClose={() => setIsStudentOpen(false)} />
            <AddCourse isOpen={isCourseOpen} onClose={() => setIsCourseOpen(false)} />
            <AddBatch isOpen={isBatchOpen} onClose={() => setIsBatchOpen(false)} />
        </>
    );
};

export default AdminHome;