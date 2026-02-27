import React from 'react';
import { useForm } from 'react-hook-form';
import { FaBook, FaTimes, FaTag, FaMoneyBillWave, FaClock, FaAlignLeft } from 'react-icons/fa';

const AddCourse = ({ isOpen, onClose }) => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[99999] w-screen h-screen flex items-center justify-center overflow-hidden">
            <div 
                className="absolute inset-0 w-full h-full bg-slate-900/60 backdrop-blur-md" 
                onClick={onClose} 
            />
            
            <div className="relative bg-white w-[95%] max-w-2xl rounded-2xl shadow-2xl flex flex-col max-h-[90vh] border border-gray-200">
                
                <div className="flex justify-between items-center px-8 py-5 bg-indigo-600 shrink-0">
                    <div className="flex items-center gap-3">
                        <FaBook className="text-white text-xl" />
                        <h2 className="text-xl font-bold text-white tracking-tight">Create New Course</h2>
                    </div>
                    <button 
                        onClick={onClose} 
                        className="p-2 bg-white/20 hover:bg-red-500 text-white rounded-sm transition-all"
                    >
                        <FaTimes size={20} />
                    </button>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="flex-1 overflow-y-auto p-4 space-y-6 bg-gray-50/50">
                    
                    <div className="bg-white p-5 rounded-sm border border-gray-200 shadow-sm space-y-5">
                        <div className="flex flex-col gap-1">
                            <label className="text-sm font-semibold text-gray-700  ml-1">Course Title *</label>
                            <div className="relative">
                                <FaTag className="absolute left-3 top-4 text-gray-700" />
                                <input 
                                    {...register("title", { required: true })} 
                                    placeholder="e.g. Full Stack Web Development" 
                                    className="w-full p-3 pl-10 border border-gray-300 rounded-sm text-sm focus:border-indigo-500 outline-none transition-all" 
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-1">
                            <label className="text-sm font-semibold text-gray-700  ml-1">Course Description</label>
                            <div className="relative">
                                <FaAlignLeft className="absolute left-3 top-4 text-gray-700" />
                                <textarea 
                                    {...register("description")} 
                                    rows="4" 
                                    placeholder="Enter course details..." 
                                    className="w-full p-3 pl-10 border border-gray-300 rounded-sm text-sm focus:border-indigo-500 outline-none transition-all" 
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex flex-col gap-1">
                                <label className="text-sm font-semibold text-gray-700  ml-1">Price (৳)</label>
                                <div className="relative">
                                    <FaMoneyBillWave className="absolute left-3 top-4 text-gray-700" />
                                    <input 
                                        type="number" 
                                        {...register("price")} 
                                        placeholder="0.00" 
                                        className="w-full p-3 pl-10 border border-gray-300 rounded-sm text-sm focus:border-indigo-500 outline-none" 
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col gap-1">
                                <label className="text-sm font-semibold text-gray-700  ml-1">Duration</label>
                                <div className="relative">
                                    <FaClock className="absolute left-3 top-4 text-gray-700" />
                                    <input 
                                        {...register("duration")} 
                                        placeholder="e.g. 6 Months" 
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
                        className="text-sm font-semibold text-gray-700 hover:text-gray-800   transition-all"
                    >
                        Cancel
                    </button>
                    <button 
                        onClick={handleSubmit(onSubmit)} 
                        className="px-10 py-3 bg-indigo-600 text-white text-xs font-semibold rounded-sm shadow-lg hover:bg-indigo-700 transition-all active:scale-95  t"
                    >
                        Create Course
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddCourse;