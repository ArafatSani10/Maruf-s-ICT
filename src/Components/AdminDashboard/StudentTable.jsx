import React, { useState } from 'react';
import {
  FiChevronDown,
  FiSearch,
  FiEdit,
  FiEye,
  FiTrash2,
  FiX
} from 'react-icons/fi';
import {
  FaWhatsapp,
  FaExchangeAlt
} from 'react-icons/fa';

// Sample Data Structure (Used for the table, enrollment options will use new arrays)
const studentData = [
  {
    id: '371301',
    name: 'Shondha Khatun',
    initial: 'S',
    status: 'Active',
    contactInfo: ['01337626763', '01714152494'],
    whatsapp: true,
    facebook: null,
    institution: 'Kushtia govt collage',
    batchClass: 'Sat-7am\nHSC Model Test',
  },
  {
    id: '360793',
    name: 'Shimul Mia',
    initial: 'S',
    status: 'Active',
    contactInfo: ['01306000139', '01815844035'],
    whatsapp: true,
    facebook: null,
    institution: 'Kushtia islamia collage',
    batchClass: 'Sat-7am\nHSC Model Test',
  },
  {
    id: '877368',
    name: 'Sadia khatun',
    initial: 'S',
    status: 'Active',
    contactInfo: ['01345115531', '01792159686'],
    whatsapp: true,
    facebook: null,
    institution: 'Kushtia govt girls collage',
    batchClass: 'Sat-7am\nHSC Model Test',
  },
];

// Data for Enrollment Form Select Fields (Ready for API integration)
const studentsList = ['Select Student', 'Shondha Khatun (ID: 371301)', 'Shimul Mia (ID: 360793)', 'New Student'];
const branches = ['Select Branch', 'Main Branch', 'Secondary Branch'];
const classes = ['Select Class', 'HSC Model Test', 'SSC Prep', 'JSC Level'];
const batches = ['Select Batch', 'Sat-7am', 'Mon-3pm', 'Wed-9am'];

const FilterDropdown = ({ label }) => (
  <div className="relative inline-block text-left mr-3">
    <button className="inline-flex justify-between items-center bg-white border border-gray-300 rounded-md shadow-sm px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none min-w-[120px]">
      {label}
      <FiChevronDown className="ml-2 w-4 h-4 text-gray-600" />
    </button>
  </div>
);

const TableRow = ({ student }) => {
  return (
    <tr className="hover:bg-gray-50">

      <td className="px-6 py-3 whitespace-nowrap">
        <div className="flex items-center">
          <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 font-bold text-lg">
            {student.initial}
          </div>
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900">{student.name}</div>
            <div className="text-xs text-gray-500">ID: {student.id}</div>
          </div>
        </div>
      </td>

      <td className="px-6 py-3 whitespace-nowrap">
        <span className={`inline-flex items-center px-3 py-1 text-xs font-semibold rounded-full ${student.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
          }`}>
          {student.status}
        </span>
      </td>

      <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-500">
        {student.contactInfo.map((number, index) => (
          <div key={index} className="leading-tight">{number}</div>
        ))}
      </td>

      <td className="px-6 py-3 whitespace-nowrap text-center">
        {student.whatsapp ? <FaWhatsapp className="w-5 h-5 text-green-500 mx-auto" /> : <span className="text-gray-400">-</span>}
      </td>

      <td className="px-6 py-3 whitespace-nowrap text-center">
        {student.facebook ? <span className="text-blue-500 font-medium">Link</span> : <span className="text-gray-400">-</span>}
      </td>

      <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-500">
        {student.institution}
      </td>

      <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-500">
        {student.batchClass.split('\n').map((line, index) => (
          <div key={index} className="leading-tight">{line}</div>
        ))}
      </td>

      <td className="px-6 py-3 whitespace-nowrap text-center text-sm font-medium">
        <div className="flex items-center justify-center space-x-2">
          <button title="Transfer"><FaExchangeAlt className="w-5 h-5 text-blue-500 hover:text-blue-700" /></button>
          <button title="View"><FiEye className="w-5 h-5 text-gray-500 hover:text-gray-700" /></button>
          <button title="Edit"><FiEdit className="w-5 h-5 text-yellow-600 hover:text-yellow-800" /></button>
          <button title="Delete"><FiTrash2 className="w-5 h-5 text-red-500 hover:text-red-700" /></button>
        </div>
      </td>
    </tr>
  );
};

const EnrollmentModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const InputField = ({ label, options }) => (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <select
        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
      >
        {options.map((option, index) => (
          <option key={index} value={option}>{option}</option>
        ))}
      </select>
    </div>
  );

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50 flex justify-center items-center">
      <div className="relative bg-white rounded-md shadow-xl w-full max-w-md mx-4 p-6">

        <div className="flex justify-between items-center pb-3 border-b border-gray-200">
          <h3 className="text-xl font-semibold text-gray-900">New Student Enrollment</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition duration-150"
          >
            <FiX className="w-6 h-6" />
          </button>
        </div>

        <form className="mt-4">

          <InputField label="1. Select a Student" options={studentsList} />
          <InputField label="2. Branch" options={branches} />
          <InputField label="3. Class" options={classes} />
          <InputField label="4. Select Batch" options={batches} />

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
              Enroll
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const StudentTable = ({ students = studentData }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const totalEnrollments = students.length;

  return (
    <div className=" bg-gray-50 min-h-screen">

      <div className="bg-white p-4 rounded-md shadow-md mb-6">

        <div className="flex flex-wrap items-center justify-between mb-4">
          <div className="flex flex-wrap items-center space-x-3 mb-4 md:mb-0">
            <FilterDropdown label="All Branches" />
            <FilterDropdown label="All Classes" />
            <FilterDropdown label="All Batches" />
            <FilterDropdown label="All Payment Sta..." />
          </div>

          <div className="flex flex-wrap items-center space-x-3">
            <div className="relative">
              <input
                type="text"
                placeholder="Search students..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            </div>

            <button className="px-4 py-2 border border-green-600 text-green-600 rounded-md hover:bg-green-50 font-medium">
              Export
            </button>
            <button
              onClick={() => setIsModalOpen(true)} // Modal trigger here
              className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 font-medium"
            >
              Enroll Student
            </button>
          </div>
        </div>

        <div className="flex justify-between items-center pt-4 border-t border-gray-100">
          <div className="text-gray-700 text-lg font-medium">
            Total Enrollments: <span className="text-blue-600 font-bold">{totalEnrollments}</span>
          </div>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 text-sm font-medium flex items-center">
            SMS For Due
          </button>
        </div>
      </div>

      <div className="overflow-x-auto bg-white rounded-md shadow-md">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50 text-xs font-semibold uppercase tracking-wider text-gray-500">
            <tr>
              <th scope="col" className="px-6 py-3 text-left">STUDENT</th>
              <th scope="col" className="px-6 py-3 text-left">STATUS</th>
              <th scope="col" className="px-6 py-3 text-left">CONTACT INFO</th>
              <th scope="col" className="px-6 py-3 text-center">WHATSAPP</th>
              <th scope="col" className="px-6 py-3 text-center">FACEBOOK</th>
              <th scope="col" className="px-6 py-3 text-left">INSTITUTION</th>
              <th scope="col" className="px-6 py-3 text-left">BATCH & CLASS</th>
              <th scope="col" className="px-6 py-3 text-center">ACTIONS</th>
            </tr>
          </thead>

          <tbody className="bg-white divide-y divide-gray-200">
            {students.map((student) => (
              <TableRow key={student.id} student={student} />
            ))}
          </tbody>
        </table>
      </div>

      <EnrollmentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

    </div>
  );
};

export default StudentTable;