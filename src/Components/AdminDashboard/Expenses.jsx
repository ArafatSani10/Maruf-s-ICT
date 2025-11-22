import React, { useState } from 'react';
import {
    FiSearch,
    FiCalendar,
    FiPlus,
    FiEdit,
    FiTrash2,
    FiFileText,
    FiBarChart,
    FiTag,
    FiDollarSign,
    FiX,
    FiUpload,
    FiChevronDown
} from 'react-icons/fi';

// DUMMY DATA 
const dummyExpenseData = [
    // Ideally, this array would be fetched from an API
];

const initialOptions = {
    categories: ['Select Category', 'Salary', 'Rent', 'Utility Bills', 'Book Purchase', 'Marketing'],
};

// --- COMMON COMPONENTS ---

const SelectField = ({ label, options, value, onChange }) => (
    <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
        <div className="relative">
            <select
                value={value}
                onChange={onChange}
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

// --- STAT CARD COMPONENT ---

const StatCard = ({ title, value, icon: Icon, iconBgClass }) => (
    <div className="bg-white p-4 rounded-lg shadow-md flex items-center justify-between min-h-[100px] w-full border border-gray-200">
        <div className="flex flex-col">
            <div className="text-sm font-medium text-gray-500">{title}</div>
            <div className="text-2xl font-bold text-gray-900 mt-1">{value}</div>
        </div>
        <div className={`p-3 rounded-full ${iconBgClass}`}>
            <Icon className="w-5 h-5 text-white" />
        </div>
    </div>
);

// --- EXPENSE TABLE COMPONENTS ---

const ExpenseRow = ({ expense }) => (
    <tr className="hover:bg-gray-50">
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{expense.date}</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{expense.category}</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-red-600">{expense.amount} BDT</td>
        <td className="px-6 py-4 text-sm text-gray-500 max-w-xs truncate">{expense.description}</td>
        <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
            <div className="flex items-center justify-center space-x-2">
                <button title="Edit"><FiEdit className="w-5 h-5 text-yellow-600 hover:text-yellow-800" /></button>
                <button title="Delete"><FiTrash2 className="w-5 h-5 text-red-500 hover:text-red-700" /></button>
            </div>
        </td>
    </tr>
);

const ExpenseTable = ({ expenses }) => (
    <div className="overflow-x-auto bg-white rounded-lg shadow-md border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50 text-xs font-semibold uppercase tracking-wider text-gray-500">
                <tr>
                    <th scope="col" className="px-6 py-3 text-left">DATE</th>
                    <th scope="col" className="px-6 py-3 text-left">CATEGORY</th>
                    <th scope="col" className="px-6 py-3 text-left">AMOUNT</th>
                    <th scope="col" className="px-6 py-3 text-left">DESCRIPTION</th>
                    <th scope="col" className="px-6 py-3 text-center">ACTIONS</th>
                </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
                {expenses.length > 0 ? (
                    expenses.map((expense) => <ExpenseRow key={expense.id} expense={expense} />)
                ) : (
                    <tr>
                        <td colSpan="5" className="px-6 py-12 text-center text-gray-500 border-t-0">
                            <FiFileText className="mx-auto w-10 h-10 text-gray-400 mb-2" />
                            No expenses found
                            <p className="text-sm mt-1">Get started by adding your first expense.</p>
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
    </div>
);

// --- ADD EXPENSE MODAL ---

const AddExpenseModal = ({ isOpen, onClose, options }) => {
    if (!isOpen) return null;

    const InputField = ({ label, type = 'text', placeholder }) => (
        <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
            <input
                type={type}
                placeholder={placeholder}
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
            />
        </div>
    );

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50 flex justify-center items-center">
            <div className="relative bg-white rounded-lg shadow-xl w-full max-w-lg mx-4 p-6">

                <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                    <h3 className="text-xl font-semibold text-gray-900">Add New Expense</h3>
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition duration-150">
                        <FiX className="w-6 h-6" />
                    </button>
                </div>

                <form className="mt-4">

                    <div className="grid grid-cols-2 gap-4">
                        <InputField label="Amount (BDT)" type="number" placeholder="e.g., 5000" />
                        <InputField label="Date" type="date" defaultValue={new Date().toISOString().slice(0, 10)} />
                    </div>

                    <SelectField label="Category" options={options.categories} />

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                        <textarea
                            rows="3"
                            placeholder="Enter a brief description (e.g., September month salary)"
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
                            className="px-4 py-2 bg-green-600 text-white rounded-md text-sm font-medium hover:bg-green-700"
                        >
                            Save Expense
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

// --- MAIN EXPENSES COMPONENT ---

const Expenses = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [expenses, setExpenses] = useState(dummyExpenseData);

    // API Integration Logic for Calculations
    const totalExpenses = expenses.reduce((sum, item) => sum + item.amount, 0);
    const totalRecords = expenses.length;
    const averageAmount = totalRecords > 0 ? (totalExpenses / totalRecords).toFixed(2) : 0;
    const categoriesCount = new Set(expenses.map(e => e.category)).size;

    // Temporary dummy values for presentation, replace with calculated values
    const displayTotalExpenses = '0';
    const displayTotalRecords = '0';
    const displayAverageAmount = '0';
    const displayCategories = '0';

    // API Integration Logic for Filters/Search
    const handleFilterChange = () => {
        // TODO: Implement API call to fetch expenses based on search term and dates
        console.log("Fetching expenses based on filters...");
    };

    // API Integration System for Data Retrieval
    // useEffect(() => {
    //   fetchExpenseData().then(data => setExpenses(data));
    // }, []);

    return (
        <div className=" bg-gray-50 min-h-screen">

            {/* Stat Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <StatCard
                    title="Total Expenses"
                    value={`৳${displayTotalExpenses}`}
                    icon={FiDollarSign}
                    iconBgClass="bg-green-400"
                />
                <StatCard
                    title="Total Records"
                    value={displayTotalRecords}
                    icon={FiFileText}
                    iconBgClass="bg-blue-400"
                />
                <StatCard
                    title="Average Amount"
                    value={`৳${displayAverageAmount}`}
                    icon={FiBarChart}
                    iconBgClass="bg-purple-400"
                />
                <StatCard
                    title="Categories"
                    value={displayCategories}
                    icon={FiTag}
                    iconBgClass="bg-orange-400"
                />
            </div>

            {/* Expense List and Filters/Action */}
            <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Expense List</h3>

                <div className="flex items-center space-x-3 mb-6">

                    <div className="relative flex-1 max-w-sm">
                        <input
                            type="text"
                            placeholder="Search expenses..."
                            onChange={handleFilterChange}
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        />
                        <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    </div>

                    <div className="relative">
                        <input
                            type="date"
                            placeholder="Start Date"
                            className="pl-8 pr-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 min-w-[140px]"
                        />
                        <FiCalendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                    </div>

                    <span className="text-gray-500">to</span>

                    <div className="relative">
                        <input
                            type="date"
                            placeholder="End Date"
                            className="pl-8 pr-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 min-w-[140px]"
                        />
                        <FiCalendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                    </div>

                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 font-medium flex items-center"
                    >
                        <FiPlus className="w-5 h-5 mr-1" />
                        Add Expense
                    </button>
                </div>

                <ExpenseTable expenses={expenses} />
            </div>

            <AddExpenseModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                options={initialOptions}
            />

        </div>
    );
};

export default Expenses;