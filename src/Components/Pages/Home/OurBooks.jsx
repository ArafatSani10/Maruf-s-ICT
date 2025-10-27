import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const books = [
    {
        image: "https://the-royal-scientific-publications.com/uploads/products/thumbnail/2025/10/05/Higher-Math-1st-Paper---Exercise-Book-HSC-2027_1759657768.webp",
        title: "Higher-Math",
        price: "৳450",
    },
    {
        image: "https://the-royal-scientific-publications.com/uploads/products/thumbnail/2025/09/21/ICT-----Exercise-Book-HSC-2027_1758453661.webp",
        title: "HSC ICT Guide",
        price: "৳380",
    },
    {
        image: "https://the-royal-scientific-publications.com/uploads/products/thumbnail/2025/09/15/Biology-1st-Paper---Exercise-Book-HSC-2027_1757924122.webp",
        title: "Biology",
        price: "৳520",
    },
    {
        image: "https://the-royal-scientific-publications.com/uploads/products/thumbnail/2025/09/14/Physics-1st-Paper---Exercise-Book-HSC-2027_1757819054.webp",
        title: "Physics for HSC ",
        price: "৳410",
    },
    {
        image: "https://the-royal-scientific-publications.com/uploads/products/thumbnail/2025/09/14/Chemistry-1st-Paper---Exercise-Book-HSC-2027_1757827077.webp",
        title: "Chemistry-1st pepar",
        price: "৳350",
    },
];

const OurBooks = () => {
    return (
        <div className="bg-[#00091a] text-white py-16 px-6">
            {/* Header */}
            <div className="text-center mb-10">
                <h2 className="text-4xl text-[#00baff] font-bold">
                    Maruf's ICT Care  Books
                </h2>
                <p className="text-gray-400 mt-3 max-w-xl mx-auto">
                    Explore our specially curated collection of academic and technical
                    books to enhance your learning journey.
                </p>
            </div>

            {/* Swiper Slider */}
            <Swiper
                modules={[Navigation, Autoplay]}
                navigation
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                spaceBetween={15}
                slidesPerView={1}
                breakpoints={{
                   
                    640: { slidesPerView: 2, spaceBetween: 20 },
                    1024: { slidesPerView: 3, spaceBetween: 30 },
                    1280: { slidesPerView: 4, spaceBetween: 30 },
                }}
                className="max-w-7xl mx-auto"
            >
                {books.map((book, index) => (
                    <SwiperSlide key={index}>
                        <div className="bg-[#00091a] border border-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-blue-900/40 transition-all duration-300 group">
                            {/* Retaining the responsive image height fix */}
                            <div className="h-72 sm:h-80 md:h-96 overflow-hidden flex items-center justify-center p-4">
                                <img
                                    src={book.image}
                                    alt={book.title}
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <div className="p-5 text-center">
                                <h3 className="font-semibold text-lg mb-1">{book.title}</h3>
                                <p className="text-blue-400 font-medium">{book.price}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default OurBooks;