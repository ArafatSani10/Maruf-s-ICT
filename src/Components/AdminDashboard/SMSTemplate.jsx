import React, { useState } from 'react';

const DUMMY_TEMPLATES = [
    // {
    //     id: 1,
    //     name: 'Welcome Message',
    //     content: 'Dear {{student_name}}, welcome to {{batch_name}}. Class starts on {{date}} at {{time}}.',
    //     variables: 4,
    //     lastUpdated: '2025-11-20',
    // },
    // {
    //     id: 2,
    //     name: 'Fee Reminder',
    //     content: 'Hello {{student_name}}, please pay your fee soon.',
    //     variables: 1,
    //     lastUpdated: '2025-11-15',
    // },
    // {
    //     id: 3,
    //     name: 'Exam Schedule',
    //     content: 'Your exam for {{batch_name}} will be held on {{date}}.',
    //     variables: 2,
    //     lastUpdated: '2025-11-10',
    // },
];


const NewSMSTemplateModal = ({ isOpen, onClose }) => {
    const [templateData, setTemplateData] = useState({
        name: '',
        content: '',
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setTemplateData(prev => ({
            ...prev,
            [id]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // ব্যাকএন্ডে ডেটা পাঠানোর লজিক এখানে যুক্ত করুন
        console.log('Template Data to be submitted:', templateData); 
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-lg">
                <div className="flex justify-between items-center p-5 border-b border-gray-200">
                    <h2 className="text-xl font-semibold text-gray-800">New SMS Template</h2>
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                    </button>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="p-5 space-y-5">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 after:content-['*'] after:ml-0.5 after:text-red-500">Template Name</label>
                            <input
                                type="text"
                                id="name"
                                value={templateData.name}
                                onChange={handleChange}
                                placeholder="e.g., Welcome Message"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                            />
                        </div>

                        <div>
                            <label htmlFor="content" className="block text-sm font-medium text-gray-700 after:content-['*'] after:ml-0.5 after:text-red-500">Template Content</label>
                            <textarea
                                id="content"
                                rows="4"
                                value={templateData.content}
                                onChange={handleChange}
                                placeholder="Enter your SMS template content here..."
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm resize-none"
                            ></textarea>
                        </div>

                        <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
                            <p className="text-sm font-semibold text-gray-700 mb-2">Available Variables:</p>
                            <div className="grid grid-cols-2 gap-2 text-xs">
                                <p>
                                    <code className="bg-gray-200 p-1 rounded text-gray-800">{'{{student_name}}'}</code> - Student's name
                                </p>
                                <p>
                                    <code className="bg-gray-200 p-1 rounded text-gray-800">{'{{batch_name}}'}</code> - Batch name
                                </p>
                                <p>
                                    <code className="bg-gray-200 p-1 rounded text-gray-800">{'{{date}}'}</code> - Current date
                                </p>
                                <p>
                                    <code className="bg-gray-200 p-1 rounded text-gray-800">{'{{time}}'}</code> - Current time
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-end items-center p-5 border-t border-gray-200 space-x-3">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 text-sm font-medium text-white bg-green-600 border border-transparent rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition duration-150 ease-in-out"
                        >
                            Add Template
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

const SMSTemplate = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    // টেমপ্লেট ডেটা ধরে রাখার জন্য স্টেট, শুরু হচ্ছে ডামি ডেটা দিয়ে
    const [templates, setTemplates] = useState(DUMMY_TEMPLATES); 
    // যদি কোনো টেমপ্লেট না দেখাতে চান, তবে setTemplates([]); করে দিন

    const handleAddTemplateClick = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const TemplateList = () => (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/4">
                            Template Name
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/2">
                            Template Content (Preview)
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Variables
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Last Updated
                        </th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {templates.map((template) => (
                        <tr key={template.id} className="hover:bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                {template.name}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 truncate max-w-xs">
                                {template.content}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                                    {template.variables}
                                </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {template.lastUpdated}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-2">
                                <button className="text-indigo-600 hover:text-indigo-900">Edit</button>
                                <button className="text-red-600 hover:text-red-900">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );

    const NoTemplateFound = () => (
        <div className="bg-white rounded-xl shadow-lg p-12 text-center border border-gray-200">
            <div className="inline-block p-4 bg-gray-100 rounded-full mb-4">
                <svg className="w-8 h-8 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mt-2">No templates found</h3>
            <p className="mt-1 text-sm text-gray-500">
                Get started by creating a new SMS template
            </p>
            <button
                onClick={handleAddTemplateClick}
                className="mt-6 flex items-center mx-auto px-4 py-2 bg-green-600 text-white font-medium rounded-lg shadow-md hover:bg-green-700 transition duration-150 ease-in-out text-sm"
            >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
                Add Template
            </button>
        </div>
    );

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <div className="mb-6 flex justify-end">
                <button
                    onClick={handleAddTemplateClick}
                    className="flex items-center px-4 py-2 bg-green-600 text-white font-medium rounded-lg shadow-md hover:bg-green-700 transition duration-150 ease-in-out text-sm"
                >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
                    Add Template
                </button>
            </div>
            
            <hr className="my-6 border-gray-200" />
            
            {/* কন্ডিশনাল রেন্ডারিং: যদি templates.length > 0 হয় তবে লিস্ট দেখাও, না হলে 'No Template Found' দেখাও */}
            {templates.length > 0 ? <TemplateList /> : <NoTemplateFound />}

            <NewSMSTemplateModal isOpen={isModalOpen} onClose={handleCloseModal} />
        </div>
    );
};

export default SMSTemplate;