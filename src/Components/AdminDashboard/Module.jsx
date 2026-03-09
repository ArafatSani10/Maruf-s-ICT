import React, { useState, useEffect, useRef } from 'react';
import { FiChevronDown, FiPlus, FiRefreshCw, FiLink, FiType, FiImage, FiEdit3, FiUploadCloud, FiX } from 'react-icons/fi';

const initialOptions = {
    batches: ['Select Batch', 'Batch 101', 'Batch 102', 'Batch 103'],
    courses: ['Select Course', 'Web Development', 'Mobile App', 'Data Science', 'AI/ML'],
    types: ['Video', 'PDF', 'Quiz', 'Assignment'],
    chapters: ['Select Chapter', 'Chapter 1', 'Chapter 2', 'Chapter 3', 'Chapter 4'],
    classes: ['Admissions', 'HSC', 'SSC', 'Class 9', 'Class 10'],
};

const SelectField = ({ label, options, value, onChange }) => (
    <div className="relative group">
        <label className="block text-xs font-semibold text-gray-600 mb-2.5 uppercase ">{label}</label>
        <div className="relative">
            <select
                value={value}
                onChange={onChange}
                className="w-full appearance-none bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-gray-200 rounded-lg shadow-sm py-3 px-4 pr-10 text-gray-700 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:shadow-lg sm:text-sm cursor-pointer transition-all duration-200 hover:border-blue-300 group-hover:border-blue-300"
            >
                {options.map((option, index) => (
                    <option key={index} value={option} className="text-gray-700">
                        {option}
                    </option>
                ))}
            </select>
            <FiChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-blue-400 pointer-events-none group-hover:text-blue-600 transition-colors duration-200" />
        </div>
    </div>
);

const InputField = ({ label, type = 'text', value, onChange, placeholder, icon: Icon }) => (
    <div className="relative group">
        <label className="block text-xs font-semibold text-gray-600 mb-2.5 uppercase ">{label}</label>
        <div className="relative">
            {Icon && <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-blue-400 pointer-events-none group-hover:text-blue-600 transition-colors duration-200" />}
            <input
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={`w-full bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-gray-200 rounded-lg shadow-sm py-3 px-4 ${Icon ? 'pl-10' : ''} text-gray-700 font-medium placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:shadow-lg sm:text-sm cursor-text transition-all duration-200 hover:border-blue-300 group-hover:border-blue-300`}
            />
        </div>
    </div>
);

const TextAreaField = ({ label, value, onChange, placeholder, icon: Icon }) => (
    <div className="relative group h-full flex flex-col">
        <label className="block text-xs font-semibold text-gray-600 mb-2.5 uppercase ">{label}</label>
        <div className="relative flex-grow">
            {Icon && <Icon className="absolute left-3 top-4 w-5 h-5 text-blue-400 pointer-events-none group-hover:text-blue-600 transition-colors duration-200" />}
            <textarea
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={`w-full h-full min-h-[150px] bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-gray-200 rounded-lg shadow-sm py-3 px-4 ${Icon ? 'pl-10' : ''} text-gray-700 font-medium placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:shadow-lg sm:text-sm cursor-text transition-all duration-200 hover:border-blue-300 group-hover:border-blue-300 resize-none`}
            />
        </div>
    </div>
);

const FileUploadField = ({ label, file, setFile, icon: Icon }) => {
    const fileInputRef = useRef(null);

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
            setFile(selectedFile);
        }
    };

    const removeFile = () => {
        setFile(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    return (
        <div className="relative group">
            <label className="block text-xs font-semibold text-gray-600 mb-2.5 uppercase ">{label}</label>
            <div className="relative">
                <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    accept="image/*"
                    className="hidden"
                />
                <button
                    type="button"
                    onClick={() => fileInputRef.current.click()}
                    className="w-full flex items-center justify-between gap-3 bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-gray-200 rounded-lg shadow-sm py-3 px-4 text-gray-700 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:shadow-lg sm:text-sm transition-all duration-200 hover:border-blue-300 group-hover:border-blue-300"
                >
                    <span className="flex items-center gap-2 truncate">
                        {Icon && <Icon className="w-5 h-5 text-blue-400 group-hover:text-blue-600 transition-colors duration-200" />}
                        {file ? file.name : 'Choose image...'}
                    </span>
                    {file ? (
                        <FiX onClick={(e) => {e.stopPropagation(); removeFile();}} className="w-5 h-5 text-gray-400 hover:text-red-500" />
                    ) : (
                        <FiUploadCloud className="w-5 h-5 text-blue-400 group-hover:text-blue-600 transition-colors duration-200" />
                    )}
                </button>
            </div>
        </div>
    );
};

const Module = () => {
    const [filters, setFilters] = useState({
        batch: initialOptions.batches[0],
        course: initialOptions.courses[0],
        type: initialOptions.types[0],
        chapter: initialOptions.chapters[0],
        class: initialOptions.classes[0],
        videoTitle: '',
        videoLink: '',
        description: '',
    });
    const [thumbnailFile, setThumbnailFile] = useState(null);
    const [options, setOptions] = useState(initialOptions);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
    }, [filters.batch, filters.course]);

    const handleFilterChange = (name) => (event) => {
        setFilters(prev => ({
            ...prev,
            [name]: event.target.value,
        }));
    };

    const handleCreateModule = () => {
        setLoading(true);
        console.log('Creating module with data:', { ...filters, thumbnail: thumbnailFile });
        setTimeout(() => {
            setLoading(false);
            alert('Module created successfully!');
        }, 1000);
    };

    const handleReset = () => {
        setFilters({
            batch: initialOptions.batches[0],
            course: initialOptions.courses[0],
            type: initialOptions.types[0],
            chapter: initialOptions.chapters[0],
            class: initialOptions.classes[0],
            videoTitle: '',
            videoLink: '',
            description: '',
        });
        setThumbnailFile(null);
    };

    const isValid = !filters.batch.startsWith('Select') &&
        !filters.course.startsWith('Select') &&
        !filters.type.startsWith('Select') &&
        filters.videoTitle.trim() !== '' &&
        filters.videoLink.trim() !== '';

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-4 md:p-6 lg:p-3 font-sans">
            <div className="max-w-full mx-auto">
                <div className="bg-white rounded-sm shadow-xl border border-gray-100 overflow-hidden">
                    <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 px-8 py-8 md:py-10">
                        <h2 className="text-xl md:text-4xl font-extrabold text-white flex items-center gap-4 ">
                            <div className="bg-white bg-opacity-20 p-3 rounded-sm shadow-inner">
                                <FiPlus className="w-8 h-8" />
                            </div>
                            Create New Module
                        </h2>
                        <p className="text-blue-100 text-lg mt-3 max-w-3xl">Configure your module by selecting the appropriate details and providing video content information.</p>
                    </div>

                    <div className="p-8 md:p-5">
                        <div>
                            <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2"><span className="w-1.5 h-6 bg-blue-500 rounded-full"></span>Module Classification</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 mb-10">
                                <SelectField
                                    label="Batch"
                                    options={options.batches}
                                    value={filters.batch}
                                    onChange={handleFilterChange('batch')}
                                />
                                <SelectField
                                    label="Course"
                                    options={options.courses}
                                    value={filters.course}
                                    onChange={handleFilterChange('course')}
                                />
                                <SelectField
                                    label="Type"
                                    options={options.types}
                                    value={filters.type}
                                    onChange={handleFilterChange('type')}
                                />
                                <SelectField
                                    label="Chapter"
                                    options={options.chapters}
                                    value={filters.chapter}
                                    onChange={handleFilterChange('chapter')}
                                />
                                <SelectField
                                    label="Class"
                                    options={options.classes}
                                    value={filters.class}
                                    onChange={handleFilterChange('class')}
                                />
                            </div>

                            <div className="border-t border-gray-100 pt-10 mt-10">
                                <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2"><span className="w-1.5 h-6 bg-indigo-500 rounded-full"></span>Video Content & Details</h3>
                                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                                    <div className="lg:col-span-2 space-y-6">
                                        <InputField
                                            label="Video Title"
                                            icon={FiType}
                                            value={filters.videoTitle}
                                            onChange={handleFilterChange('videoTitle')}
                                            placeholder="e.g., Introduction to React Hooks"
                                        />
                                        <InputField
                                            label="Video Link (URL)"
                                            type="url"
                                            icon={FiLink}
                                            value={filters.videoLink}
                                            onChange={handleFilterChange('videoLink')}
                                            placeholder="https://www.youtube.com/watch?v=..."
                                        />
                                        <FileUploadField
                                            label="Video Thumbnail"
                                            icon={FiImage}
                                            file={thumbnailFile}
                                            setFile={setThumbnailFile}
                                        />
                                    </div>
                                    <div className="lg:col-span-1">
                                        <TextAreaField
                                            label="Description"
                                            icon={FiEdit3}
                                            value={filters.description}
                                            onChange={handleFilterChange('description')}
                                            placeholder="Provide a detailed description of the video content..."
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {isValid && (
                            <div className="mt-12 pt-8 border-t border-gray-100 bg-gray-50 rounded-xl p-6">
                                <p className="text-xs font-semibold text-gray-500 uppercase mb-4 ">Summary</p>
                                <div className="flex flex-wrap gap-3">
                                    <span className="inline-flex items-center gap-2.5 bg-white border border-gray-200 text-gray-800 text-sm font-semibold px-4 py-2.5 rounded-lg shadow-sm">
                                        <span className="text-xs uppercase font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded">TITLE</span>
                                        {filters.videoTitle}
                                    </span>
                                    <span className="inline-flex items-center gap-2.5 bg-white border border-gray-200 text-gray-800 text-sm font-semibold px-4 py-2.5 rounded-lg shadow-sm">
                                        <span className="text-xs uppercase font-bold text-indigo-600 bg-indigo-50 px-2 py-1 rounded">TYPE</span>
                                        {filters.type}
                                    </span>
                                    {thumbnailFile && (
                                         <span className="inline-flex items-center gap-2.5 bg-white border border-gray-200 text-gray-800 text-sm font-semibold px-4 py-2.5 rounded-lg shadow-sm">
                                            <FiImage className="w-4 h-4 text-emerald-500" />
                                            Thumbnail Added
                                        </span>
                                    )}
                                </div>
                            </div>
                        )}

                        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-end border-t border-gray-100 pt-8">
                            <button
                                onClick={handleReset}
                                className="flex items-center justify-center gap-2.5 px-8 py-3.5 bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold rounded-xl transition-all duration-200 active:scale-95 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 text-base"
                            >
                                <FiRefreshCw className="w-5 h-5" />
                                Reset Form
                            </button>
                            <button
                                onClick={handleCreateModule}
                                disabled={!isValid || loading}
                                className={`flex items-center justify-center gap-2.5 px-10 py-3.5 font-bold rounded-xl transition-all duration-200 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 text-base ${isValid && !loading
                                        ? 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-indigo-200 focus:ring-blue-400'
                                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                    }`}
                            >
                                {loading ? (
                                    <>
                                        <FiRefreshCw className="w-5 h-5 animate-spin" />
                                        Creating Module...
                                    </>
                                ) : (
                                    <>
                                        <FiPlus className="w-6 h-6" />
                                        Create Module
                                    </>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <p className="text-center text-gray-500 text-sm mt-8">Powered by SmartEdu Module Manager v1.0</p>
            </div>
        </div>
    );
};

export default Module;