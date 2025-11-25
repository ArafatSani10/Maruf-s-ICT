import React, { useState } from 'react';
import { MagnifyingGlassIcon, UserCircleIcon, ArrowDownTrayIcon, XMarkIcon, UserIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';

const institutionInfo = {
    name: "M@RUF'S ICT CARE",
    address: "Modern Clinic Lane, Hospital Rd, Talpara, Kushtia",
    phone: "01733618224",
    website: "marufsictcare.vercel.app"
};

// Default Student Data (For successful search)
const studentData = {
    name: "Arafat Rahman Sani", // Updated to Arafat Rahman Sani for ID Card matching
    studentId: "804282",
    class: "HSC",
    phone: "01963888482", // Updated phone number
    session: "2020",
    doi: "4/20/2020",
    branch: "Kushtia Branch",
    batch: "Sat-9am",
    avatar: "https://via.placeholder.com/150/f3f4f6/374151?text=A"
};

// ** Logo Component (Mockup) **
const Logo = () => (
    <div className="h-8 w-8 bg-white rounded-full border border-gray-200 flex items-center justify-center">
        {/* Replace this div with your actual Logo/Image component */}
        <UserIcon className="h-5 w-5 text-red-700" />
    </div>
);

// ** ID Card Front Component (Image 883365.png Match) **
const IDCardFront = ({ student, institution }) => {
    return (
        <div className="w-96 h-56 bg-white border border-gray-300 shadow-xl overflow-hidden relative rounded-lg transform transition-all hover:scale-[1.02] duration-300">
            
            {/* Header Red Strip */}
            <div className="bg-red-700 h-14 flex items-center p-4">
                <div className="h-10 w-10 bg-white rounded-full border-2 border-white flex items-center justify-center">
                    <UserIcon className="h-6 w-6 text-red-700" /> {/* Logo Placeholder */}
                </div>
                <h2 className="text-white text-lg font-extrabold ml-3 tracking-wider">{institution.name}</h2>
            </div>

            <div className="p-4 pt-2 flex items-start space-x-4">
                
                {/* Left Side: Avatar & Details (Updated Layout to match image_883365.png) */}
                <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded-full border border-gray-300 flex items-center justify-center -mt-2">
                    <UserCircleIcon className="h-12 w-12 text-gray-500" />
                </div>
                
                {/* Center: Main Info */}
                <div className="flex-1 text-sm pt-1 space-y-0.5">
                    <h3 className="font-bold text-gray-900 uppercase leading-snug text-base">{student.name}</h3>
                    <p className="text-xs text-red-700"><span className="font-bold">ID:</span> {student.studentId}</p>
                    <p className="text-xs text-red-700"><span className="font-bold">Class:</span> {student.class}</p>
                    <p className="text-xs text-red-700"><span className="font-bold">Phone:</span> {student.phone}</p>
                </div>

                {/* Right: QR Code (Matching Screenshot Layout) */}
                <div className="flex-shrink-0 w-16 h-16 border border-gray-400 flex items-center justify-center text-[10px] bg-white shadow-sm font-medium text-gray-600">
                    QR Scan
                </div>
            </div>
            
            {/* Bottom Details (Positioned carefully) */}
            <div className="absolute bottom-4 left-4 text-xs space-y-0.5 font-medium text-gray-800">
                <p>Session: {student.session}</p>
                <p>DOI: {student.doi}</p>
                <p>Branch: {student.branch}</p>
                <p>Batch: {student.batch}</p>
            </div>

             <div className="absolute bottom-0 left-0 right-0 h-4 bg-gray-100 border-t border-gray-200"></div>
        </div>
    );
};

// ** ID Card Back Component (Minimal changes) **
const IDCardBack = ({ institution }) => {
    const rules = [
        "Always carry while on campus",
        "Report if lost or damaged",
        "Not transferable",
        "Valid with signature only"
    ];

    return (
        <div className="w-96 h-56 bg-white border border-gray-300 shadow-xl overflow-hidden relative rounded-lg transform transition-all hover:scale-[1.02] duration-300">
            
            <div className="p-4 flex flex-col items-center text-center">
                <div className="h-8 w-8 bg-white rounded-full border border-gray-300 mb-2">
                    <UserIcon className="h-5 w-5 text-red-700" />
                </div>
                <h2 className="text-red-700 text-lg font-bold">{institution.name}</h2>
                <p className="text-xs text-gray-600 mt-1">{institution.address}</p>
                <p className="text-xs text-gray-600">Phone: {institution.phone}</p>
                
                <h3 className="text-sm font-bold text-gray-800 mt-3 border-t border-gray-200 pt-2">ID CARD RULES</h3>
                <ul className="list-disc list-inside text-xs text-left text-gray-700 mt-2 space-y-0.5 max-w-xs">
                    {rules.map((rule, index) => (
                        <li key={index} className="text-[10px] text-gray-700">{rule}</li>
                    ))}
                </ul>
            </div>

            <div className="absolute bottom-0 left-0 right-0 bg-red-700 h-8 flex items-center justify-center">
                <p className="text-white text-sm font-medium">{institution.website}</p>
            </div>
        </div>
    );
};

// ** Step 3: ID Card Preview Modal (Modernized) **
const IDCardPreviewModal = ({ student, institution, onClose }) => {
    return (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-70 backdrop-blur-sm flex items-center justify-center z-50 p-4 transition-opacity duration-300">
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-5xl max-h-[95vh] overflow-hidden flex flex-col transform transition-transform duration-300 scale-100">
                
                <div className="p-4 border-b flex justify-between items-center bg-gray-50">
                    <h3 className="text-xl font-bold text-gray-800 flex items-center">
                        <UserIcon className="h-6 w-6 text-green-600 mr-2" />
                        ID Card Preview
                    </h3>
                    <div className="flex items-center space-x-3">
                        <button className="flex items-center px-4 py-2 text-sm font-medium text-white bg-green-600 border border-transparent rounded-lg shadow-md hover:bg-green-700 transition duration-150">
                            <ArrowDownTrayIcon className="h-5 w-5 mr-2" />
                            Download PDF
                        </button>
                        <button onClick={onClose} className="text-gray-400 hover:text-gray-700 p-1 rounded-full bg-white hover:bg-gray-100 transition duration-150">
                            <XMarkIcon className="h-6 w-6" />
                        </button>
                    </div>
                </div>

                <div className="flex-1 p-10 overflow-y-auto bg-gray-100 flex flex-col items-center space-y-12">
                    
                    <div className="flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-20 items-center">
                        <div className="text-gray-500 text-sm font-bold w-16 text-center">FRONT</div>
                        <IDCardFront student={student} institution={institution} />
                    </div>

                    <div className="flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-20 items-center">
                        <div className="text-gray-500 text-sm font-bold w-16 text-center">BACK</div>
                        <IDCardBack institution={institution} />
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

// ** Main ID Card Generator Page Component **
const IDCard = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [foundStudent, setFoundStudent] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [searchError, setSearchError] = useState(false);

    const handleSearch = () => {
        const query = searchQuery.trim();
        setSearchError(false); 
        
        // Match logic: Check for the exact phone number OR the full name (case-insensitive)
        if (query === studentData.phone || query.toLowerCase() === studentData.name.toLowerCase()) {
            setFoundStudent(studentData);
        } else {
            setFoundStudent(null);
            setSearchError(true); 
        }
    };

    const handleGenerateCard = () => {
        if (foundStudent) {
            setIsModalOpen(true);
        }
    };

    const handleClearSearch = () => {
        setFoundStudent(null);
        setSearchQuery('');
        setSearchError(false);
    };

    return (
        <div className="p-8 bg-gray-50 min-h-screen">
            
            <header className="text-3xl font-extrabold text-gray-800 mb-8 border-b pb-2">
                ID Card Generation System
            </header>

            {/* Step 1: Search Section (Modern Style) */}
            <div className="bg-white p-6 rounded-xl shadow-lg mb-8 border border-gray-200">
                <p className="text-base font-semibold text-gray-700 mb-4">Search Student by Phone Number or Name</p>
                
                <div className="flex flex-col md:flex-row items-stretch md:items-center space-y-3 md:space-y-0 md:space-x-4">
                    <div className="relative flex-grow">
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => {
                                setSearchQuery(e.target.value);
                                setFoundStudent(null); 
                                setSearchError(false);
                            }}
                            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                            placeholder="Enter phone number or student name..."
                            className={`w-full pl-12 pr-4 py-3.5 border-2 rounded-xl shadow-sm sm:text-lg transition-all duration-200 
                                ${searchError ? 'border-red-500 focus:ring-red-500' : 
                                foundStudent ? 'border-blue-500 focus:ring-blue-500' : 'border-gray-300 focus:ring-green-500 focus:border-green-500'}
                            `}
                        />
                        <MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        
                        {foundStudent && (
                            <button onClick={handleClearSearch} className="absolute right-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-500 hover:text-gray-800 transition duration-150">
                                <XMarkIcon />
                            </button>
                        )}
                    </div>
                    
                    <button
                        onClick={handleSearch}
                        className="flex items-center justify-center px-8 py-3.5 border border-transparent rounded-xl shadow-md text-lg font-semibold text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-green-500 transition duration-150 whitespace-nowrap"
                    >
                        <MagnifyingGlassIcon className="h-5 w-5 mr-2" />
                        Search
                    </button>
                </div>

                {searchError && (
                    <p className="mt-3 text-red-600 font-medium flex items-center">
                        <XMarkIcon className="h-5 w-5 mr-2" />
                        No student found with this Phone Number or Name. Please try again.
                    </p>
                )}
            </div>

            {/* Step 2: Student Information Display (Found) */}
            {foundStudent ? (
                <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-green-500">
                    <h3 className="text-xl font-bold text-gray-800 mb-6 pb-2 border-b">Student Information</h3>
                    
                    <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-12 items-start">
                        <div className="flex-shrink-0 w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center">
                            <UserCircleIcon className="h-20 w-20 text-gray-500" />
                        </div>
                        
                        <div className="grid grid-cols-2 gap-x-16 gap-y-4 text-base flex-grow">
                            
                            <div>
                                <p className="text-xs text-gray-500 uppercase font-semibold">Student Name</p>
                                <p className="font-extrabold text-gray-900 mt-1">{foundStudent.name}</p>
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 uppercase font-semibold">Student ID</p>
                                <p className="font-extrabold text-green-600 mt-1">{foundStudent.studentId}</p>
                            </div>
                            
                            <div>
                                <p className="text-xs text-gray-500 uppercase font-semibold">Class</p>
                                <p className="font-semibold text-gray-900 mt-1">{foundStudent.class}</p>
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 uppercase font-semibold">Phone</p>
                                <p className="font-semibold text-gray-900 mt-1">{foundStudent.phone}</p>
                            </div>

                            <div>
                                <p className="text-xs text-gray-500 uppercase font-semibold">Institution</p>
                                <p className="font-semibold text-gray-900 mt-1">{institutionInfo.name}</p>
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 uppercase font-semibold">Batch</p>
                                <p className="font-semibold text-gray-900 mt-1">{foundStudent.batch}</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-10">
                        <button
                            onClick={handleGenerateCard}
                            className="flex items-center px-8 py-3 border border-transparent rounded-xl shadow-lg text-lg font-semibold text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-red-500 transition duration-150"
                        >
                            <UserIcon className="h-6 w-6 mr-2" />
                            Generate ID Card
                        </button>
                    </div>
                </div>
            ) : (
                <div className="bg-white p-12 rounded-xl shadow-lg text-center border border-gray-200">
                    <ArrowLeftIcon className="h-12 w-12 text-gray-400 mx-auto" />
                    <p className="mt-4 text-xl font-semibold text-gray-700">Search for a student to proceed.</p>
                    <p className="text-base text-gray-500">Enter a valid phone number or student name above.</p>
                </div>
            )}

            {/* Step 3: ID Card Modal */}
            {isModalOpen && (
                <IDCardPreviewModal 
                    student={foundStudent} 
                    institution={institutionInfo}
                    onClose={() => setIsModalOpen(false)} 
                />
            )}
        </div>
    );
};

export default IDCard;