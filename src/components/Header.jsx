import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import Avatar from "../assets/images/image-avatar.png";
import CartIcon from "../assets/images/icon-cart.svg";
import closeIcon from "../assets/images/icon-close.svg";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="flex justify-between items-center p-5 border-b-2 border-gray-200 relative">
            {/* Left Section: Logo and Hamburger Menu */}
            <div className="flex items-center space-x-4">
                {/* Hamburger Menu */}
                <button
                    className="lg:hidden text-black text-2xl"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? (<img src={closeIcon} alt="Close Menu" className="w-6" />) : "☰"}
                </button>
                {/* Logo */}
                <Link to="/" className="font-bold text-4xl text-black mb-2">
                    sneakers
                </Link>
            </div>

            {/* Menu Links */}
            <div
                className={`${isMenuOpen ? "block" : "hidden"
                    } absolute top-16 left-0 w-full bg-white  lg:flex md:relative md:top-0 md:w-auto md:space-x-9 md:items-center z-10`}
            >
                <div className="flex flex-col md:flex-row md:items-center md:space-x-9 text-lg md:text-xl font-semibold md:font-bold p-5">
                    <NavLink
                        to="/"
                        onClick={() => setIsMenuOpen(false)}
                        className={({ isActive }) =>
                            isActive ? "text-black" : "text-gray-600"
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="men"
                        onClick={() => setIsMenuOpen(false)}
                        className={({ isActive }) =>
                            isActive ? "text-black" : "text-gray-600"
                        }
                    >
                        Men
                    </NavLink>
                    <NavLink
                        to="women"
                        onClick={() => setIsMenuOpen(false)}
                        className={({ isActive }) =>
                            isActive ? "text-black" : "text-gray-600"
                        }
                    >
                        Women
                    </NavLink>
                    <NavLink
                        to="about"
                        onClick={() => setIsMenuOpen(false)}
                        className={({ isActive }) =>
                            isActive ? "text-black" : "text-gray-600"
                        }
                    >
                        About
                    </NavLink>
                    <NavLink
                        to="contact"
                        onClick={() => setIsMenuOpen(false)}
                        className={({ isActive }) =>
                            isActive ? "text-black" : "text-gray-600"
                        }
                    >
                        Contact
                    </NavLink>
                </div>
            </div>

            {/* Right Section: Cart and Avatar */}
            <div className="flex items-center space-x-4">
                <button>
                    <img src={CartIcon} alt="Cart Icon" className="w-6 md:w-8" />
                </button>
                <img
                    src={Avatar}
                    alt="Avatar"
                    className="w-10 md:w-16 rounded-full hover:border-4 hover:border-orange-400"
                />
            </div>
        </nav>
    );
};

export default Header;
