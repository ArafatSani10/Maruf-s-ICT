import React, { useState } from 'react';
import { FaBook, FaMoneyBillWave, FaClock, FaSearch, FaSortAmountDown } from 'react-icons/fa';

const DUMMY_COURSES = [
    {
        id: 1,
        title: 'HSC Model Test',
        description: 'Comprehensive model tests covering all subjects for HSC candidates.',
        price: 3500,
        duration: '3 Months',
        showOnHome: true,
    },
    {
        id: 2,
        title: 'SSC Preparation',
        description: 'Focused preparation classes and materials for SSC examinees.',
        price: 4200,
        duration: '4 Months',
        showOnHome: false,
    },
    {
        id: 3,
        title: 'Web Development',
        description: 'Learn MERN stack development from scratch with real-world projects.',
        price: 12000,
        duration: '6 Months',
        showOnHome: true,
    }
];

const CourseCard = ({ course, onToggleHome }) => {
    return (
        <div className="group bg-white rounded-sm border border-slate-200 p-6 hover:border-indigo-500/50 hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300">
            <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-indigo-50 rounded-xl group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                    <FaBook className="text-xl" />
                </div>
                <div className="flex items-center gap-3">
                    <div className="flex flex-col items-end">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tight">Home View</span>
                        <button
                            onClick={() => onToggleHome(course.id)}
                            className={`relative inline-flex h-5 w-10 items-center rounded-full transition-colors focus:outline-none mt-1 ${course.showOnHome ? 'bg-emerald-500' : 'bg-slate-200'}`}
                        >
                            <span className={`inline-block h-3 w-3 transform rounded-full bg-white transition-transform ${course.showOnHome ? 'translate-x-6' : 'translate-x-1'}`} />
                        </button>
                    </div>
                </div>
            </div>

            <div className="mb-4">
                <h3 className="text-xl font-bold text-slate-800 leading-tight mb-2">{course.title}</h3>
                <p className="text-sm text-slate-500 line-clamp-2">{course.description}</p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-50">
                <div className="flex items-center gap-2">
                    <FaMoneyBillWave className="text-indigo-500 text-sm" />
                    <div>
                        <p className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">Price</p>
                        <p className="text-sm font-bold text-slate-700">৳{course.price.toLocaleString()}</p>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <FaClock className="text-indigo-500 text-sm" />
                    <div>
                        <p className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">Duration</p>
                        <p className="text-sm font-bold text-slate-700">{course.duration}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Courses = () => {
    const [courses, setCourses] = useState(DUMMY_COURSES);
    const [searchQuery, setSearchQuery] = useState('');
    const [sortBy, setSortBy] = useState('default');

    const handleToggleHome = (id) => {
        setCourses(prev => prev.map(c => c.id === id ? { ...c, showOnHome: !c.showOnHome } : c));
    };

    const processedCourses = [...courses]
        .filter(course => course.title.toLowerCase().includes(searchQuery.toLowerCase()))
        .sort((a, b) => {
            if (sortBy === 'lowToHigh') return a.price - b.price;
            if (sortBy === 'highToLow') return b.price - a.price;
            return 0;
        });

    return (
        <div className="bg-[#f8fafc] min-h-screen p-3 md:p-5 font-sans">
            <div className="max-w-full mx-auto">
                
                <div className="flex flex-wrap items-center gap-3 mb-8">
                    <div className="relative w-full max-w-xs">
                        <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm" />
                        <input 
                            type="text"
                            placeholder="Search courses..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-9 pr-4 py-2 text-sm bg-white border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500/10 focus:border-indigo-500 outline-none transition-all shadow-sm"
                        />
                    </div>

                    <div className="relative w-full max-w-[180px]">
                        <FaSortAmountDown className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm" />
                        <select 
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="w-full pl-9 pr-8 py-2 text-sm bg-white border border-slate-200 rounded-lg outline-none focus:border-indigo-500 font-medium text-slate-600 appearance-none cursor-pointer shadow-sm"
                        >
                            <option value="default">Sort by Default</option>
                            <option value="lowToHigh">Price: Low-High</option>
                            <option value="highToLow">Price: High-Low</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-400">
                            <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/></svg>
                        </div>
                    </div>
                </div>

                {processedCourses.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {processedCourses.map(course => (
                            <CourseCard
                                key={course.id}
                                course={course}
                                onToggleHome={handleToggleHome}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 bg-white border border-dashed border-slate-200 rounded-lg">
                        <p className="text-slate-400 text-sm font-medium">No courses found matching your search.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Courses;