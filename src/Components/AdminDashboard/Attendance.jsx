import React, { useState } from 'react';
import {
    FiSearch,
    FiFilter,
    FiRefreshCw,
    FiEdit,
    FiEye,
    FiMessageSquare,
    FiPlus,
    FiX,
    FiChevronDown
} from 'react-icons/fi';
import { FaCheck } from 'react-icons/fa';

// DUMMY DATA (API Data will replace these later)
const attendanceRecords = [
    {
        date: 'October 27, 2025',
        batch: 'Sat-7am',
        class: 'HSC Model Test',
        branch: 'Kushtia Branch',
        present: 16,
        total: 16,
        percentage: '100%',
        id: 1,
        studentDetails: [
            { name: 'Apon Ali', status: 'Present', id: 'S1' },
            { name: 'Emran Ahamed', status: 'Present', id: 'S2' },
            { name: 'Fatema', status: 'Present', id: 'S3' },
            { name: 'Jannatul Ferdous Mim', status: 'Present', id: 'S4' },
            { name: 'Rakib Hossain', status: 'Present', id: 'S5' },
            { name: 'Nazmul Islam', status: 'Present', id: 'S6' },
            { name: 'Sumiya Akter', status: 'Present', id: 'S7' },
            { name: 'Kamrul Hasan', status: 'Present', id: 'S8' },
        ],
    },
    {
        date: 'October 26, 2025',
        batch: 'Mon-3pm',
        class: 'SSC Prep',
        branch: 'Dhaka Branch',
        present: 20,
        total: 25,
        percentage: '80%',
        id: 2,
        studentDetails: [],
    },
];

const initialOptions = {
    branches: ['Select Branch', 'Kushtia Branch', 'Dhaka Branch'],
    classes: ['Select Class', 'HSC Model Test', 'SSC Prep'],
    batches: ['Select Batch', 'Sat-7am', 'Mon-3pm'],
};

const ReportButton = ({ label, icon, color, active, onClick }) => (
    <button
        onClick={onClick}
        className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition duration-150 ease-in-out ${active
            ? `bg-${color}-600 text-white shadow-md`
            : `bg-white text-${color}-600 border border-${color}-600 hover:bg-${color}-50`
            }`}
    >
        {icon}
        {label}
    </button>
);

const AttendanceRow = ({ record, onDetailsClick }) => {
    const presentPercent = (record.present / record.total) * 100;

    return (
        <tr className="hover:bg-gray-50">
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{record.date}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{record.batch}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{record.class}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{record.branch}</td>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900 mb-1">
                    {record.present} / {record.total} <span className="text-green-600 font-semibold ml-2">{record.percentage} present</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1.5">
                    <div
                        className="bg-green-500 h-1.5 rounded-full"
                        style={{ width: `${presentPercent}%` }}
                    ></div>
                </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                <div className="flex items-center justify-start space-x-3">
                    <button
                        onClick={() => onDetailsClick(record)}
                        className="text-blue-600 hover:text-blue-800 flex items-center text-xs font-semibold"
                    >
                        <FiEye className="w-4 h-4 mr-1" /> View Details
                    </button>
                    <button className="text-yellow-600 hover:text-yellow-800" title="Edit">
                        <FiEdit className="w-5 h-5" />
                    </button>
                    <button className="text-blue-500 hover:text-blue-700" title="SMS">
                        <FiMessageSquare className="w-5 h-5" />
                    </button>
                </div>
            </td>
        </tr>
    );
};

const SelectField = ({ label, options }) => (
    <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
        <div className="relative">
            <select
                className="block w-full appearance-none bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 pr-8 text-gray-700 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm cursor-pointer"
            >
                {options.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>
            <FiChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
        </div>
    </div>
);

const TakeAttendanceModal = ({ isOpen, onClose, options }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50 flex justify-center items-center">
            <div className="relative bg-white rounded-lg shadow-xl w-full max-w-md mx-4 p-6">

                <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                    <h3 className="text-xl font-semibold text-gray-900">Take Daily Attendance</h3>
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-gray-600 transition duration-150"
                    >
                        <FiX className="w-6 h-6" />
                    </button>
                </div>

                <form className="mt-4">

                    <SelectField label="1. Select Branch" options={options.branches} />
                    <SelectField label="2. Select Class" options={options.classes} />
                    <SelectField label="3. Select Batch" options={options.batches} />

                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-1">4. Attendance Date</label>
                        <input
                            type="date"
                            defaultValue={new Date().toISOString().slice(0, 10)}
                            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                        />
                    </div>

                    <div className="mt-6 flex justify-end space-x-3">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700"
                        >
                            Search Students
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

const AttendanceDetailsModal = ({ isOpen, onClose, record }) => {
    if (!isOpen || !record) return null;

    const totalAbsent = record.total - record.present;

    const DetailItem = ({ label, value }) => (
        <div className="p-3 bg-gray-50 rounded-lg shadow-sm">
            <div className="text-xs font-medium uppercase text-gray-500">{label}</div>
            <div className="text-sm font-semibold text-gray-900 mt-1">{value}</div>
        </div>
    );

    const SummaryCard = ({ label, value, bgColor, textColor }) => (
        <div className={`p-4 rounded-lg shadow-md flex-1 text-center border ${bgColor} border-gray-200`}>
            <div className="text-xs font-medium uppercase text-gray-600">{label}</div>
            <div className={`text-3xl font-bold mt-1 ${textColor}`}>{value}</div>
        </div>
    );

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50 flex justify-center items-center">
            <div className="relative bg-white rounded-lg shadow-xl w-full max-w-2xl mx-4 my-8 flex flex-col max-h-[90vh]">

                <div className="flex justify-between items-center p-4 border-b border-gray-200">
                    <h3 className="text-xl font-semibold text-gray-900">Attendance Details</h3>
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition duration-150">
                        <FiX className="w-6 h-6" />
                    </button>
                </div>

                <div className="p-4 overflow-y-auto flex-grow">

                    <div className="grid grid-cols-2 gap-3 mb-6">
                        <DetailItem label="Date" value={record.date} />
                        <DetailItem label="Batch" value={record.batch} />
                        <DetailItem label="Class" value={record.class} />
                        <DetailItem label="Branch" value={record.branch} />
                    </div>

                    <h4 className="text-md font-semibold text-gray-700 mb-3">Attendance Summary</h4>
                    <div className="flex space-x-4 mb-6">
                        <SummaryCard label="Total" value={record.total} bgColor="bg-gray-100" textColor="text-gray-900" />
                        <SummaryCard label="Present" value={record.present} bgColor="bg-green-100" textColor="text-green-600" />
                        <SummaryCard label="Absent" value={totalAbsent} bgColor="bg-red-100" textColor="text-red-600" />
                    </div>

                    <h4 className="text-md font-semibold text-gray-700 mb-3">Student Details</h4>
                    <div className="border border-gray-200 rounded-lg overflow-hidden max-h-60">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50 sticky top-0">
                                <tr>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase text-gray-500">NAME</th>
                                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium uppercase text-gray-500">STATUS</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {record.studentDetails && record.studentDetails.map((student) => (
                                    <tr key={student.id}>
                                        <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-900">{student.name}</td>
                                        <td className="px-6 py-3 whitespace-nowrap text-right text-sm">
                                            <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${student.status === 'Present' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                                                }`}>
                                                <FaCheck className="w-3 h-3 mr-1" />
                                                {student.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="p-4 border-t border-gray-200 flex justify-end">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};


const Attendance = () => {
    const [activeReport, setActiveReport] = useState('Student-wise Report');
    const [isModalOpen, setIsModalOpen] = useState(false); // State for Take Attendance Modal
    const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false); // State for Details Modal
    const [selectedRecord, setSelectedRecord] = useState(null); // State for selected record data
    const recordCount = attendanceRecords.length;

    const handleRefresh = () => {
        // Hard Page Refresh (as requested)
        window.location.reload();
    };

    const handleSearchChange = (event) => {
        const searchTerm = event.target.value;
        console.log("Searching for:", searchTerm);
    };

    const handleViewDetails = (record) => {
        setSelectedRecord(record);
        setIsDetailsModalOpen(true);
    };

    return (
        <div className=" bg-gray-50 min-h-screen">

            <div className="bg-white p-4 rounded-lg shadow-md mb-6 flex justify-between items-center">
                <div className="flex space-x-3">
                    <ReportButton
                        label="Monthly Report"
                        color="blue"
                        active={activeReport === 'Monthly Report'}
                        onClick={() => setActiveReport('Monthly Report')}
                    />
                    <ReportButton
                        label="Student-wise Report"
                        color="violet"
                        active={activeReport === 'Student-wise Report'}
                        onClick={() => setActiveReport('Student-wise Report')}
                    />
                    <ReportButton
                        label="Individual Report"
                        color="purple"
                        active={activeReport === 'Individual Report'}
                        onClick={() => setActiveReport('Individual Report')}
                    />
                </div>

                <button
                    onClick={() => setIsModalOpen(true)}
                    className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 font-medium flex items-center shadow-md transition duration-150"
                >
                    <FiPlus className="w-5 h-5 mr-1" />
                    Take Attendance
                </button>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md mb-6 flex justify-between items-center">

                <div className="relative flex-1 max-w-sm mr-4">
                    <input
                        type="text"
                        placeholder="Search batches..."
                        onChange={handleSearchChange}
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    />
                    <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                </div>

                <div className="flex space-x-3">
                    <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 flex items-center transition duration-150">
                        <FiFilter className="w-4 h-4 mr-1" />
                        Filters
                    </button>
                    <button
                        onClick={handleRefresh}
                        className="px-4 py-2 border border-green-500 text-green-600 rounded-lg hover:bg-green-50 flex items-center transition duration-150"
                    >
                        <FiRefreshCw className="w-4 h-4 mr-1" />
                        Refresh
                    </button>
                </div>
            </div>

            <div className="text-sm font-medium text-gray-600 mb-3 ml-1">
                Attendance Records <span className="text-gray-400">({recordCount} record found)</span>
            </div>

            <div className="overflow-x-auto bg-white rounded-lg shadow-md">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50 text-xs font-semibold uppercase tracking-wider text-gray-500">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-left">DATE</th>
                            <th scope="col" className="px-6 py-3 text-left">BATCH</th>
                            <th scope="col" className="px-6 py-3 text-left">CLASS</th>
                            <th scope="col" className="px-6 py-3 text-left">BRANCH</th>
                            <th scope="col" className="px-6 py-3 text-left">ATTENDANCE</th>
                            <th scope="col" className="px-6 py-3 text-left">ACTIONS</th>
                        </tr>
                    </thead>

                    <tbody className="bg-white divide-y divide-gray-200">
                        {attendanceRecords.map((record) => (
                            <AttendanceRow
                                key={record.id}
                                record={record}
                                onDetailsClick={handleViewDetails}
                            />
                        ))}
                    </tbody>
                </table>
            </div>

            <TakeAttendanceModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                options={initialOptions}
            />

            <AttendanceDetailsModal
                isOpen={isDetailsModalOpen}
                onClose={() => setIsDetailsModalOpen(false)}
                record={selectedRecord}
            />

        </div>
    );
};

export default Attendance;