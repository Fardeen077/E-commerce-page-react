import React, { useState } from "react";
import image1 from "../assets/images/image-product-1-thumbnail.jpg";
import image2 from "../assets/images/image-product-1.jpg";
import image3 from "../assets/images/image-product-2-thumbnail.jpg";
import image4 from "../assets/images/image-product-2.jpg";
import image5 from "../assets/images/image-product-3-thumbnail.jpg";
import image6 from "../assets/images/image-product-3.jpg";
import image7 from "../assets/images/image-product-4.jpg";
import image8 from "../assets/images/image-product-4-thumbnail.jpg";
import plusIcon from "../assets/images/icon-plus.svg";
import minus from "../assets/images/icon-minus.svg";
import CartIcon from "../assets/images/icon-cart.svg";
import previousIcon from "../assets/images/icon-previous.svg";
import nextIcon from "../assets/images/icon-next.svg";

function Home() {
    const [count, setCount] = useState(0);
    const [currentImage, setCurrentImage] = useState(0);

    const images = [image2, image4, image6, image7];

    const handleNext = () => {
        setCurrentImage((prev) => (prev + 1) % images.length);
    };

    const handlePrev = () => {
        setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <div className="flex flex-col md:flex-row justify-center items-center md:justify-between md:px-10 gap-10 ">
            {/* Left Section */}
            <div className="w-full md:w-1/2 flex flex-col items-center">
                <div className="relative sm:max-w-md md:max-w-lg lg:max-w-xl">
                    {/* Mobile Image Slider */}
                    <div className="block sm:hidden">
                        <img
                            src={images[currentImage]}
                            alt={`Slide ${currentImage + 1}`}
                            className="md:rounded-lg w-[100vw] h-[50vh] sm:h-auto object-cover"
                        />
                        <button
                            onClick={handlePrev}
                            className="absolute top-1/2 left-4 -translate-y-1/2 bg-white rounded-full p-3 shadow-md"
                        >
                            <img src={previousIcon} alt="Previous" />
                        </button>
                        <button
                            onClick={handleNext}
                            className="absolute top-1/2 right-4 -translate-y-1/2 bg-white rounded-full p-3 shadow-md"
                        >
                            <img src={nextIcon} alt="Next" />
                        </button>
                    </div>

                    {/* Static Image for Larger Screens */}
                    <img
                        src={image2}
                        alt="Main Product"
                        className="hidden sm:block rounded-lg w-full h-auto md:w-96  md:mt-8 lg:w-96 lg:mt-0"
                    />
                </div>

                {/* Thumbnails */}
                <div className="hidden sm:flex justify-between mt-4 space-x-5">
                    {[image1, image3, image5, image8].map((src, idx) => (
                        <img
                            key={idx}
                            src={src}
                            alt={`Thumbnail ${idx + 1}`}
                            className="w-20 h-20 rounded-lg hover:border-2 border-orange-500 cursor-pointer"
                        />
                    ))}
                </div>
            </div>

            {/* Right Section */}
            <div className="w-full md:w-1/2 text-center md:text-left px-4 md:px-8 mt-10 md:mt-0">
                <p className="text-sm font-semibold text-gray-500 ">SNEAKER COMPANY</p>
                <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mt-2">
                    Fall Limited Sneakers
                </h1>
                <p className="text-gray-700 mt-4 leading-relaxed">
                    These low-profile sneakers are your perfect casual wear companion.
                    Featuring a durable rubber outer sole, they'll withstand everything
                    the weather can offer.
                </p>

                {/* Pricing */}
                <div className="flex flex-col md:flex-row items-center mt-5 space-y-4 md:space-y-0">
                    <div className="flex items-center">
                        <h1 className="text-2xl font-bold">$125.00</h1>
                        <span className="bg-orange-500 text-white text-sm font-semibold ml-3 px-2 py-1 rounded-lg">
                            50%
                        </span>
                    </div>
                    <p className="line-through text-gray-500 ml-4">$250.00</p>
                </div>

                {/* Quantity and Cart */}
                <div className="flex flex-col md:flex-row items-center mt-4 space-y-4 md:space-y-0 md:space-x-4 ">
                    <div className="flex items-center bg-gray-100 md:px-4 md:py-2 py-3 px-44 rounded-lg">
                        <button
                            onClick={() => setCount(count > 0 ? count - 1 : 0)}
                            className="text-xl font-bold text-gray-500 "
                        >
                            <img src={minus} alt="Decrease Quantity" />
                        </button>
                        <span className="mx-4 text-lg font-semibold">{count}</span>
                        <button
                            onClick={() => setCount(count + 1)}
                            className="text-xl font-bold text-gray-500"
                        >
                            <img src={plusIcon} alt="Increase Quantity" />
                        </button>
                    </div>
                    <button className="flex items-center bg-orange-500 text-white md:px-6 md:py-3 rounded-lg font-semibold hover:bg-orange-400 focus:ring-2 focus:ring-orange-500 py-3 px-40">
                        <img src={CartIcon} alt="Cart" className="mr-2" />
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Home;
