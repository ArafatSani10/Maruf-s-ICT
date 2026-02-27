import React from 'react';
import { useForm } from 'react-hook-form';
import { FaUsers, FaTimes, FaBook, FaCalendarAlt, FaMoneyBillWave, FaLayerGroup } from 'react-icons/fa';

const AddBatch = ({ isOpen, onClose }) => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log("Batch Data:", data);
        reset();
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[99999] w-screen h-screen flex items-center justify-center overflow-hidden">
            <div
                className="absolute inset-0 w-full h-full bg-slate-900/55 backdrop-blur-sm"
                onClick={onClose}
            />

            <div className="relative bg-white w-[95%] max-w-3xl rounded-2xl shadow-2xl flex flex-col max-h-[90vh] border border-gray-100 transform transition-all scale-100 md:scale-100">

                <div className="flex justify-between items-center px-6 py-4 bg-gradient-to-r from-indigo-600 to-indigo-500 rounded-t-2xl text-white">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-white/20 rounded-md">
                            <FaUsers className="text-white text-lg" />
                        </div>
                        <div>
                            <h2 className="text-lg font-semibold">Create New Batch</h2>
                            <p className="text-xs opacity-90">Add details and publish the batch</p>
                        </div>
                    </div>
                    <button
                        onClick={onClose}
                        aria-label="Close"
                        className="p-2 bg-white/10 hover:bg-white/20 rounded-md transition-all"
                    >
                        <FaTimes size={18} />
                    </button>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="flex-1 overflow-y-auto p-6 space-y-6 bg-gray-50">

                    <div className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm space-y-4">

                        <div className="flex flex-col">
                            <label className="text-xs font-semibold text-gray-500 mb-2">Batch Name *</label>
                            <div className="relative">
                                <FaLayerGroup className="absolute left-3 top-3 text-gray-400" />
                                <input
                                    {...register("batchName", { required: 'Batch name is required' })}
                                    placeholder="e.g. Batch 01 - Web Development"
                                    aria-invalid={errors.batchName ? 'true' : 'false'}
                                    className={`w-full p-3 pl-10 border ${errors.batchName ? 'border-red-400' : 'border-gray-200'} rounded-lg text-sm focus:ring-2 focus:ring-indigo-200 outline-none transition-all bg-gray-50`}
                                />
                                {errors.batchName && <p className="text-xs text-red-500 mt-1">{errors.batchName.message}</p>}
                            </div>
                        </div>

                        <div className="flex flex-col">
                            <label className="text-xs font-semibold text-gray-500 mb-2">Select Course *</label>
                            <div className="relative">
                                <FaBook className="absolute left-3 top-3 text-gray-400" />
                                <select
                                    {...register("courseTitle", { required: 'Please select a course' })}
                                    className={`w-full p-3 pl-10 border ${errors.courseTitle ? 'border-red-400' : 'border-gray-200'} rounded-lg text-sm focus:ring-2 focus:ring-indigo-200 outline-none bg-white appearance-none`}
                                >
                                    <option value="">Select Course Title</option>
                                    <option value="web-dev">Web Development</option>
                                    <option value="graphic-design">Graphic Design</option>
                                    <option value="digital-marketing">Digital Marketing</option>
                                </select>
                                {errors.courseTitle && <p className="text-xs text-red-500 mt-1">{errors.courseTitle.message}</p>}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="flex flex-col">
                                <label className="text-xs font-semibold text-gray-500 mb-2">Schedule *</label>
                                <div className="relative">
                                    <FaCalendarAlt className="absolute left-3 top-3 text-gray-400" />
                                    <select
                                        {...register("schedule", { required: 'Please select schedule' })}
                                        className={`w-full p-3 pl-10 border ${errors.schedule ? 'border-red-400' : 'border-gray-200'} rounded-lg text-sm focus:ring-2 focus:ring-indigo-200 outline-none bg-white appearance-none`}
                                    >
                                        <option value="">Select Schedule</option>
                                        <option value="Sat-Mon-Wed">Sat-Mon-Wed (7:00 PM)</option>
                                        <option value="Sun-Tue-Thu">Sun-Tue-Thu (9:00 PM)</option>
                                        <option value="Fri-Sat">Fri-Sat (Morning)</option>
                                    </select>
                                    {errors.schedule && <p className="text-xs text-red-500 mt-1">{errors.schedule.message}</p>}
                                </div>
                            </div>

                            <div className="flex flex-col">
                                <label className="text-xs font-semibold text-gray-500 mb-2">Course Fee (৳) *</label>
                                <div className="relative">
                                    <FaMoneyBillWave className="absolute left-3 top-3 text-gray-400" />
                                    <input
                                        type="number"
                                        {...register("courseFee", { required: 'Course fee is required' })}
                                        placeholder="0.00"
                                        aria-invalid={errors.courseFee ? 'true' : 'false'}
                                        className={`w-full p-3 pl-10 border ${errors.courseFee ? 'border-red-400' : 'border-gray-200'} rounded-lg text-sm focus:ring-2 focus:ring-indigo-200 outline-none bg-gray-50`}
                                    />
                                    {errors.courseFee && <p className="text-xs text-red-500 mt-1">{errors.courseFee.message}</p>}
                                </div>
                            </div>
                        </div>

                    </div>

                </form>

                <div className="px-6 py-4 border-t bg-white flex justify-end items-center gap-3 rounded-b-2xl">
                    <button
                        type="button"
                        onClick={() => { reset(); onClose(); }}
                        className="text-sm font-semibold text-gray-600 hover:text-gray-800 px-4 py-2 rounded-md transition-all"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleSubmit(onSubmit)}
                        className="px-6 py-2 bg-indigo-600 text-white text-sm font-semibold rounded-md shadow hover:bg-indigo-700 transition-transform active:scale-95"
                    >
                        Create Batch
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddBatch;