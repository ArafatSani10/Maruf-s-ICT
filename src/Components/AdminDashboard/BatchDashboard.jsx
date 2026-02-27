import React, { useState } from 'react';

// --- 1. DUMMY DATA (Screenshot er moto data) ---
const DUMMY_BATCHES = [
  { id: 1, name: 'Sun-4pm', course: 'HSC Model Test', branch: 'Kushtia Branch', fee: 3500, status: 'Active', schedule: ['Sun (4:00PM - 5:00PM)', 'Tue (4:00PM - 5:00PM)', 'Thu (4:00PM - 5:00PM)'], enrollmentDate: 'Oct 22, 2025' },

];

// --- 2. BatchCard Component ---
const BatchCard = ({ batch }) => {
  // Local state for the toggle button in the card
  // In a real application, this state should come from the batch object itself (e.g., batch.isVisibleOnLanding)
  const [isLandingPageVisible, setIsLandingPageVisible] = useState(false);

  return (
    <div className="bg-white p-4 rounded-md shadow-md hover:shadow-lg transition duration-300 border border-gray-100">

      {/* Card Header (Batch Name & Edit Icon) */}
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-xl font-semibold text-gray-800">{batch.name}</h3>
        <button className="text-gray-400 hover:text-green-500">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
        </button>
      </div>

      <p className="text-sm font-medium text-gray-500 mb-3">{batch.course}</p>

      {/* Status Tags */}
      <div className="flex flex-wrap gap-2 text-xs mb-4">
        <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded-full font-medium">Active</span>
        <span className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full font-medium">Mixed</span>
        <span className="bg-purple-100 text-purple-800 px-2 py-0.5 rounded-full font-medium">Recorded</span>
        <span className="bg-indigo-100 text-indigo-800 px-2 py-0.5 rounded-full font-medium">{batch.branch}</span>
      </div>

      {/* Details Section */}
      <div className="space-y-2 text-sm text-gray-700">
        <div>
          <p className="font-semibold text-xs text-gray-500 mb-1">Schedule</p>
          <ul className="list-disc pl-4 text-xs text-gray-600 space-y-0.5">
            {batch.schedule.map((sch, index) => <li key={index}>{sch}</li>)}
          </ul>
        </div>
        <p className="text-xs">Start Date: **{batch.enrollmentDate}**</p>
        <div className="flex justify-between items-center text-xs">
          <span>Students:</span>
          <span className="font-bold text-gray-800">0/35</span>
        </div>

        {/* Toggle Switch (FIXED: now uses state and onClick) */}
        <div className="flex justify-between items-center pt-2">
          <span className="font-semibold text-sm">Show on Landing Page</span>
          <div
            onClick={() => setIsLandingPageVisible(!isLandingPageVisible)}
            className={`w-10 h-5 flex items-center rounded-full p-0.5 cursor-pointer transition-colors duration-300 ${isLandingPageVisible ? 'bg-green-500' : 'bg-gray-300'}`}
          >
            <div className={`bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ${isLandingPageVisible ? 'translate-x-5' : 'translate-x-0'}`}></div>
          </div>
        </div>
      </div>

      <hr className="my-4" />

      {/* Footer (Fee & Buttons) */}
      <div className="flex justify-between items-center text-sm">
        <p className="text-lg font-bold text-green-600">
          ৳{batch.fee.toLocaleString()}
        </p>
        <div className="space-x-2">
          <button className="text-blue-500 hover:text-blue-700 font-medium p-1">SMS</button>
          <button className="text-gray-500 hover:text-gray-700 font-medium p-1">Details</button>
        </div>
      </div>
    </div>
  );
};

// --- 3. AddBatchModal Component ---
const AddBatchModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add Batch creation logic here
    console.log("Form Submitted!");
    onClose();
  };

  return (
    // Modal Overlay 
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-75 p-4">

      {/* Modal Content Box */}
      <div className="bg-white p-6 rounded-xl shadow-2xl w-full max-w-lg transform transition-all duration-300 scale-100">

        {/* Header and Close Button */}
        <div className="flex justify-between items-center border-b pb-3 mb-4">
          <h2 className="text-xl font-bold text-gray-800">➕ Add New Batch</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-red-500 p-1"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
        </div>

        {/* Form Fields (FIXED: Direct input fields used to solve 'label is not defined') */}
        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Batch Name Field */}
          <div>
            <label htmlFor="batchName" className="block text-sm font-medium text-gray-700">Batch Name</label>
            <input type="text" id="batchName" placeholder="e.g., Sun-4pm" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2.5 focus:ring-green-500 focus:border-green-500 transition duration-150" required />
          </div>

          {/* Course Title Field */}
          <div>
            <label htmlFor="course" className="block text-sm font-medium text-gray-700">Course Title</label>
            <input type="text" id="course" placeholder="e.g., HSC Model Test" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2.5 focus:ring-green-500 focus:border-green-500 transition duration-150" required />
          </div>

          {/* Branch Select Field */}
          <div>
            <label htmlFor="branch" className="block text-sm font-medium text-gray-700">Branch</label>
            <select id="branch" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2.5 focus:ring-green-500 focus:border-green-500 transition duration-150">
              <option value="kushtia">Kushtia Branch</option>
              <option value="dhaka">Dhaka Branch</option>
            </select>
          </div>

          {/* Schedule Textarea */}
          <div>
            <label htmlFor="schedule" className="block text-sm font-medium text-gray-700">Schedule (Day and Time)</label>
            <textarea id="schedule" rows="3" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2.5 focus:ring-green-500 focus:border-green-500 transition duration-150" placeholder="Mon (4:00PM - 5:00PM)&#10;Wed (4:00PM - 5:00PM)"></textarea>
          </div>

          {/* Course Fee Field */}
          <div>
            <label htmlFor="courseFee" className="block text-sm font-medium text-gray-700">Course Fee (৳)</label>
            <input type="number" id="courseFee" placeholder="3500" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2.5 focus:ring-green-500 focus:border-green-500 transition duration-150" required />
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="w-full py-2.5 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition duration-150"
            >
              Create Batch
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};


// --- 4. Main Dashboard Component ---
const BatchDashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Active'); // For tab control

  return (
    <div className=" bg-gray-50 min-h-screen">

      {/* --- Header Section (Search, Filters, Add Batch) --- */}
      <div className="flex flex-wrap items-center justify-between mb-6 space-y-4 md:space-y-0">
        <div className="flex flex-1 flex-wrap gap-3 w-full md:w-auto">
          <input
            type="text"
            placeholder="Search batches..."
            className="p-2 border border-gray-300 rounded-md shadow-sm w-full md:w-auto flex-1 min-w-[200px]"
          />
          <select className="p-2 border border-gray-300 rounded-md shadow-sm w-full md:w-auto">
            <option>All Classes</option>
          </select>
          <select className="p-2 border border-gray-300 rounded-md shadow-sm w-full md:w-auto">
            <option>All Branches</option>
          </select>
        </div>

        {/* Add Batch Button */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md shadow transition duration-150 w-full md:w-auto flex items-center justify-center space-x-1"
        >
          <span className="text-xl leading-none">+</span> <span>**Add Batch**</span>
        </button>
      </div>

      {/* --- Tabs Section --- */}
      <div className="flex space-x-4 mb-8 border-b border-gray-200">
        {['Active', 'Upcoming', 'Completed'].map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-2 px-1 text-sm font-medium transition duration-200 ${activeTab === tab
              ? 'text-green-600 border-b-2 border-green-600 font-semibold'
              : 'text-gray-500 hover:text-gray-700'
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* --- Batch Cards Grid --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6">
        {DUMMY_BATCHES.map((batch) => (
          <BatchCard key={batch.id} batch={batch} />
        ))}
      </div>

      {/* --- Modal Component Instance --- */}
      <AddBatchModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default BatchDashboard;