import React, { useState, useEffect } from 'react';
import { FiChevronDown } from 'react-icons/fi';

const initialOptions = {
    branches: ['Kushtia Branch', 'Dhaka Branch', 'Khulna Branch'],
    classes: ['Admissions', 'HSC', 'SSC'],
    batches: ['Select Batch', 'Batch 101', 'Batch 102'],
    types: ['Video', 'PDF', 'Quiz'],
    chapters: ['Select Chapter', 'Chapter 1', 'Chapter 2'],
};

const SelectField = ({ label, options, value, onChange }) => (
    <div className="flex-1 min-w-[150px] mx-2">
        <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
        <div className="relative">
            <select
                value={value}
                onChange={onChange}
                className="block w-full appearance-none bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 pr-8 text-gray-700 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm cursor-pointer"
            >
                {options.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>
            <FiChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
        </div>
    </div>
);

const Module = () => {
    const [filters, setFilters] = useState({
        branch: initialOptions.branches[0],
        class: initialOptions.classes[0],
        batch: initialOptions.batches[0],
        type: initialOptions.types[0],
        chapter: initialOptions.chapters[0],
    });
    const [options, setOptions] = useState(initialOptions);

    useEffect(() => {
        //   api asar poree
    }, [filters.branch, filters.class]);

    const handleFilterChange = (name) => (event) => {
        setFilters(prev => ({
            ...prev,
            [name]: event.target.value,
        }));
    };

    return (
        <div className="">
            <div className="bg-white p-6 rounded-md shadow-md border border-gray-100">
                <div className="flex flex-wrap -mx-2">

                    <SelectField
                        label="Branch"
                        options={options.branches}
                        value={filters.branch}
                        onChange={handleFilterChange('branch')}
                    />

                    <SelectField
                        label="Class"
                        options={options.classes}
                        value={filters.class}
                        onChange={handleFilterChange('class')}
                    />

                    <SelectField
                        label="Batch"
                        options={options.batches}
                        value={filters.batch}
                        onChange={handleFilterChange('batch')}
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

                </div>
            </div>
        </div>
    );
};

export default Module;