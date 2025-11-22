import React, { useState } from 'react';
import {
    FiChevronDown,
    FiPlus,
    FiEdit,
    FiTrash2,
    FiX,
    FiUpload,
    FiShoppingCart,
    FiDollarSign,
    FiBarChart2,
    FiBookOpen,
    FiSearch
} from 'react-icons/fi';

// --- DUMMY DATA ---
const dummyBookData = [
    {
        id: 1,
        name: 'HSC Chemistry Guide',
        class: 'HSC',
        branch: 'Main Branch',
        price: 350,
        description: 'A complete guide for HSC chemistry syllabus...',
    },
];

const dummySaleData = [
    {
        id: 101,
        student: 'Apon Ali',
        book: 'HSC Physics',
        class: 'HSC',
        branch: 'Kushtia',
        price: 400,
        qty: 1,
        discount: 50,
        finalPrice: 350,
        date: 'Oct 25, 2025',
    },
];

const initialOptions = {
    branches: ['All Branches', 'Main Branch', 'Secondary Branch'],
    classes: ['All Classes', 'HSC', 'SSC', 'Admission'],
    books: ['All Books', 'HSC Chemistry', 'Admission Physics'],
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

const FilterDropdown = ({ options, value, onChange }) => (
    <div className="relative inline-block text-left mr-3 min-w-[150px]">
        <SelectField
            label=""
            options={options}
            value={value}
            onChange={onChange}
        />
    </div>
);

// --- 1. BOOKS MANAGEMENT TAB COMPONENTS ---

const BookRow = ({ book }) => (
    <tr className="hover:bg-gray-50">
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{book.name}</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{book.class}</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{book.branch}</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{book.price} TK</td>
        <td className="px-6 py-4 text-sm text-gray-500 max-w-xs truncate">{book.description}</td>
        <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
            <div className="flex items-center justify-center space-x-2">
                <button title="Edit"><FiEdit className="w-5 h-5 text-yellow-600 hover:text-yellow-800" /></button>
                <button title="Delete"><FiTrash2 className="w-5 h-5 text-red-500 hover:text-red-700" /></button>
            </div>
        </td>
    </tr>
);

const BookTable = ({ books }) => (
    <div className="overflow-x-auto bg-white rounded-lg shadow-md border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50 text-xs font-semibold uppercase tracking-wider text-gray-500">
                <tr>
                    <th scope="col" className="px-6 py-3 text-left">BOOK NAME</th>
                    <th scope="col" className="px-6 py-3 text-left">CLASS</th>
                    <th scope="col" className="px-6 py-3 text-left">BRANCH</th>
                    <th scope="col" className="px-6 py-3 text-left">PRICE</th>
                    <th scope="col" className="px-6 py-3 text-left">DESCRIPTION</th>
                    <th scope="col" className="px-6 py-3 text-center">ACTIONS</th>
                </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
                {books.map((book) => (
                    <BookRow key={book.id} book={book} />
                ))}
            </tbody>
        </table>
    </div>
);

const AddBookModal = ({ isOpen, onClose, options }) => {
    if (!isOpen) return null;

    const InputField = ({ label, type = 'text', rows, placeholder }) => (
        <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
            {type === 'textarea' ? (
                <textarea
                    rows={rows}
                    placeholder={placeholder}
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                />
            ) : (
                <input
                    type={type}
                    placeholder={placeholder}
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                />
            )}
        </div>
    );

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50 flex justify-center items-center">
            <div className="relative bg-white rounded-lg shadow-xl w-full max-w-lg mx-4 p-6">

                <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                    <h3 className="text-xl font-semibold text-gray-900">Add New Book</h3>
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition duration-150">
                        <FiX className="w-6 h-6" />
                    </button>
                </div>

                <form className="mt-4">

                    <div className="grid grid-cols-2 gap-4">
                        <SelectField label="Select Class" options={options.classes.slice(1)} />
                        <SelectField label="Select Branch" options={options.branches.slice(1)} />
                    </div>

                    <InputField label="Book Name" placeholder="Enter book name" />
                    <InputField label="Price" type="number" placeholder="Enter price (e.g., 350)" />
                    <InputField label="Description" type="textarea" rows="3" placeholder="Enter book description" />

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Book Image</label>
                        <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md cursor-pointer hover:border-blue-400 transition duration-150">
                            <div className="space-y-1 text-center">
                                <FiUpload className="mx-auto h-8 w-8 text-gray-400" />
                                <div className="flex text-sm text-gray-600">
                                    <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500">
                                        <span>Upload a file</span>
                                        <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                                    </label>
                                    <p className="pl-1">or drag and drop</p>
                                </div>
                                <p className="text-xs text-gray-500">PNG, JPG, GIF up to 5MB</p>
                            </div>
                        </div>
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
                            Save Book
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

const BooksManagement = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedFilters, setSelectedFilters] = useState({
        branch: initialOptions.branches[0],
        class: initialOptions.classes[0],
    });

    const handleFilterChange = (name) => (event) => {
        setSelectedFilters(prev => ({
            ...prev,
            [name]: event.target.value,
        }));
    };

    return (
        <div className="">

            <div className="bg-white p-4 rounded-lg shadow-md mb-6 flex justify-between items-center">

                <div className="flex items-center space-x-3">
                    <FilterDropdown
                        options={initialOptions.branches}
                        value={selectedFilters.branch}
                        onChange={handleFilterChange('branch')}
                    />
                    <FilterDropdown
                        options={initialOptions.classes}
                        value={selectedFilters.class}
                        onChange={handleFilterChange('class')}
                    />
                </div>

                <button
                    onClick={() => setIsModalOpen(true)}
                    className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 font-medium flex items-center"
                >
                    <FiPlus className="w-5 h-5 mr-1" />
                    Add Books
                </button>
            </div>

            <BookTable books={dummyBookData} />

            <AddBookModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                options={initialOptions}
            />
        </div>
    );
};

// --- 2. BOOK SALES TAB COMPONENTS ---

const StatCard = ({ title, value, colorClass, icon: Icon }) => (
    <div className={`p-4 rounded-lg shadow-md flex items-center justify-between ${colorClass} min-h-[100px] w-full`}>
        <div>
            <div className="text-sm font-medium text-white opacity-90">{title}</div>
            <div className="text-3xl font-bold text-white mt-1">{value}</div>
        </div>
        <Icon className="w-8 h-8 text-white opacity-50" />
    </div>
);

const SaleRow = ({ sale }) => (
    <tr className="hover:bg-gray-50">
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{sale.student}</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{sale.book}</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{sale.class}</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{sale.branch}</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{sale.price}</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{sale.qty}</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-red-500">{sale.discount}</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-green-700">{sale.finalPrice}</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{sale.date}</td>
        <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
            <div className="flex items-center justify-center space-x-2">
                <button title="Edit"><FiEdit className="w-5 h-5 text-yellow-600 hover:text-yellow-800" /></button>
                <button title="Delete"><FiTrash2 className="w-5 h-5 text-red-500 hover:text-red-700" /></button>
            </div>
        </td>
    </tr>
);

const SalesTable = ({ sales }) => (
    <div className="overflow-x-auto bg-white rounded-lg shadow-md border border-gray-200 mt-4">
        <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50 text-xs font-semibold uppercase tracking-wider text-gray-500">
                <tr>
                    <th scope="col" className="px-6 py-3 text-left">STUDENT</th>
                    <th scope="col" className="px-6 py-3 text-left">BOOK</th>
                    <th scope="col" className="px-6 py-3 text-left">CLASS</th>
                    <th scope="col" className="px-6 py-3 text-left">BRANCH</th>
                    <th scope="col" className="px-6 py-3 text-left">PRICE</th>
                    <th scope="col" className="px-6 py-3 text-left">QTY</th>
                    <th scope="col" className="px-6 py-3 text-left">DISCOUNT</th>
                    <th scope="col" className="px-6 py-3 text-left">FINAL PRICE</th>
                    <th scope="col" className="px-6 py-3 text-left">DATE</th>
                    <th scope="col" className="px-6 py-3 text-center">ACTIONS</th>
                </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
                {sales.length > 0 ? (
                    sales.map((sale) => <SaleRow key={sale.id} sale={sale} />)
                ) : (
                    <tr>
                        <td colSpan="10" className="px-6 py-12 text-center text-gray-500">
                            <FiShoppingCart className="mx-auto w-10 h-10 text-gray-400 mb-2" />
                            No sales recorded
                            <p className="text-sm mt-1">Get started by recording your first book sale.</p>
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
    </div>
);

const RecordSaleModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const InputField = ({ label, type = 'text', placeholder, icon: Icon }) => (
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
                    <h3 className="text-xl font-semibold text-gray-900">Record Book Sale</h3>
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition duration-150">
                        <FiX className="w-6 h-6" />
                    </button>
                </div>

                <form className="mt-4">

                    <InputField label="Student Name / ID" placeholder="Search student name or ID" />

                    <div className="grid grid-cols-2 gap-4">
                        <SelectField label="Select Class" options={initialOptions.classes.slice(1)} />
                        <SelectField label="Select Branch" options={initialOptions.branches.slice(1)} />
                    </div>

                    <SelectField label="Select Book" options={initialOptions.books.slice(1)} />

                    <div className="grid grid-cols-3 gap-4">
                        <InputField label="Price (BDT)" type="number" placeholder="400" />
                        <InputField label="Quantity" type="number" placeholder="1" />
                        <InputField label="Discount (BDT)" type="number" placeholder="0" />
                    </div>

                    <div className="mt-4 p-3 bg-blue-50 rounded-md">
                        <div className="text-lg font-bold text-blue-800">Final Price: BDT 400</div>
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
                            Confirm Sale
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};


const BookSales = ({ salesData }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedFilters, setSelectedFilters] = useState({
        class: initialOptions.classes[0],
        branch: initialOptions.branches[0],
        book: initialOptions.books[0],
    });

    const handleFilterChange = (name) => (event) => {
        setSelectedFilters(prev => ({
            ...prev,
            [name]: event.target.value,
        }));
    };

    const totalSales = salesData.length;
    const totalIncome = salesData.reduce((sum, sale) => sum + sale.finalPrice, 0);
    const totalDiscount = salesData.reduce((sum, sale) => sum + sale.discount, 0);
    const totalBooks = salesData.reduce((sum, sale) => sum + sale.qty, 0);

    // API INTEGRATION SYSTEM: Sales data would be fetched here using useEffect and updated based on selectedFilters

    return (
        <div className="">

            {/* Stat Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <StatCard title="Total Sales" value={totalSales} colorClass="bg-blue-600" icon={FiShoppingCart} />
                <StatCard title="Total Income" value={`BDT ${totalIncome}`} colorClass="bg-green-600" icon={FiDollarSign} />
                <StatCard title="Total Discount" value={`BDT ${totalDiscount}`} colorClass="bg-purple-600" icon={FiBarChart2} />
                <StatCard title="Total Books" value={totalBooks} colorClass="bg-orange-600" icon={FiBookOpen} />
            </div>

            {/* Filters and Search */}
            <div className="bg-white p-4 rounded-lg shadow-md mb-6 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                    <FilterDropdown options={initialOptions.classes} onChange={handleFilterChange('class')} value={selectedFilters.class} />
                    <FilterDropdown options={initialOptions.branches} onChange={handleFilterChange('branch')} value={selectedFilters.branch} />
                    <FilterDropdown options={initialOptions.books} onChange={handleFilterChange('book')} value={selectedFilters.book} />

                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search by student name or ID"
                            className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 min-w-[250px]"
                        />
                        <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    </div>
                </div>

                <button
                    onClick={() => setIsModalOpen(true)}
                    className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 font-medium flex items-center"
                >
                    <FiPlus className="w-5 h-5 mr-1" />
                    Record Sale
                </button>
            </div>

            <SalesTable sales={salesData} />

            <RecordSaleModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    );
};

// --- MAIN BOOKS COMPONENT WITH TABS ---

const Books = () => {
    const [activeTab, setActiveTab] = useState('management');

    return (
        <div className="bg-gray-50 min-h-screen">

            {/* Tabs */}
            <div className="bg-white px-4 pt-4 shadow-sm border-b border-gray-200">
                <div className="flex space-x-6 text-lg font-medium">
                    <button
                        onClick={() => setActiveTab('management')}
                        className={`flex items-center pb-3 transition duration-150 ${activeTab === 'management'
                            ? 'text-blue-600 border-b-2 border-blue-600'
                            : 'text-gray-500 hover:text-gray-700 border-b-2 border-transparent'
                            }`}
                    >
                        <FiBookOpen className="w-5 h-5 mr-2" />
                        Books Management
                    </button>
                    <button
                        onClick={() => setActiveTab('sales')}
                        className={`flex items-center pb-3 transition duration-150 ${activeTab === 'sales'
                            ? 'text-green-600 border-b-2 border-green-600'
                            : 'text-gray-500 hover:text-gray-700 border-b-2 border-transparent'
                            }`}
                    >
                        <FiDollarSign className="w-5 h-5 mr-2" />
                        Book Sales
                    </button>
                </div>
            </div>

            {/* Content */}
            <div className="p-4">
                {activeTab === 'management' ? (
                    <BooksManagement />
                ) : (
                    <BookSales salesData={dummySaleData} />
                )}
            </div>

        </div>
    );
};

export default Books;