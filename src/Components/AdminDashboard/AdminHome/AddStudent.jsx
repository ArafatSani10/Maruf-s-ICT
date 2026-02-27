import React from 'react';
import { useForm } from 'react-hook-form';
import {
    FaUser, FaUsers, FaBook, FaMoneyBillWave,
    FaShieldAlt, FaTimes, FaCamera, FaIdCard, FaMapMarkerAlt
} from 'react-icons/fa';

const AddStudent = ({ isOpen, onClose }) => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        reset();
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[9999] w-screen h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-slate-900/55 backdrop-blur-sm" onClick={onClose} />

            <div className="relative bg-white w-[95%] max-w-6xl rounded-2xl shadow-2xl flex flex-col max-h-[95vh] overflow-hidden border border-gray-100">

                <div className="flex justify-between items-center px-6 py-4 bg-gradient-to-r from-indigo-600 to-indigo-500 text-white rounded-t-2xl">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-white/20 rounded-md">
                            <FaUser className="text-white text-lg" />
                        </div>
                        <div>
                            <h2 className="text-lg font-semibold">New Student Admission</h2>
                            <p className="text-xs opacity-90">Quickly add a student record</p>
                        </div>
                    </div>
                    <button
                        onClick={() => { reset(); onClose(); }}
                        aria-label="Close"
                        className="p-2 bg-white/10 hover:bg-white/20 rounded-md transition-all"
                    >
                        <FaTimes size={18} />
                    </button>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="flex-1 overflow-y-auto p-8 space-y-8 bg-gray-50">

                    <div className="bg-white p-6 rounded-sm border border-gray-200 shadow-sm space-y-6">
                        <div className="flex items-center gap-2 text-indigo-600 font-bold border-b pb-2">
                            <FaIdCard /> <span>STUDENT INFORMATION</span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex gap-4 p-3 bg-gray-50 rounded-sm border border-gray-200">
                                <label className="flex items-center gap-2 text-sm font-bold cursor-pointer">
                                    <input type="radio" value="new" {...register("studentType")} defaultChecked className="accent-indigo-600" /> New Student
                                </label>
                                <label className="flex items-center gap-2 text-sm font-bold cursor-pointer">
                                    <input type="radio" value="returning" {...register("studentType")} className="accent-indigo-600" /> Returning Student
                                </label>
                            </div>
                            <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-sm border border-gray-200">
                                <span className="text-[10px] font-bold text-gray-400 uppercase">Student ID Generation</span>
                                <label className="text-xs font-bold flex items-center gap-1"><input type="radio" value="auto" {...register("idMethod")} defaultChecked /> Auto</label>
                                <label className="text-xs font-bold flex items-center gap-1"><input type="radio" value="manual" {...register("idMethod")} /> Manual</label>
                                <label className="text-xs font-bold flex items-center gap-1"><input type="radio" value="hybrid" {...register("idMethod")} /> Hybrid</label>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-1">
                                <label className="text-xs font-bold text-gray-600 uppercase">Student Name *</label>
                                <input {...register("studentName", { required: 'Student name is required' })} placeholder="Enter full name" aria-invalid={errors.studentName ? 'true' : 'false'} className={`w-full p-3 border ${errors.studentName ? 'border-red-400' : 'border-gray-300'} rounded-lg outline-none focus:ring-2 focus:ring-indigo-100 text-sm bg-white`} />
                                {errors.studentName && <p className="text-xs text-red-500 mt-1">{errors.studentName.message}</p>}
                            </div>
                            <div className="space-y-1">
                                <label className="text-xs font-bold text-gray-600 uppercase">Phone Number *</label>
                                <input {...register("phoneNumber", { required: 'Phone number is required' })} placeholder="01XXXXXXXXX" aria-invalid={errors.phoneNumber ? 'true' : 'false'} className={`w-full p-3 border ${errors.phoneNumber ? 'border-red-400' : 'border-gray-300'} rounded-lg outline-none focus:ring-2 focus:ring-indigo-100 text-sm bg-white`} />
                                {errors.phoneNumber && <p className="text-xs text-red-500 mt-1">{errors.phoneNumber.message}</p>}
                            </div>
                            <div className="space-y-1">
                                <label className="text-xs font-bold text-gray-600 uppercase">Email (Optional)</label>
                                <input {...register("email")} placeholder="student@email.com" className="w-full p-3 border border-gray-300 rounded-sm outline-none focus:border-indigo-500 text-sm" />
                            </div>
                            <div className="space-y-1">
                                <label className="text-xs font-bold text-gray-600 uppercase">Date of Birth</label>
                                <input type="date" {...register("dob")} className="w-full p-3 border border-gray-300 rounded-sm outline-none focus:border-indigo-500 text-sm" />
                            </div>
                            <div className="space-y-1">
                                <label className="text-xs font-bold text-gray-600 uppercase">Class / Grade</label>
                                <input {...register("grade")} placeholder="e.g., Class 10, HSC 1st Year" className="w-full p-3 border border-gray-300 rounded-sm outline-none focus:border-indigo-500 text-sm" />
                            </div>
                            <div className="space-y-1">
                                <label className="text-xs font-bold text-gray-600 uppercase">School / College</label>
                                <input {...register("school")} placeholder="Enter school or college name" className="w-full p-3 border border-gray-300 rounded-sm outline-none focus:border-indigo-500 text-sm" />
                            </div>
                            <div className="space-y-1">
                                <label className="text-xs font-bold text-gray-600 uppercase">Class Roll</label>
                                <input {...register("classRoll")} placeholder="e.g., 15" className="w-full p-3 border border-gray-300 rounded-sm outline-none focus:border-indigo-500 text-sm" />
                            </div>
                            <div className="space-y-1">
                                <label className="text-xs font-bold text-gray-600 uppercase">Blood Group</label>
                                <select {...register("bloodGroup")} className="w-full p-3 border border-gray-300 rounded-sm outline-none focus:border-indigo-500 text-sm bg-white">
                                    <option value="">Select Blood Group</option>
                                    <option value="A+">A+</option><option value="A-">A-</option>
                                    <option value="B+">B+</option><option value="B-">B-</option>
                                    <option value="O+">O+</option><option value="O-">O-</option>
                                    <option value="AB+">AB+</option><option value="AB-">AB-</option>
                                </select>
                            </div>
                        </div>

                        <div className="space-y-1">
                            <label className="text-xs font-bold text-gray-600 uppercase">Address</label>
                            <textarea {...register("address")} rows="2" placeholder="Enter address" className="w-full p-3 border border-gray-300 rounded-sm outline-none focus:border-indigo-500 text-sm" />
                        </div>

                        <div className="p-6 border-2 border-dashed border-gray-300 rounded-sm bg-gray-50 flex flex-col items-center justify-center gap-2">
                            <FaCamera className="text-gray-400 text-xl" />
                            <p className="text-sm font-bold text-gray-600">Upload your photo</p>
                            <input type="file" {...register("photo")} className="text-xs mt-2" />
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-sm border border-gray-200 shadow-sm space-y-6">
                        <div className="flex items-center gap-2 text-emerald-600 font-bold border-b pb-2">
                            <FaUsers /> <span>GUARDIAN INFORMATION</span>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-1">
                                <label className="text-xs font-bold text-gray-600 uppercase">Father's Name</label>
                                <input {...register("fatherName")} placeholder="Father's name" className="w-full p-3 border border-gray-300 rounded-sm text-sm" />
                            </div>
                            <div className="space-y-1">
                                <label className="text-xs font-bold text-gray-600 uppercase">Father's Phone</label>
                                <input {...register("fatherPhone")} placeholder="01XXXXXXXXX" className="w-full p-3 border border-gray-300 rounded-sm text-sm" />
                            </div>
                            <div className="space-y-1">
                                <label className="text-xs font-bold text-gray-600 uppercase">Mother's Name</label>
                                <input {...register("motherName")} placeholder="Mother's name" className="w-full p-3 border border-gray-300 rounded-sm text-sm" />
                            </div>
                            <div className="space-y-1">
                                <label className="text-xs font-bold text-gray-600 uppercase">Mother's Phone</label>
                                <input {...register("motherPhone")} placeholder="01XXXXXXXXX" className="w-full p-3 border border-gray-300 rounded-sm text-sm" />
                            </div>
                        </div>
                        <div className="space-y-1">
                            <label className="text-xs font-bold text-gray-600 uppercase">Guardian Email</label>
                            <input {...register("guardianEmail")} placeholder="guardian@example.com" className="w-full p-3 border border-gray-300 rounded-sm text-sm" />
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-sm border border-gray-200 shadow-sm space-y-6">
                        <div className="flex items-center gap-2 text-orange-600 font-bold border-b pb-2">
                            <FaBook /> <span>COURSE & ENROLLMENT</span>
                        </div>
                        <div className="space-y-1">
                            <label className="text-xs font-bold text-gray-600 uppercase">Course</label>
                            <select {...register("course")} className="w-full p-3 border border-gray-300 rounded-sm text-sm bg-white">
                                <option value="">Select Course (Optional)</option>
                                <option value="web">Web Development</option>
                            </select>
                        </div>
                        <div className="space-y-1">
                            <label className="text-xs font-bold text-gray-600 uppercase">Batches (Select one or more)</label>
                            <div className="p-3 border border-gray-300 rounded-sm bg-gray-50 text-xs text-gray-400">No batches available</div>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-sm border border-gray-200 shadow-sm space-y-6">
                        <div className="flex items-center gap-2 text-rose-600 font-bold border-b pb-2">
                            <FaMoneyBillWave /> <span>PAYMENT INFORMATION</span>
                        </div>
                        <div className="flex gap-4 p-2 bg-gray-50 rounded-sm w-fit border">
                            <span className="text-[10px] font-bold text-gray-400 mt-1 ml-2">FEE TYPE:</span>
                            <label className="flex items-center gap-2 text-sm font-bold"><input type="radio" value="monthly" {...register("feeType")} defaultChecked className="accent-rose-500" /> Monthly</label>
                            <label className="flex items-center gap-2 text-sm font-bold"><input type="radio" value="course" {...register("feeType")} className="accent-rose-500" /> Course</label>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-1">
                                <label className="text-xs font-bold text-gray-600 uppercase">Admission Fee</label>
                                <input type="number" defaultValue="0" {...register("admissionFee")} className="w-full p-3 border border-gray-300 rounded-sm text-sm" />
                            </div>
                            <div className="space-y-1">
                                <label className="text-xs font-bold text-gray-600 uppercase">Monthly Tuition Fee</label>
                                <input type="number" defaultValue="0" {...register("tuitionFee")} className="w-full p-3 border border-gray-300 rounded-sm text-sm" />
                            </div>
                            <div className="space-y-1">
                                <label className="text-xs font-bold text-gray-600 uppercase">Admission Date</label>
                                <input type="date" defaultValue={new Date().toISOString().split('T')[0]} {...register("admissionDate")} className="w-full p-3 border border-gray-300 rounded-sm text-sm" />
                            </div>
                            <div className="space-y-1">
                                <label className="text-xs font-bold text-gray-600 uppercase">Referred By</label>
                                <input {...register("referredBy")} placeholder="Referral name (if any)" className="w-full p-3 border border-gray-300 rounded-sm text-sm" />
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-sm border border-gray-200 shadow-sm space-y-6">
                        <div className="flex items-center gap-2 text-gray-700 font-bold border-b pb-2">
                            <FaShieldAlt /> <span>ACCOUNT SETTINGS</span>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-1">
                                <label className="text-xs font-bold text-gray-600 uppercase">Password</label>
                                <input {...register("password")} placeholder="Leave empty to auto-generate" className="w-full p-3 border border-gray-300 rounded-sm text-sm" />
                                <p className="text-[10px] text-gray-400 italic">Password will be sent via SMS</p>
                            </div>
                            <div className="space-y-1">
                                <label className="text-xs font-bold text-gray-600 uppercase">Notes / Remarks</label>
                                <input {...register("remarks")} placeholder="Any additional notes..." className="w-full p-3 border border-gray-300 rounded-sm text-sm" />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <label className="flex items-center gap-3 p-4 border rounded-sm cursor-pointer hover:bg-indigo-50 transition-colors border-indigo-100">
                                <input type="radio" value="direct" {...register("admissionMethod")} defaultChecked className="w-4 h-4 accent-indigo-600" />
                                <div>
                                    <p className="text-sm font-bold text-gray-800">Direct Admission</p>
                                    <p className="text-[10px] text-gray-500 uppercase">Create student account immediately</p>
                                </div>
                            </label>
                            <label className="flex items-center gap-3 p-4 border rounded-sm cursor-pointer hover:bg-amber-50 transition-colors border-gray-200">
                                <input type="radio" value="request" {...register("admissionMethod")} className="w-4 h-4 accent-amber-600" />
                                <div>
                                    <p className="text-sm font-bold text-gray-800">Save as Request</p>
                                    <p className="text-[10px] text-gray-500 uppercase">Save for later approval</p>
                                </div>
                            </label>
                        </div>
                    </div>

                </form>

                <div className="px-6 py-4 border-t bg-white flex justify-end gap-3 rounded-b-2xl sticky bottom-0">
                    <button type="button" onClick={() => { reset(); onClose(); }} className="px-5 py-2 text-sm font-semibold text-gray-600 hover:bg-gray-100 rounded-md transition-all">Cancel</button>
                    <button onClick={handleSubmit(onSubmit)} className="px-6 py-2 text-sm font-semibold bg-indigo-600 text-white rounded-md shadow hover:bg-indigo-700 transition-transform active:scale-95">Submit Admission</button>
                </div>
            </div>
        </div>
    );
};

export default AddStudent;