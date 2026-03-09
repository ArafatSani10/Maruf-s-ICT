import React, { useState } from 'react';
import {
    FiSearch,
    FiFilter,
    FiRefreshCw,
    FiEye,
    FiMessageSquare,
    FiPlus,
    FiX,
    FiChevronDown,
    FiToggleLeft,
    FiToggleRight
} from 'react-icons/fi';
import { FaCheck } from 'react-icons/fa';

const attendanceRecords = [
    {
        date: 'October 27, 2025',
        batch: 'Sat-7am',
        present: 16,
        total: 16,
        percentage: '100%',
        id: 1,
        active: true,
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
        present: 20,
        total: 25,
        percentage: '80%',
        id: 2,
        active: false,
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
        className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${active
                ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg hover:shadow-xl'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
    >
        {icon}
        {label}
    </button>
);

const AttendanceRow = ({ record, onDetailsClick, onToggleActive }) => {
    const presentPercent = (record.present / record.total) * 100;
    const statusColor = presentPercent >= 80 ? 'green' : presentPercent >= 60 ? 'yellow' : 'red';
    const statusColorMap = {
        green: 'text-green-600 bg-green-50',
        yellow: 'text-yellow-600 bg-yellow-50',
        red: 'text-red-600 bg-red-50'
    };

    return (
        <tr className="border-b border-gray-100 hover:bg-blue-50 transition-colors duration-150">
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-semibold text-gray-900">{record.date}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-700">{record.batch}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center gap-3">
                    <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div
                            className={`h-2 rounded-full transition-all duration-300 ${statusColor === 'green' ? 'bg-green-500' :
                                    statusColor === 'yellow' ? 'bg-yellow-500' : 'bg-red-500'
                                }`}
                            style={{ width: `${presentPercent}%` }}
                        ></div>
                    </div>
                    <div className={`text-sm font-bold min-w-fit ${statusColorMap[statusColor]}`}>
                        <div className="px-3 py-1 rounded-lg">{record.percentage}</div>
                    </div>
                </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center gap-2">
                    <button
                        onClick={() => onDetailsClick(record)}
                        className="inline-flex items-center gap-1 px-3 py-2 text-sm font-medium text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-colors duration-150"
                    >
                        <FiEye className="w-4 h-4" />
                        View
                    </button>
                    <button className="inline-flex items-center gap-1 px-3 py-2 text-sm font-medium text-indigo-600 hover:text-indigo-700 hover:bg-indigo-50 rounded-lg transition-colors duration-150" title="Message">
                        <FiMessageSquare className="w-4 h-4" />
                        SMS
                    </button>
                    <button
                        onClick={() => onToggleActive(record.id)}
                        className={`inline-flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-150 ${record.active
                                ? 'text-green-600 hover:text-green-700 hover:bg-green-50'
                                : 'text-gray-600 hover:text-gray-700 hover:bg-gray-100'
                            }`}
                        title={record.active ? 'Active' : 'Inactive'}
                    >
                        {record.active ? (
                            <FiToggleRight className="w-5 h-5" />
                        ) : (
                            <FiToggleLeft className="w-5 h-5" />
                        )}
                        {record.active ? 'Active' : 'Inactive'}
                    </button>
                </div>
            </td>
        </tr>
    );
};

const SelectField = ({ label, options }) => (
    <div className="mb-4">
        <label className="block text-sm font-semibold text-gray-700 mb-2">{label}</label>
        <div className="relative">
            <select
                className="w-full appearance-none bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-gray-200 rounded-lg shadow-sm py-3 px-4 pr-10 text-gray-700 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:shadow-lg sm:text-sm cursor-pointer transition-all duration-200 hover:border-blue-300"
            >
                {options.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>
            <FiChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-blue-400 pointer-events-none" />
        </div>
    </div>
);

const TakeAttendanceModal = ({ isOpen, onClose, options }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 overflow-y-auto h-full w-full z-50 flex justify-center items-center p-4">
            <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md animate-in">

                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-4 rounded-t-2xl">
                    <h3 className="text-lg font-bold text-white">Take Daily Attendance</h3>
                </div>

                <form className="p-6">

                    <SelectField label="1. Select Batch" options={options.batches} />
                    <SelectField label="2. Select Branch" options={options.branches} />
                    <SelectField label="3. Select Class" options={options.classes} />

                    <div className="mb-6">
                        <label className="block text-sm font-semibold text-gray-700 mb-2">4. Attendance Date</label>
                        <input
                            type="date"
                            defaultValue={new Date().toISOString().slice(0, 10)}
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent sm:text-sm transition-all duration-200 hover:border-blue-300"
                        />
                    </div>

                    <div className="mt-6 flex justify-end gap-3">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-5 py-2.5 border border-gray-300 rounded-lg text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors duration-150"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg text-sm font-semibold hover:shadow-lg transition-all duration-150"
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
        <div className="p-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg border border-gray-200">
            <div className="text-xs font-bold uppercase text-gray-500 ">{label}</div>
            <div className="text-lg font-bold text-gray-900 mt-2">{value}</div>
        </div>
    );

    const SummaryCard = ({ label, value, bgColor, textColor }) => (
        <div className={`p-4 rounded-lg shadow-md flex-1 text-center border-2 ${bgColor}`}>
            <div className="text-xs font-bold uppercase text-gray-600 ">{label}</div>
            <div className={`text-3xl font-bold mt-2 ${textColor}`}>{value}</div>
        </div>
    );

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 overflow-y-auto h-full w-full z-50 flex justify-center items-center p-4">
            <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl my-8 flex flex-col max-h-[90vh]">

                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-4 rounded-t-2xl flex justify-between items-center">
                    <h3 className="text-lg font-bold text-white">Attendance Details</h3>
                    <button onClick={onClose} className="text-white hover:text-blue-100 transition duration-150">
                        <FiX className="w-6 h-6" />
                    </button>
                </div>

                <div className="p-6 overflow-y-auto flex-grow">

                    <div className="grid grid-cols-2 gap-4 mb-6">
                        <DetailItem label="Date" value={record.date} />
                        <DetailItem label="Batch" value={record.batch} />
                    </div>

                    <h4 className="text-md font-bold text-gray-800 mb-4 mt-6">Attendance Summary</h4>
                    <div className="flex gap-4 mb-6">
                        <SummaryCard label="Total" value={record.total} bgColor="bg-gray-100 border-gray-300" textColor="text-gray-900" />
                        <SummaryCard label="Present" value={record.present} bgColor="bg-green-100 border-green-300" textColor="text-green-600" />
                        <SummaryCard label="Absent" value={totalAbsent} bgColor="bg-red-100 border-red-300" textColor="text-red-600" />
                    </div>

                    <h4 className="text-md font-bold text-gray-800 mb-4">Student Details</h4>
                    <div className="border-2 border-gray-200 rounded-lg overflow-hidden max-h-60">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-blue-50 sticky top-0">
                                <tr>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-bold uppercase text-gray-700">NAME</th>
                                    <th scope="col" className="px-6 py-3 text-right text-xs font-bold uppercase text-gray-700">STATUS</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {record.studentDetails && record.studentDetails.map((student) => (
                                    <tr key={student.id} className="hover:bg-gray-50">
                                        <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-900">{student.name}</td>
                                        <td className="px-6 py-3 whitespace-nowrap text-right text-sm">
                                            <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-lg text-xs font-bold ${student.status === 'Present' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                                                }`}>
                                                <div className={`w-2 h-2 rounded-full ${student.status === 'Present' ? 'bg-green-600' : 'bg-red-600'}`}></div>
                                                {student.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="p-4 border-t border-gray-200 bg-gray-50 rounded-b-2xl flex justify-end">
                    <button
                        onClick={onClose}
                        className="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg text-sm font-semibold hover:shadow-lg transition-all duration-150"
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
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
    const [selectedRecord, setSelectedRecord] = useState(null);
    const [records, setRecords] = useState(attendanceRecords);
    const recordCount = records.length;

    const handleRefresh = () => {
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

    const handleToggleActive = (id) => {
        setRecords(records.map(r => 
            r.id === id ? { ...r, active: !r.active } : r
        ));
    };

    return (
        <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 min-h-screen p-6">

            {/* Header Section */}
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-6 border border-gray-100">
                <div className="flex justify-between items-center flex-wrap gap-4">
                    

                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg hover:from-green-700 hover:to-emerald-700 font-semibold shadow-lg hover:shadow-xl transition-all duration-150"
                    >
                        <FiPlus className="w-5 h-5" />
                        Take Attendance
                    </button>
                </div>
            </div>

            {/* Search and Filter Section */}
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-6 border border-gray-100">

                <div className="flex justify-between items-center gap-4 flex-wrap">
                    <div className="relative flex-1 max-w-sm">
                        <input
                            type="text"
                            placeholder="Search by date or batch..."
                            onChange={handleSearchChange}
                            className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-gray-300"
                        />
                        <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    </div>

                    <div className="flex gap-3">
                        <button className="inline-flex items-center gap-2 px-4 py-2.5 border-2 border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 font-semibold transition-colors duration-150">
                            <FiFilter className="w-4 h-4" />
                            Filters
                        </button>
                        <button
                            onClick={handleRefresh}
                            className="inline-flex items-center gap-2 px-4 py-2.5 border-2 border-blue-300 text-blue-600 rounded-lg hover:bg-blue-50 font-semibold transition-colors duration-150"
                        >
                            <FiRefreshCw className="w-4 h-4" />
                            Refresh
                        </button>
                    </div>
                </div>
            </div>

            {/* Records Section */}
            <div className="mb-3 ml-1">
                <h3 className="text-sm font-bold text-gray-700">Attendance Records 
                    <span className="text-gray-400 ml-2">({recordCount} found)</span>
                </h3>
            </div>

            {/* Table */}
            <div className="overflow-x-auto bg-white rounded-2xl shadow-lg border border-gray-100">
                <table className="min-w-full divide-y divide-gray-100">
                    <thead className="bg-gradient-to-r from-blue-50 to-indigo-50">
                        <tr>
                            <th scope="col" className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-gray-700">DATE</th>
                            <th scope="col" className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-gray-700">BATCH</th>
                            <th scope="col" className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-gray-700">ATTENDANCE</th>
                            <th scope="col" className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-gray-700">ACTIONS</th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-100">
                        {records.map((record) => (
                            <AttendanceRow
                                key={record.id}
                                record={record}
                                onDetailsClick={handleViewDetails}
                                onToggleActive={handleToggleActive}
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