import React from "react";
import { ShoppingCart, ArrowRight } from "lucide-react"; // Imported useful icons

const books = [
    {
        image: "https://the-royal-scientific-publications.com/uploads/products/thumbnail/2025/10/05/Higher-Math-1st-Paper---Exercise-Book-HSC-2027_1759657768.webp",
        title: "Higher-Math 1st Paper",
        price: "৳450",
    },
    {
        image: "https://the-royal-scientific-publications.com/uploads/products/thumbnail/2025/09/21/ICT-----Exercise-Book-HSC-2027_1758453661.webp",
        title: "HSC ICT Guide",
        price: "৳380",
    },
    {
        image: "https://the-royal-scientific-publications.com/uploads/products/thumbnail/2025/09/15/Biology-1st-Paper---Exercise-Book-HSC-2027_1757924122.webp",
        title: "Biology 1st Paper",
        price: "৳520",
    },
    {
        image: "https://the-royal-scientific-publications.com/uploads/products/thumbnail/2025/09/14/Physics-1st-Paper---Exercise-Book-HSC-2027_1757819054.webp",
        title: "Physics 1st Paper",
        price: "৳410",
    },
    {
        image: "https://the-royal-scientific-publications.com/uploads/products/thumbnail/2025/09/14/Chemistry-1st-Paper---Exercise-Book-HSC-2027_1757827077.webp",
        title: "Chemistry 1st Paper",
        price: "৳350",
    },
    {
        image: "https://the-royal-scientific-publications.com/uploads/products/thumbnail/2025/09/14/Physics-1st-Paper---Exercise-Book-HSC-2027_1757819054.webp",
        title: "Physics 2nd Paper",
        price: "৳420",
    },
    {
        image: "https://the-royal-scientific-publications.com/uploads/products/thumbnail/2025/09/21/ICT-----Exercise-Book-HSC-2027_1758453661.webp",
        title: "SSC ICT Guide",
        price: "৳300",
    },
    {
        image: "https://the-royal-scientific-publications.com/uploads/products/thumbnail/2025/10/05/Higher-Math-1st-Paper---Exercise-Book-HSC-2027_1759657768.webp",
        title: "Higher-Math 2nd Paper",
        price: "৳480",
    },
];

const BookGridPage = () => {
    return (
        <div className="bg-[#00091a] text-white py-16 px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 bg-blue-900/20 border border-blue-500/30 px-4 py-2 rounded-full mb-4">
                    <ShoppingCart className="w-4 h-4 text-cyan-400" />
                    <span className="text-sm font-medium text-blue-300">Our Publications</span>
                </div>
                <h2 className="text-2xl  lg:text-4xl font-bold text-[#00baff]">
                    📚 Maruf's ICT Care Books Collection
                </h2>
                <p className="text-gray-300 mt-4 max-w-2xl mx-auto text-lg leading-relaxed">
                    Explore our specially curated collection of academic and technical books to excel in your studies.
                </p>
            </div>

            {/* Grid System for Books */}
            <div className="max-w-7xl mx-auto grid gap-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
                {books.map((book, index) => (
                    <div
                        key={index}
                        // Beautiful Card Style for Grid
                        className="group bg-gradient-to-br from-[#0f1e3a] to-[#0a1630] border border-gray-700 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300 transform hover:-translate-y-1"
                    >
                        {/* Book Image Container */}
                        <div className="aspect-[3/4] overflow-hidden flex items-center justify-center p-4 bg-[#0f1e3a] border-b border-gray-700/50">
                            <img
                                src={book.image}
                                alt={book.title}
                                // Adjusted object-contain for better visual fitting in the fixed aspect ratio
                                className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-[1.05]"
                            />
                        </div>

                        {/* Details and CTA */}
                        <div className="p-4 flex flex-col items-center text-center">
                            <h3 className="font-bold text-lg mb-1 truncate w-full px-1">{book.title}</h3>
                            <p className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 mb-4">
                                {book.price}
                            </p>
                            
                            {/* Purchase Button */}
                            <button className="w-full bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-700 hover:to-blue-800 text-white font-semibold py-2 px-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 text-sm">
                                <span>Buy Now</span>
                                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BookGridPage;