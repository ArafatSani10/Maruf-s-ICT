import React from 'react';
import { useForm } from 'react-hook-form';
import { FaUsers, FaTimes, FaBook, FaCalendarAlt, FaMoneyBillWave, FaLayerGroup } from 'react-icons/fa';

const AddBatch = ({ isOpen, onClose }) => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log("Batch Data:", data);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[99999] w-screen h-screen flex items-center justify-center overflow-hidden">
            <div
                className="absolute inset-0 w-full h-full bg-slate-900/60 backdrop-blur-md"
                onClick={onClose}
            />

            <div className="relative bg-white w-[95%] max-w-3xl rounded-sm shadow-xl  flex flex-col max-h-[90vh] border border-gray-200">

                <div className="flex justify-between items-center px-8 py-5 bg-indigo-600 shrink-0">
                    <div className="flex items-center gap-3">
                        <FaUsers className="text-white text-xl" />
                        <h2 className="text-xl font-bold text-white">Create New Batch</h2>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 bg-white/20 hover:bg-red-500 text-white rounded-sm transition-all"
                    >
                        <FaTimes size={20} />
                    </button>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="flex-1 overflow-y-auto p-3 space-y-6 bg-gray-50/50">

                    <div className="bg-white p-4 rounded-sm border border-gray-200 shadow-sm space-y-5">

                        <div className="flex flex-col gap-1">
                            <label className="text-sm font-bold text-gray-700  ml-1">Batch Name *</label>
                            <div className="relative">
                                <FaLayerGroup className="absolute left-3 top-4 text-gray-700" />
                                <input
                                    {...register("batchName", { required: true })}
                                    placeholder="e.g. Batch 01 - Web Development"
                                    className="w-full p-3 pl-10 border border-gray-300 rounded-sm text-sm focus:border-indigo-500 outline-none transition-all"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-1">
                            <label className="text-sm font-bold text-gray-700  ml-1">Select Course *</label>
                            <div className="relative">
                                <FaBook className="absolute left-3 top-4 text-gray-700" />
                                <select
                                    {...register("courseTitle", { required: true })}
                                    className="w-full p-3 pl-10 border border-gray-300 rounded-sm text-sm focus:border-indigo-500 outline-none bg-white appearance-none"
                                >
                                    <option value="">Select Course Title</option>
                                    <option value="web-dev">Web Development</option>
                                    <option value="graphic-design">Graphic Design</option>
                                    <option value="digital-marketing">Digital Marketing</option>
                                </select>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex flex-col gap-1">
                                <label className="text-sm font-bold text-gray-700  ml-1">Schedule *</label>
                                <div className="relative">
                                    <FaCalendarAlt className="absolute left-3 top-4 text-gray-700" />
                                    <select
                                        {...register("schedule", { required: true })}
                                        className="w-full p-3 pl-10 border border-gray-300 rounded-sm text-sm focus:border-indigo-500 outline-none bg-white appearance-none"
                                    >
                                        <option value="">Select Schedule</option>
                                        <option value="Sat-Mon-Wed">Sat-Mon-Wed (7:00 PM)</option>
                                        <option value="Sun-Tue-Thu">Sun-Tue-Thu (9:00 PM)</option>
                                        <option value="Fri-Sat">Fri-Sat (Morning)</option>
                                    </select>
                                </div>
                            </div>

                            <div className="flex flex-col gap-1">
                                <label className="text-sm font-bold text-gray-700  ml-1">Course Fee (৳) *</label>
                                <div className="relative">
                                    <FaMoneyBillWave className="absolute left-3 top-4 text-gray-700" />
                                    <input
                                        type="number"
                                        {...register("courseFee", { required: true })}
                                        placeholder="0.00"
                                        className="w-full p-3 pl-10 border border-gray-300 rounded-sm text-sm focus:border-indigo-500 outline-none"
                                    />
                                </div>
                            </div>
                        </div>

                    </div>

                </form>

                <div className="px-8 py-5 border-t bg-white flex justify-end items-center gap-4 shrink-0">
                    <button
                        type="button"
                        onClick={onClose}
                        className="text-sm font-bold text-gray-700 hover:text-gray-800  transition-all"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleSubmit(onSubmit)}
                        className="px-10 py-3 bg-indigo-600 text-white text-xs font-bold rounded-sm shadow-lg hover:bg-indigo-700 transition-all active:scale-95 "
                    >
                        Create Batch
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddBatch;