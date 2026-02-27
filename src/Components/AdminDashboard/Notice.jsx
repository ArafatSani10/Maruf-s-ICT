import React, { useState } from 'react';
import { PlusCircleIcon, BellIcon, XMarkIcon, CalendarIcon } from '@heroicons/react/24/outline';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';

const branches = ['Select Branch', 'Main Branch', 'Secondary Branch'];
const classes = ['Select Class', 'Class 1', 'Class 2', 'Class 3'];
const batches = ['Select Batch', 'Batch A', 'Batch B', 'Batch C'];
const statuses = ['All Statuses', 'Active', 'Inactive', 'Draft'];

const defaultNotices = [
    { id: 1, title: 'Annual Sports Day Postponed', content: 'Due to unavoidable circumstances and expected heavy rain, the Annual Sports Day scheduled for tomorrow has been postponed to next Friday.', branch: 'Main Branch', class: 'Class 3', batch: 'Batch B', startDate: '11/25/2025', endDate: '12/10/2025', status: 'Active' },
    { id: 2, title: 'Exam Schedule Announced', content: 'The final examination schedule for all classes is now available on the official student portal. Please review the dates carefully.', branch: 'Secondary Branch', class: 'Class 1', batch: 'Batch A', startDate: '11/22/2025', endDate: '12/30/2025', status: 'Active' },
    { id: 3, title: 'Library Renovation', content: 'The library will remain closed for a week starting from December 1st for necessary renovation work. All books must be returned by November 28th.', branch: 'Main Branch', class: 'Class 2', batch: 'Batch C', startDate: '12/01/2025', endDate: '12/07/2025', status: 'Inactive' },
];

const AddNoticeModal = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        branch: branches[0],
        class: classes[0],
        batch: batches[0],
        message: '',
        startDate: '',
        endDate: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Notice Data:', formData);
        onClose();
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    if (!isOpen) return null;

    const availableBatches = formData.class !== classes[0] ? batches.slice(1) : [];
    const isBatchDisabled = formData.class === classes[0];

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-md shadow-xl w-full max-w-lg">

                <div className="p-5 border-b flex justify-between items-center">
                    <h3 className="text-xl font-semibold text-gray-900 flex items-center">
                        <BellIcon className="h-6 w-6 text-green-600 mr-2" />
                        Add New Notice
                    </h3>
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
                        <XMarkIcon className="h-6 w-6" />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="p-5 space-y-4">

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                        <div>
                            <label htmlFor="branch" className="block text-sm font-medium text-gray-700 required-asterisk">Branch *</label>
                            <select
                                id="branch"
                                name="branch"
                                value={formData.branch}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md border"
                            >
                                {branches.map(b => <option key={b}>{b}</option>)}
                            </select>
                        </div>

                        <div>
                            <label htmlFor="class" className="block text-sm font-medium text-gray-700 required-asterisk">Class *</label>
                            <select
                                id="class"
                                name="class"
                                value={formData.class}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md border"
                            >
                                {classes.map(c => <option key={c}>{c}</option>)}
                            </select>
                        </div>

                        <div>
                            <label htmlFor="batch" className="block text-sm font-medium text-gray-700">Batch *</label>
                            <select
                                id="batch"
                                name="batch"
                                value={formData.batch}
                                onChange={handleChange}
                                required
                                disabled={isBatchDisabled}
                                className={`mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md border ${isBatchDisabled ? 'bg-gray-50 cursor-not-allowed' : ''}`}
                            >
                                {isBatchDisabled && <option>{batches[0]}</option>}
                                {!isBatchDisabled && <option>{batches[0]}</option>}
                                {availableBatches.map(b => <option key={b}>{b}</option>)}
                            </select>
                            {isBatchDisabled && (
                                <p className="mt-1 text-xs text-orange-500">Please select a class first</p>
                            )}
                        </div>
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 required-asterisk">Message *</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="4"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Enter your notice message here..."
                            required
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-green-500 focus:border-green-500 sm:text-sm"
                        ></textarea>
                        <p className="mt-1 text-xs text-gray-500">The first line will be used as the notice title. Press Enter to start a new paragraph.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="startDate" className="block text-sm font-medium text-gray-700 required-asterisk">Start Date *</label>
                            <div className="mt-1 relative rounded-md shadow-sm">
                                <input
                                    type="text"
                                    id="startDate"
                                    name="startDate"
                                    value={formData.startDate}
                                    onChange={handleChange}
                                    placeholder="mm/dd/yyyy"
                                    required
                                    className="block w-full border border-gray-300 rounded-md p-2 pl-3 pr-10 focus:ring-green-500 focus:border-green-500 sm:text-sm"
                                />
                                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                    <CalendarIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                </div>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="endDate" className="block text-sm font-medium text-gray-700 required-asterisk">End Date *</label>
                            <div className="mt-1 relative rounded-md shadow-sm">
                                <input
                                    type="text"
                                    id="endDate"
                                    name="endDate"
                                    value={formData.endDate}
                                    onChange={handleChange}
                                    placeholder="mm/dd/yyyy"
                                    required
                                    className="block w-full border border-gray-300 rounded-md p-2 pl-3 pr-10 focus:ring-green-500 focus:border-green-500 sm:text-sm"
                                />
                                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                    <CalendarIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                </div>
                            </div>
                        </div>
                    </div>
                </form>

                <div className="p-5 border-t bg-gray-50 rounded-b-lg flex justify-end space-x-3">
                    <button
                        type="button"
                        onClick={onClose}
                        className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        onClick={handleSubmit}
                        className="px-4 py-2 text-sm font-medium text-white bg-green-600 border border-transparent rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                    >
                        Post Notice
                    </button>
                </div>
            </div>
        </div>
    );
};

// ** Notice Card Component for the List **
const NoticeCard = ({ notice }) => {
    const statusColor = notice.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800';

    return (
        <div className="bg-white p-4 rounded-md shadow hover:shadow-md transition duration-150 border-l-4 border-green-500">
            <div className="flex justify-between items-start">
                <h4 className="text-lg font-semibold text-gray-900">{notice.title}</h4>
                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${statusColor}`}>
                    {notice.status}
                </span>
            </div>
            <p className="mt-1 text-sm text-gray-600 line-clamp-2">{notice.content}</p>
            <div className="mt-3 flex justify-between text-xs text-gray-500">
                <span>
                    <span className="font-medium">Branch:</span> {notice.branch}
                </span>
                <span>
                    <span className="font-medium">Class:</span> {notice.class}
                </span>
                <span>
                    <span className="font-medium">Valid Till:</span> {notice.endDate}
                </span>
            </div>
        </div>
    );
};

const Notice = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [notices, setNotices] = useState(defaultNotices);

    const hasNotices = notices.length > 0;

    return (
        <div className="p-6 bg-gray-100 min-h-screen">

            <header className="bg-white p-4 rounded-md shadow-md mb-6 flex flex-wrap items-center justify-between">

                <div className="flex flex-wrap items-center space-x-2">
                    <label htmlFor="branch-filter" className="sr-only">Branch</label>
                    <select id="branch-filter" className="border-gray-300 rounded-md shadow-sm text-sm focus:ring-green-500 focus:border-green-500 p-2">
                        {branches.map(b => <option key={b}>{b.startsWith('Select') ? 'All Branches' : b}</option>)}
                    </select>

                    <label htmlFor="class-filter" className="sr-only">Class</label>
                    <select id="class-filter" className="border-gray-300 rounded-md shadow-sm text-sm focus:ring-green-500 focus:border-green-500 p-2">
                        {classes.map(c => <option key={c}>{c.startsWith('Select') ? 'All Classes' : c}</option>)}
                    </select>

                    <label htmlFor="batch-filter" className="sr-only">Batch</label>
                    <select id="batch-filter" className="border-gray-300 rounded-md shadow-sm text-sm focus:ring-green-500 focus:border-green-500 p-2">
                        {batches.map(b => <option key={b}>{b.startsWith('Select') ? 'All Batches' : b}</option>)}
                    </select>

                    <label htmlFor="status-filter" className="sr-only">Status</label>
                    <select id="status-filter" className="border-green-600 bg-green-50 text-green-700 rounded-md shadow-sm text-sm focus:ring-green-500 focus:border-green-500 p-2">
                        {statuses.map(s => <option key={s}>{s}</option>)}
                    </select>
                </div>

                <div className="flex items-center mt-3 md:mt-0 space-x-3">

                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search by title or content..."
                            className="w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
                        />
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                            <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
                        </div>
                    </div>

                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 whitespace-nowrap"
                    >
                        <PlusCircleIcon className="h-5 w-5 mr-2" />
                        Add Notice
                    </button>
                </div>
            </header>

            <div className="bg-white p-6 rounded-md shadow-md">
                {hasNotices ? (
                    <div className="grid gap-6">
                        {notices.map(notice => (
                            <NoticeCard key={notice.id} notice={notice} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center flex flex-col items-center justify-center min-h-[40vh]">
                        <BellIcon className="h-12 w-12 text-gray-400" />
                        <p className="mt-4 text-lg font-medium text-gray-700">No notices found</p>
                        <p className="text-sm text-gray-500">No notices available.</p>
                    </div>
                )}
            </div>

            <AddNoticeModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </div>
    );
};

export default Notice;