import React, { useState } from 'react';
import {
  FiChevronDown,
  FiSearch,
  FiEdit,
  FiEye,
  FiTrash2,
  FiX,
  FiPhone,
  FiMail,
  FiMapPin,
  FiUser
} from 'react-icons/fi';
import {
  FaWhatsapp,
  FaExchangeAlt,
  FaFacebook,
  FaUsers,
  FaBook,
  FaMoneyBillWave,
  FaShieldAlt
} from 'react-icons/fa';

// Sample Data Structure with expanded student data
const studentData = [
  {
    id: '371301',
    name: 'Shondha Khatun',
    initial: 'S',
    status: 'Active',
    studentType: 'new',
    contactInfo: ['01337626763', '01714152494'],
    whatsapp: true,
    facebook: true,
    email: 'shondha@example.com',
    dob: '2008-03-15',
    grade: 'Class 10',
    institution: 'Kushtia govt collage',
    classRoll: '25',
    bloodGroup: 'A+',
    address: 'Kushtia, Bangladesh',
    batchClass: 'Sat-7am\nHSC Model Test',
    fatherName: 'Abdul Hasan',
    fatherPhone: '01712345678',
    motherName: 'Nasrin Begum',
    motherPhone: '01787654321',
    course: 'HSC Model Test',
    admissionFee: 5000,
    tuitionFee: 2500,
    admissionDate: '2024-01-15',
    referredBy: 'Facebook Ads',
    remarks: 'Good student, active participation',
    enrollDate: '2024-01-15',
  },

];

// Data for Filter Select Fields
const classes = ['All Courses', 'HSC Model Test', 'SSC Prep', 'JSC Level'];
const batches = ['All Batches', 'Sat-7am', 'Mon-3pm', 'Wed-9am', 'Fri-5pm'];
const paymentStatus = ['All Payment Status', 'Paid', 'Pending', 'Overdue'];

const FilterDropdown = ({ label, options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex justify-between items-center bg-white border border-gray-300 rounded-lg shadow-sm px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none min-w-[140px] transition-all"
      >
        {value || label}
        <FiChevronDown className={`ml-2 w-4 h-4 text-gray-600 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute left-0 mt-2 w-56 rounded-lg bg-white shadow-lg border border-gray-200 z-10">
          {options.map((option, index) => (
            <button
              key={index}
              onClick={() => {
                onChange(option);
                setIsOpen(false);
              }}
              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-900 first:rounded-t-lg last:rounded-b-lg transition-colors"
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

const TableRow = ({ student, onViewClick }) => {
  return (
    <tr className="hover:bg-indigo-50 transition-colors border-b border-gray-200">
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-blue-600 text-white font-bold text-sm">
            {student.initial}
          </div>
          <div className="ml-4">
            <div className="text-sm font-semibold text-gray-900">{student.name}</div>
            <div className="text-xs text-gray-500">ID: {student.id}</div>
          </div>
        </div>
      </td>

      <td className="px-6 py-4 whitespace-nowrap">
        <span className={`inline-flex items-center px-3 py-1 text-xs font-semibold rounded-full ${student.status === 'Active'
            ? 'bg-green-100 text-green-800'
            : 'bg-red-100 text-red-800'
          }`}>
          {student.status}
        </span>
      </td>

      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
        {student.contactInfo.map((number, index) => (
          <div key={index} className="leading-tight">{number}</div>
        ))}
      </td>

      <td className="px-6 py-4 whitespace-nowrap text-center">
        {student.whatsapp ? (
          <div className="flex items-center justify-center">
            <FaWhatsapp className="w-5 h-5 text-green-500" />
          </div>
        ) : (
          <span className="text-gray-300">-</span>
        )}
      </td>

      <td className="px-6 py-4 whitespace-nowrap text-center">
        {student.facebook ? (
          <div className="flex items-center justify-center">
            <FaFacebook className="w-5 h-5 text-blue-600" />
          </div>
        ) : (
          <span className="text-gray-300">-</span>
        )}
      </td>

      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
        {student.institution}
      </td>

      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
        {student.batchClass.split('\n').map((line, index) => (
          <div key={index} className="leading-tight">{line}</div>
        ))}
      </td>

      <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
        <div className="flex items-center justify-center space-x-3">
          <button
            onClick={() => onViewClick(student)}
            title="View Details"
            className="text-blue-500 hover:text-blue-700 hover:bg-blue-50 p-2 rounded-lg transition-all"
          >
            <FiEye className="w-5 h-5" />
          </button>
          <button
            title="Edit"
            className="text-yellow-600 hover:text-yellow-800 hover:bg-yellow-50 p-2 rounded-lg transition-all"
          >
            <FiEdit className="w-5 h-5" />
          </button>
          <button
            title="Delete"
            className="text-red-500 hover:text-red-700 hover:bg-red-50 p-2 rounded-lg transition-all"
          >
            <FiTrash2 className="w-5 h-5" />
          </button>
        </div>
      </td>
    </tr>
  );
};

const StudentDetailsModal = ({ isOpen, onClose, student }) => {
  if (!isOpen || !student) return null;

  const InfoCard = ({ label, value, icon: Icon, color = 'blue' }) => (
    <div className={`p-3 bg-${color}-50 rounded-lg border border-${color}-200`}>
      <p className="text-xs text-gray-600 font-semibold mb-1 flex items-center gap-2">
        {Icon && <Icon className={`text-${color}-600`} />}
        {label}
      </p>
      <p className="text-gray-800 font-medium">{value || '-'}</p>
    </div>
  );

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 overflow-y-auto h-full w-full z-50 flex justify-center items-center p-4">
      <div className="relative bg-white rounded-lg shadow-xl w-full max-w-4xl mx-auto">
        {/* Header with gradient */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-8 flex justify-between items-center rounded-t-lg">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white text-blue-600 font-bold text-2xl shadow-md">
              {student.initial}
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">{student.name}</h2>
              <p className="text-blue-100">ID: {student.id}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-white hover:bg-white hover:bg-opacity-20 p-2 rounded-lg transition-all"
          >
            <FiX className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 max-h-[75vh] overflow-y-auto">
          {/* Status and Dates */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <InfoCard
              label="STATUS"
              value={student.status}
              color={student.status === 'Active' ? 'green' : 'red'}
            />
            <InfoCard
              label="ENROLLMENT DATE"
              value={student.enrollDate}
              color="purple"
            />
            <InfoCard
              label="STUDENT TYPE"
              value={student.studentType.charAt(0).toUpperCase() + student.studentType.slice(1)}
              color="indigo"
            />
          </div>

          {/* Student Information Section */}
          <div className="mb-6 border-b pb-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2 text-blue-700">
              <FiUser className="w-5 h-5" /> Student Information
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <InfoCard label="Date of Birth" value={student.dob} />
              <InfoCard label="Grade/Class" value={student.grade} />
              <InfoCard label="Blood Group" value={student.bloodGroup} color="red" />
              <InfoCard label="School/College" value={student.institution} color="green" />
              <InfoCard label="Class Roll" value={student.classRoll} color="purple" />
            </div>
            <div className="mt-4">
              <p className="text-xs text-gray-600 font-semibold mb-2">ADDRESS</p>
              <p className="text-gray-800 font-medium p-3 bg-gray-50 rounded-lg border border-gray-200">{student.address}</p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="mb-6 border-b pb-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2 text-blue-700">
              <FiPhone className="w-5 h-5" /> Contact Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              {student.contactInfo.map((phone, index) => (
                <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg border border-gray-200">
                  <FiPhone className="text-blue-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{phone}</span>
                </div>
              ))}
              <div className="flex items-center p-3 bg-gray-50 rounded-lg border border-gray-200">
                <FiMail className="text-indigo-600 mr-3 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{student.email}</span>
              </div>
            </div>
            <div className="flex gap-3 flex-wrap">
              {student.whatsapp && (
                <div className="flex items-center space-x-2 px-4 py-2 bg-green-50 rounded-lg border border-green-200">
                  <FaWhatsapp className="w-5 h-5 text-green-600" />
                  <span className="text-green-700 font-medium text-sm">WhatsApp</span>
                </div>
              )}
              {student.facebook && (
                <div className="flex items-center space-x-2 px-4 py-2 bg-blue-50 rounded-lg border border-blue-200">
                  <FaFacebook className="w-5 h-5 text-blue-600" />
                  <span className="text-blue-700 font-medium text-sm">Facebook</span>
                </div>
              )}
            </div>
          </div>

          {/* Guardian Information */}
          <div className="mb-6 border-b pb-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2 text-green-700">
              <FaUsers className="w-5 h-5" /> Guardian Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                <p className="text-xs text-gray-600 font-semibold mb-2">FATHER'S NAME</p>
                <p className="text-gray-800 font-medium mb-2">{student.fatherName || '-'}</p>
                <p className="text-xs text-gray-600 mb-1">Phone:</p>
                <p className="text-gray-700">{student.fatherPhone || '-'}</p>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                <p className="text-xs text-gray-600 font-semibold mb-2">MOTHER'S NAME</p>
                <p className="text-gray-800 font-medium mb-2">{student.motherName || '-'}</p>
                <p className="text-xs text-gray-600 mb-1">Phone:</p>
                <p className="text-gray-700">{student.motherPhone || '-'}</p>
              </div>
            </div>
          </div>

          {/* Course & Enrollment */}
          <div className="mb-6 border-b pb-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2 text-orange-700">
              <FaBook className="w-5 h-5" /> Course & Enrollment
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InfoCard label="Course" value={student.course} color="orange" />
              <InfoCard label="Batch & Class" value={student.batchClass.replace('\n', ' • ')} color="orange" />
              <InfoCard label="Admission Date" value={student.admissionDate} color="yellow" />
            </div>
          </div>

          {/* Payment Information */}
          <div className="mb-6 border-b pb-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2 text-rose-700">
              <FaMoneyBillWave className="w-5 h-5" /> Payment Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <InfoCard
                label="Admission Fee"
                value={`৳ ${student.admissionFee.toLocaleString()}`}
                color="rose"
              />
              <InfoCard
                label="Monthly Tuition Fee"
                value={`৳ ${student.tuitionFee.toLocaleString()}`}
                color="rose"
              />
              <InfoCard
                label="Referred By"
                value={student.referredBy}
                color="amber"
              />
            </div>
          </div>

          {/* Additional Notes */}
          {student.remarks && (
            <div className="mb-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                <FaShieldAlt className="w-5 h-5 text-gray-700" /> Remarks
              </h3>
              <p className="p-4 bg-blue-50 rounded-lg border border-blue-200 text-gray-800 italic">{student.remarks}</p>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex justify-end space-x-3 pt-4 border-t border-gray-200 mt-6">
            <button
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-all"
            >
              Close
            </button>
            <button
              className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all flex items-center space-x-2"
            >
              <FiEdit className="w-4 h-4" />
              <span>Edit Student</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const StudentTable = ({ students = studentData }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedClass, setSelectedClass] = useState('All Classes');
  const [selectedBatch, setSelectedBatch] = useState('All Batches');
  const [selectedPayment, setSelectedPayment] = useState('All Payment Status');
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);

  // Filter students based on search and filters
  const filteredStudents = students.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.id.includes(searchTerm) ||
      student.institution.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesClass = selectedClass === 'All Classes' || student.batchClass.includes(selectedClass);
    const matchesBatch = selectedBatch === 'All Batches' || student.batchClass.includes(selectedBatch);

    return matchesSearch && matchesClass && matchesBatch;
  });

  const handleViewClick = (student) => {
    setSelectedStudent(student);
    setIsDetailsModalOpen(true);
  };

  return (
    <div className="bg-gray-50 min-h-screen p-4 md:p-3">
      

      {/* Filter and Search Section */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-6">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between flex-wrap">
          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-3 flex-wrap">
            <FilterDropdown
              label="All Classes"
              options={classes}
              value={selectedClass === 'All Classes' ? '' : selectedClass}
              onChange={setSelectedClass}
            />
            <FilterDropdown
              label="All Batches"
              options={batches}
              value={selectedBatch === 'All Batches' ? '' : selectedBatch}
              onChange={setSelectedBatch}
            />
            <FilterDropdown
              label="All Payment Status"
              options={paymentStatus}
              value={selectedPayment === 'All Payment Status' ? '' : selectedPayment}
              onChange={setSelectedPayment}
            />
          </div>

          {/* Search */}
          <div className="relative w-full md:w-auto">
            <input
              type="text"
              placeholder="Search by name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          </div>
        </div>

        {/* Stats */}
        <div className="mt-4 flex items-center justify-between p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-100">
          <div>
            <p className="text-sm text-gray-600">Total Students</p>
            <p className="text-2xl font-bold text-blue-600">{filteredStudents.length}</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-600">Active Students</p>
            <p className="text-2xl font-bold text-green-600">
              {filteredStudents.filter(s => s.status === 'Active').length}
            </p>
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">STUDENT</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">STATUS</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">CONTACT</th>
                <th className="px-6 py-4 text-center text-xs font-bold text-gray-700 uppercase tracking-wider">WHATSAPP</th>
                <th className="px-6 py-4 text-center text-xs font-bold text-gray-700 uppercase tracking-wider">FACEBOOK</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">INSTITUTION</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">BATCH & CLASS</th>
                <th className="px-6 py-4 text-center text-xs font-bold text-gray-700 uppercase tracking-wider">ACTIONS</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredStudents.length > 0 ? (
                filteredStudents.map((student) => (
                  <TableRow
                    key={student.id}
                    student={student}
                    onViewClick={handleViewClick}
                  />
                ))
              ) : (
                <tr>
                  <td colSpan="8" className="px-6 py-12 text-center">
                    <p className="text-gray-500 text-lg">No students found matching your criteria</p>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Details Modal */}
      <StudentDetailsModal
        isOpen={isDetailsModalOpen}
        onClose={() => setIsDetailsModalOpen(false)}
        student={selectedStudent}
      />
    </div>
  );
};

export default StudentTable;