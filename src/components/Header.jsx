import React from "react";
import { NavLink, Link } from "react-router-dom";
import Avatar from "../assets/images/image-avatar.png";
import CartIcon from "../assets/images/icon-cart.svg"

const Header = () => {
    return (
        <nav className="flex justify-between items-center p-5 m-5 line-b-2 border-b-2 border-gray-200">
            <div className="flex items-center space-x-9 ml-20 text-lg">
                <Link to="/" className="font-bold text-4xl text-black mr-16">
                    sneakers
                </Link >
                <NavLink to="/" style={({ isActive }) => ({ color: isActive ? 'black' : 'gray' })}
                > Home
                </NavLink >

                {/* <NavLink to="collections" style={({ isActive }) => ({ color: isActive ? 'black' : 'gray' })}
            > Collections
            </NavLink > */}

                <NavLink to="men" style={({ isActive }) => ({ color: isActive ? 'black' : 'gray' })}
                > Men
                </NavLink >

                <NavLink to="women" style={({ isActive }) => ({ color: isActive ? 'black' : 'gray' })}
                > Women
                </NavLink >

                <NavLink to="about" style={({ isActive }) => ({ color: isActive ? 'black' : 'gray' })}
                > About
                </NavLink >

                <NavLink to="contact" style={({ isActive }) => ({ color: isActive ? 'black' : 'gray' })}
                > Contant
                </NavLink >
            </div>
            <div className="flex items-center space-x-16 ">
                <NavLink>
                    <button>
                        <img src={CartIcon} alt="carticon" className="w-8 " />
                    </button>
                </NavLink>
                <NavLink className="flex items-center">
                    <img src={Avatar} alt="Avatar" className="w-16 mr-32 rounded-full hover:border-4 hover:border-orange-400" />
                </NavLink>
            </div>
        </nav >
    );
}
export default Header;