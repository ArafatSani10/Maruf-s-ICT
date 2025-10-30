import React from "react";
import { Clock, Users, MapPin, Star, ArrowRight } from "lucide-react";

const batches = [
    {
        title: "SSC-2027 Basabo",
        branch: "Class 9 - Basabo Branch",
        price: "৳7,000",
        originalPrice: "৳8,500",
        type: ["Mixed", "Live", "27 left"],
        schedule: "Monday: 7:00PM - 8:00PM, Wednesday: 7:00PM - 8:00PM",
        enrollment: 33,
        rating: 4.8,
        students: 120,
        discount: "18% off"
    },
    {
        title: "HSC 2026 (Basabo)",
        branch: "Class inter_2nd - Basabo Branch",
        price: "৳9,000",
        originalPrice: "৳10,500",
        type: ["Mixed", "Live", "23 left"],
        schedule: "Monday: 5:00PM - 6:00PM, Wednesday: 5:00PM - 6:00PM",
        enrollment: 43,
        rating: 4.9,
        students: 156,
        discount: "14% off"
    },
    {
        title: "SSC-2026 BV (Chemistry+Physics)",
        branch: "Class 10 - Shiddheswari Branch",
        price: "৳12,000",
        originalPrice: "৳14,000",
        type: ["Mixed", "Live", "12 left"],
        schedule: "Friday: 11:00AM - 12:00PM, Saturday: 11:00AM - 12:00PM",
        enrollment: 76,
        rating: 4.7,
        students: 89,
        discount: "14% off"
    },
    {
        title: "SSC-2026 Advanced Batch",
        branch: "Class 10 - Dhanmondi Branch",
        price: "৳15,000",
        originalPrice: "৳17,000",
        type: ["Premium", "Live", "8 left"],
        schedule: "Tuesday: 4:00PM - 6:00PM, Thursday: 4:00PM - 6:00PM",
        enrollment: 92,
        rating: 4.9,
        students: 200,
        discount: "12% off"
    },
];

const FeaturedBatchesGrid = () => {
    return (
        <div className="bg-[#00091a] text-white py-10 px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 bg-blue-900/20 border border-blue-500/30 px-4 py-2 rounded-full mb-4">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium text-blue-300">Featured Batches</span>
                </div>
                <h2 className="text-2xl lg:text-5xl font-bold text-[#00baff]">
                    Discover Featured Batches
                </h2>
                <p className="text-gray-300 mt-4 max-w-2xl mx-auto text-lg leading-relaxed">
                    Join thousands of successful students in our comprehensive courses
                    designed to excel in your academic journey with expert guidance.
                </p>
            </div>

            {/* Grid */}
            <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
                {batches.map((batch, index) => (
                    <div
                        key={index}
                        // MODIFIED: Added shadow-xl, hover:shadow-2xl, hover:border-blue-500/50, and transition classes for a 'thicker' look.
                        className="group bg-gradient-to-br from-[#0f1e3a] to-[#0a1630] border border-gray-700 rounded-2xl overflow-hidden transition-all duration-300 hover:border-blue-500/50"
                    >
                        {/* Top Section */}
                        <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-purple-800 px-6 py-5 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10"></div>
                            <div className="relative z-10 flex justify-between items-start">
                                <div className="flex-1">
                                    <h3 className="font-bold text-xl mb-1">{batch.title}</h3>
                                    <div className="flex items-center gap-1 text-blue-100">
                                        <MapPin className="w-4 h-4" />
                                        <p className="text-sm">{batch.branch}</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <span className="text-2xl font-bold">{batch.price}</span>
                                </div>
                            </div>
                        </div>

                        {/* Middle Section */}
                        <div className="p-6">
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center gap-2">
                                    <div className="flex items-center gap-1">
                                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                        <span className="font-semibold">{batch.rating}</span>
                                    </div>
                                    <span className="text-gray-400">•</span>
                                    <div className="flex items-center gap-1">
                                        <Users className="w-4 h-4 text-blue-400" />
                                        <span className="text-sm text-gray-300">{batch.students} students</span>
                                    </div>
                                </div>
                            </div>

                            {/* Type Tags */}
                            <div className="flex flex-wrap gap-2 mb-4">
                                {batch.type.map((tag, i) => (
                                    <span
                                        key={i}
                                        className={`px-3 py-1 text-xs font-medium rounded-full border ${tag === 'Premium'
                                                ? 'bg-purple-500/20 border-purple-500 text-purple-300'
                                                : tag === 'Live'
                                                    ? 'bg-red-500/20 border-red-500 text-red-300'
                                                    : 'bg-blue-500/20 border-blue-500 text-blue-300'
                                            }`}
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Schedule */}
                            <div className="flex items-start gap-3 text-sm text-gray-300 mb-5 p-3 bg-white/5 rounded-lg">
                                <Clock className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                                <div>
                                    <p className="font-semibold text-white mb-1">Class Schedule</p>
                                    <p>{batch.schedule}</p>
                                </div>
                            </div>

                            {/* Enrollment */}
                            <div className="mb-6">
                                <div className="flex justify-between items-center mb-2">
                                    <p className="text-sm font-semibold">Enrollment Progress</p>
                                    <p className="text-sm font-bold text-blue-400">{batch.enrollment}%</p>
                                </div>
                                <div className="bg-gray-800 h-3 rounded-full overflow-hidden">
                                    <div
                                        className="bg-gradient-to-r from-blue-500 to-cyan-400 h-3 rounded-full transition-all duration-1000 ease-out"
                                        style={{ width: `${batch.enrollment}%` }}
                                    ></div>
                                </div>
                                <p className="text-xs text-gray-400 mt-2">
                                    Limited seats available - Enroll now!
                                </p>
                            </div>

                            {/* CTA */}
                            <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center gap-2">
                                <span>Enroll Now</span>
                                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeaturedBatchesGrid;