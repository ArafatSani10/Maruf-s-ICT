import React from 'react';
import { useForm } from 'react-hook-form';
import { FaBook, FaTimes, FaTag, FaMoneyBillWave, FaClock, FaAlignLeft } from 'react-icons/fa';

const AddCourse = ({ isOpen, onClose }) => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
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
            
            <div className="relative bg-white w-[95%] max-w-2xl rounded-2xl shadow-2xl flex flex-col max-h-[90vh] border border-gray-100">
                
                <div className="flex justify-between items-center px-6 py-4 bg-gradient-to-r from-indigo-600 to-indigo-500 text-white rounded-t-2xl">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-white/20 rounded-md">
                            <FaBook className="text-white text-lg" />
                        </div>
                        <div>
                            <h2 className="text-lg font-semibold">Create New Course</h2>
                            <p className="text-xs opacity-90">Add course details to publish</p>
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

                <form onSubmit={handleSubmit(onSubmit)} className="flex-1 overflow-y-auto p-4 space-y-6 bg-gray-50/50">
                    
                    <div className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm space-y-5">
                        <div className="flex flex-col gap-1">
                            <label className="text-xs font-semibold text-gray-500 mb-2">Course Title *</label>
                            <div className="relative">
                                <FaTag className="absolute left-3 top-3 text-gray-400" />
                                <input 
                                    {...register("title", { required: 'Course title is required' })} 
                                    placeholder="e.g. Full Stack Web Development" 
                                    aria-invalid={errors.title ? 'true' : 'false'}
                                    className={`w-full p-3 pl-10 border ${errors.title ? 'border-red-400' : 'border-gray-200'} rounded-lg text-sm focus:ring-2 focus:ring-indigo-100 outline-none bg-gray-50 transition-all`} 
                                />
                                {errors.title && <p className="text-xs text-red-500 mt-1">{errors.title.message}</p>}
                            </div>
                        </div>

                        <div className="flex flex-col gap-1">
                            <label className="text-xs font-semibold text-gray-500 mb-2">Course Description</label>
                            <div className="relative">
                                <FaAlignLeft className="absolute left-3 top-3 text-gray-400" />
                                <textarea 
                                    {...register("description")} 
                                    rows="4" 
                                    placeholder="Enter course details..." 
                                    className="w-full p-3 pl-10 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-indigo-100 outline-none bg-white transition-all" 
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="flex flex-col gap-1">
                                <label className="text-xs font-semibold text-gray-500 mb-2">Price (৳)</label>
                                <div className="relative">
                                    <FaMoneyBillWave className="absolute left-3 top-3 text-gray-400" />
                                    <input 
                                        type="number" 
                                        {...register("price")} 
                                        placeholder="0.00" 
                                        className="w-full p-3 pl-10 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-indigo-100 outline-none bg-gray-50" 
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col gap-1">
                                <label className="text-xs font-semibold text-gray-500 mb-2">Duration</label>
                                <div className="relative">
                                    <FaClock className="absolute left-3 top-3 text-gray-400" />
                                    <input 
                                        {...register("duration")} 
                                        placeholder="e.g. 6 Months" 
                                        className="w-full p-3 pl-10 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-indigo-100 outline-none bg-white" 
                                    />
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
                        Create Course
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddCourse;