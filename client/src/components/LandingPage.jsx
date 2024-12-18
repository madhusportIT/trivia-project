import React from "react";
import "../index.css";
import MainCarousel from "./Carousel";
import { NavLink } from "react-router";

const LandingPage = () => {
    return (
        <div className="bg-gray-50 font-sans">
            <header className="flex justify-between items-center p-4 bg-white shadow">
                <div className="flex items-center">
                    <img
                        src="https://static-00.iconduck.com/assets.00/green-heart-emoji-2048x1835-ime8vvj2.png"
                        alt="logo"
                        className="mr-2 h-8 w-15"
                    />
                    <h1 className="text-2xl font-bold text-green-600">Vicodin</h1>
                </div>
                <nav className="space-x-6 hidden md:flex">
                    <p className="hover:text-green-600">Home</p>
                    <NavLink to="/products" className="hover:text-green-600" end>Products</NavLink>
                    <p className="hover:text-green-600">Pages</p>
                    <p className="hover:text-green-600">Blog</p>
                </nav>
                <div className="flex items-center space-x-4">
                    <span>📞</span>
                    <span>1-800-625-3210</span>
                    <button className="text-green-600 text-lg md:hidden">☰</button>
                </div>
            </header>

            <section className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 items-center">
                <div>
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">In Store Now</span>
                    <h2 className="text-5xl font-bold mt-4">Gold Standard <br /> Pre-Workout</h2>
                    <p className="text-yellow-700 mt-4">Starting at &16.99</p>
                    <button className="mt-6 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center">
                        Shop now <span className="ml-2">-&gt;</span>
                    </button>
                </div>

                <div className="flex justify-center mt-6 md:mt-0">
                    <img
                        src="https://images.pexels.com/photos/3951862/pexels-photo-3951862.jpeg"
                        alt="N95 Mask"
                        className="w-3/4"
                    />
                </div>
            </section>

            <section className="bg-white py-4 shadow">
                <MainCarousel />
            </section>
        </div>
    );
};

export default LandingPage;
