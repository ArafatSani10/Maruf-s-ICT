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
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-sm transition-shadow">
        <div className="flex justify-between items-start">
            <div>
                <p className="text-sm font-medium text-gray-600">{title}</p>
                <p className="mt-2 text-2xl font-extrabold text-gray-800">
                    {value}{valueSuffix && <span className="text-sm font-medium text-gray-500 ml-2">{valueSuffix}</span>}
                </p>
            </div>
            <div className="p-3 rounded-lg" style={{ background: `linear-gradient(90deg, ${gradient.start}, ${gradient.end})` }}>
                <Icon className="w-5 h-5 text-white" />
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
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
                className="p-6 space-y-8 bg-gray-50 min-h-screen"
            >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {MOCK_DATA.topStats.map((stat, index) => (
                        <StatCard key={index} {...stat} />
                    ))}
                </div>

                <section className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-700">Quick Actions</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <button
                            onClick={() => setIsStudentOpen(true)}
                            className="group bg-white p-5 rounded-xl border border-gray-100 hover:shadow-sm transition-shadow flex items-center gap-4"
                        >
                            <div className="p-3 rounded-lg bg-indigo-50 text-indigo-600 ">
                                <FaUserPlus size={22} />
                            </div>
                            <div className="text-left">
                                <p className="text-md font-semibold text-gray-800">Add Student</p>
                                <p className="text-xs text-gray-500">Register new student</p>
                            </div>
                        </button>

                        <button
                            onClick={() => setIsCourseOpen(true)}
                            className="group bg-white p-5 rounded-xl border border-gray-100 hover:shadow-sm transition-shadow flex items-center gap-4"
                        >
                            <div className="p-3 rounded-lg bg-indigo-50 text-indigo-600 ">
                                <FaPlusSquare size={22} />
                            </div>
                            <div className="text-left">
                                <p className="text-md font-semibold text-gray-800">Create Course</p>
                                <p className="text-xs text-gray-500">Add new course</p>
                            </div>
                        </button>

                        <button
                            onClick={() => setIsBatchOpen(true)}
                            className="group bg-white p-5 rounded-xl border border-gray-100 hover:shadow-sm transition-shadow flex items-center gap-4"
                        >
                            <div className="p-3 rounded-lg bg-indigo-50 text-indigo-600 ">
                                <FaPlusSquare size={22} />
                            </div>
                            <div className="text-left">
                                <p className="text-md font-semibold text-gray-800">Create Batch</p>
                                <p className="text-xs text-gray-500">Add new batch</p>
                            </div>
                        </button>
                    </div>
                </section>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pb-10">
                    <div className="bg-white rounded-lg border border-gray-100  flex flex-col min-h-[380px]">
                        <div className="p-5 border-b border-gray-50 flex items-center gap-3">
                            <FaUserGraduate className="text-indigo-500" />
                            <h3 className="font-semibold text-gray-700">Recent Students</h3>
                        </div>
                        <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
                            {recentStudents.length > 0 ? (
                                <div className="w-full text-left">Data mapping here</div>
                            ) : (
                                <>
                                    <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mb-4">
                                        <FaDatabase className="text-gray-200 text-4xl" />
                                    </div>
                                    <h4 className="text-gray-400 font-bold">No Data Found</h4>
                                    <p className="text-gray-400 text-sm mt-1">There are no recently admitted students to display.</p>
                                </>
                            )}
                        </div>
                    </div>

                    <div className="bg-white rounded-lg border border-gray-100  flex flex-col min-h-[380px]">
                        <div className="p-5 border-b border-gray-50 flex items-center gap-3">
                            <FaHistory className="text-amber-500" />
                            <h3 className="font-semibold text-gray-700">Recent Activity</h3>
                        </div>
                        <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
                            {recentActivities.length > 0 ? (
                                <div className="w-full text-left">Activity mapping here</div>
                            ) : (
                                <>
                                    <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mb-4">
                                        <FaHistory className="text-gray-200 text-4xl" />
                                    </div>
                                    <h4 className="text-gray-400 font-bold">No Activity Data</h4>
                                    <p className="text-gray-400 text-sm mt-1">System logs are empty or no recent actions performed.</p>
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