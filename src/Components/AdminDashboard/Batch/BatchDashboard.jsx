import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

// --- 1. DUMMY DATA (Screenshot-style data) ---
const DUMMY_BATCHES = [
    {
        id: 1,
        name: 'HSC-BATCH-26',
        course: 'HSC Model Test',
        fee: 3500,
        status: 'Active',
        schedule: ['Sun (4:00PM - 5:00PM)', 'Tue (4:00PM - 5:00PM)', 'Thu (4:00PM - 5:00PM)'],
        enrollmentDate: 'Oct 22, 2025',
    },
    {
        id: 2,
        name: 'HSC-BATCH-25',
        course: 'SSC Preparation',
        fee: 4200,
        status: 'Upcoming',
        schedule: ['Mon (6:00PM - 7:30PM)', 'Wed (6:00PM - 7:30PM)'],
        enrollmentDate: 'Nov 05, 2025',
    },
    {
        id: 3,
        name: 'HSC-BATCH-24',
        course: 'Web Development',
        fee: 5000,
        status: 'Completed',
        schedule: ['Wed (2:00PM - 4:00PM)'],
        enrollmentDate: 'Sep 10, 2025',
    },
];

// --- 2. EditBatchModal Component ---
const EditBatchModal = ({ isOpen, onClose, batch, onSubmit }) => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        defaultValues: batch ? { batchName: batch.name, courseTitle: batch.course, courseFee: batch.fee, schedule: batch.schedule.join('\n') } : {},
    });

    React.useEffect(() => {
        if (batch) reset({ batchName: batch.name, courseTitle: batch.course, courseFee: batch.fee, schedule: batch.schedule.join('\n') });
    }, [batch, reset]);

    const onSubmitHandler = (data) => {
        onSubmit(data);
        reset();
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[99999] w-screen h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 w-full h-full bg-slate-900/55 backdrop-blur-sm" onClick={onClose} />
            <div className="relative bg-white w-[95%] max-w-3xl rounded-2xl shadow-2xl flex flex-col max-h-[90vh] border border-gray-100 transform transition-all">
                <div className="flex justify-between items-center px-6 py-4 bg-gradient-to-r from-indigo-600 to-indigo-500 rounded-t-2xl text-white">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-white/20 rounded-md">
                            <svg className="text-white text-lg w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M15.232 5.232l3.536 3.536M9 11l6-6M3 21h6l9-9" /></svg>
                        </div>
                        <div>
                            <h2 className="text-lg font-semibold">Edit Batch</h2>
                            <p className="text-xs opacity-90">Update batch details and save changes</p>
                        </div>
                    </div>
                    <button onClick={onClose} className="p-2 bg-white/10 hover:bg-white/20 rounded-md transition-all">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </div>

                <form onSubmit={handleSubmit(onSubmitHandler)} className="flex-1 overflow-y-auto p-6 space-y-6 bg-gray-50">
                    <div className="bg-white p-3 rounded-lg border border-gray-100 shadow-sm space-y-4">
                        <div className="flex flex-col">
                            <label className="text-xs font-semibold text-gray-500 mb-2">Batch Name *</label>
                            <div className="relative">
                                <input {...register('batchName', { required: 'Batch name is required' })} placeholder="HSC-BATCH-2026" className={`w-full p-3 pl-2 border ${errors.batchName ? 'border-red-400' : 'border-gray-200'} rounded-lg text-sm focus:ring-2 focus:ring-indigo-200 outline-none transition-all bg-gray-50`} />
                                {errors.batchName && <p className="text-xs text-red-500 mt-1">{errors.batchName.message}</p>}
                            </div>
                        </div>

                        <div className="flex flex-col">
                            <label className="text-xs font-semibold text-gray-500 mb-2">Course Title *</label>
                            <div className="relative">
                                <select {...register('courseTitle', { required: 'Please select a course' })} className={`w-full p-3 p-3 border ${errors.courseTitle ? 'border-red-400' : 'border-gray-200'} rounded-lg text-sm focus:ring-2 focus:ring-indigo-200 outline-none bg-white appearance-none`}>
                                    <option value="">Select a course</option>
                                    <option value="HSC Model Test">HSC Model Test</option>
                                    <option value="SSC Preparation">SSC Preparation</option>
                                    <option value="Web Development">Web Development</option>
                                </select>
                                {errors.courseTitle && <p className="text-xs text-red-500 mt-1">{errors.courseTitle.message}</p>}
                            </div>
                        </div>

                        <div className="flex flex-col">
                            <label className="text-xs font-semibold text-gray-500 mb-2">Schedule (Day and Time) *</label>
                            <div className="relative">
                                <select {...register('schedule', { required: 'Schedule is required' })} className={`w-full p-3 pl-5 border ${errors.schedule ? 'border-red-400' : 'border-gray-200'} rounded-lg text-sm focus:ring-2 focus:ring-indigo-200 outline-none bg-white appearance-none`}>
                                    <option value="">Select a schedule</option>
                                    <option value="Sun (4:00PM - 5:00PM), Tue (4:00PM - 5:00PM), Thu (4:00PM - 5:00PM)">Sun, Tue, Thu (4:00PM - 5:00PM)</option>
                                    <option value="Mon (6:00PM - 7:30PM), Wed (6:00PM - 7:30PM)">Mon, Wed (6:00PM - 7:30PM)</option>
                                    <option value="Wed (2:00PM - 4:00PM)">Wed (2:00PM - 4:00PM)</option>
                                    <option value="Sat (9:00AM - 11:00AM), Sun (9:00AM - 11:00AM)">Sat, Sun (9:00AM - 11:00AM)</option>
                                    <option value="Fri (5:00PM - 7:00PM), Sat (5:00PM - 7:00PM)">Fri, Sat (5:00PM - 7:00PM)</option>
                                </select>
                                {errors.schedule && <p className="text-xs text-red-500 mt-1">{errors.schedule.message}</p>}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="flex flex-col">
                                <label className="text-xs font-semibold text-gray-500 mb-2">Course Fee (৳) *</label>
                                <div className="relative">
                                    <input type="number" {...register('courseFee', { required: 'Course fee is required' })} placeholder="3500" className={`w-full p-3 p-3 border ${errors.courseFee ? 'border-red-400' : 'border-gray-200'} rounded-lg text-sm focus:ring-2 focus:ring-indigo-200 outline-none bg-gray-50`} />
                                    {errors.courseFee && <p className="text-xs text-red-500 mt-1">{errors.courseFee.message}</p>}
                                </div>
                            </div>
                        </div>
                    </div>
                </form>

                <div className="px-6 py-4 border-t bg-white flex justify-end items-center gap-3 rounded-b-2xl">
                    <button type="button" onClick={() => { reset(); onClose(); }} className="text-sm font-semibold text-gray-600 hover:text-gray-800 px-4 py-2 rounded-md transition-all">Cancel</button>
                    <button onClick={handleSubmit(onSubmitHandler)} className="px-6 py-2 bg-indigo-600 text-white text-sm font-semibold rounded-md shadow hover:bg-indigo-700 transition-transform active:scale-95">Update Batch</button>
                </div>
            </div>
        </div>
    );
};

// --- 3. BatchCard Component ---
const BatchCard = ({ batch, onEdit }) => {
    const statusColor = {
        Active: 'bg-green-50 text-green-700',
        Upcoming: 'bg-blue-50 text-blue-700',
        Completed: 'bg-gray-50 text-gray-700',
    };

    return (
        <div className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-150 overflow-hidden">
            <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 h-1" />

            <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3 flex-1">
                        
                        <div className="flex-1 min-w-0">
                            <h3 className="text-lg font-bold text-gray-900 truncate">{batch.name}</h3>
                            <p className="text-sm text-gray-500 truncate">{batch.course}</p>
                        </div>
                    </div>
                    <button onClick={() => onEdit(batch)} className="p-2 rounded-lg bg-gray-100 hover:bg-indigo-100 text-gray-600 hover:text-indigo-600 transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
                    </button>
                </div>

                <div className="space-y-3 mb-4">
                    <div className="grid grid-cols-2 gap-3">
                        <div className="bg-gray-50 p-3 rounded-lg">
                            <div className="text-xs text-gray-500 font-medium mb-1">Fee</div>
                            <div className="text-lg font-bold text-gray-900">৳{batch.fee.toLocaleString()}</div>
                        </div>
                        <div className="bg-gray-50 p-3 rounded-lg">
                            <div className="text-xs text-gray-500 font-medium mb-1">Start Date</div>
                            <div className="text-sm font-semibold text-gray-900">{batch.enrollmentDate}</div>
                        </div>
                    </div>

                    <div className="bg-gray-50 p-3 rounded-lg">
                        <div className="text-xs text-gray-500 font-medium mb-2">Schedule</div>
                        <div className="space-y-1">
                            {batch.schedule.slice(0, 2).map((s, i) => (
                                <div key={i} className="text-xs text-gray-700 flex items-center gap-2">
                                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-indigo-500" />
                                    {s}
                                </div>
                            ))}
                            {batch.schedule.length > 2 && <div className="text-xs text-gray-400 pt-1">+{batch.schedule.length - 2} more</div>}
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-2 pt-3 border-t border-gray-100 flex-wrap">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColor[batch.status] || 'bg-gray-100 text-gray-700'}`}>{batch.status}</span>
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-50 text-purple-700">Recorded</span>
                </div>
            </div>
        </div>
    );
};


// --- 4. Main Dashboard Component ---
const BatchDashboard = () => {
    const [batches, setBatches] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState('All');
    const [modalOpen, setModalOpen] = useState(false);
    const [editingBatch, setEditingBatch] = useState(null);

    useEffect(() => {
        // simulate fetch
        setTimeout(() => {
            setBatches(DUMMY_BATCHES);
            setLoading(false);
        }, 300);
    }, []);

    const filtered = batches.filter(b => {
        const matchesSearch = b.name.toLowerCase().includes(search.toLowerCase()) || b.course.toLowerCase().includes(search.toLowerCase());
        const matchesFilter = filter === 'All' || b.status === filter || b.branch === filter;
        return matchesSearch && matchesFilter;
    });

    const openEditModal = (batch) => {
        setEditingBatch(batch);
        setModalOpen(true);
    };

    const handleSubmit = (data) => {
        if (!editingBatch) return;
        setBatches(prev => prev.map(b => b.id === editingBatch.id ? { ...b, name: data.batchName || b.name, course: data.courseTitle || b.course, fee: Number(data.courseFee) || b.fee } : b));
        setModalOpen(false);
        setEditingBatch(null);
    };

    return (
        <div className="bg-gray-50 min-h-screen p-5">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                <div className="flex items-center gap-3 w-full md:w-auto">
                    <div className="relative w-full max-w-md">
                        <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search batches or courses" className="w-full p-3 pr-3 py-2 border border-gray-200 rounded-md shadow-sm focus:ring-1 focus:ring-indigo-200 focus:border-indigo-300" />
                    </div>

                    <select value={filter} onChange={e => setFilter(e.target.value)} className="p-2 border border-gray-200 rounded-md shadow-sm">
                        <option value="All">All</option>
                        <option value="Active">Active</option>
                        <option value="Upcoming">Upcoming</option>
                        
                    </select>
                </div>
            </div>

            {loading ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {Array.from({ length: 3 }).map((_, i) => (
                        <div key={i} className="h-40 bg-white rounded-md animate-pulse" />
                    ))}
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filtered.map(batch => (
                        <BatchCard key={batch.id} batch={batch} onEdit={openEditModal} />
                    ))}
                </div>
            )}

            <EditBatchModal isOpen={modalOpen} onClose={() => { setModalOpen(false); setEditingBatch(null); }} batch={editingBatch} onSubmit={handleSubmit} />
        </div>
    );
};

export default BatchDashboard;
