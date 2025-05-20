"use client";
import React, { useState } from 'react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        // <nav className="bg-neutral-950 text-white p-4 sticky top-0 z-50 border border-bottom border-gray-300">
        <nav className="bg-neutral-950 text-white p-4 sticky top-0 z-50 border-b border-gray-300">

            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
               <div
  className="text-4xl font-bold "
  style={{ fontFamily: '"Caveat", cursive' }}
>
  <a href="/" className="hover:text-gray-300 transition-colors duration-200">
    Chirag Bang
  </a>
</div>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8 items-center">
                    <a
                        href="/"
                        className="text-sm font-medium hover:text-gray-300 transition-colors duration-200"
                    >
                        Home
                    </a>
                    <a
                        href="#about"
                        className="text-sm font-medium hover:text-gray-300 transition-colors duration-200"
                    >
                        About
                    </a>
                     <a
                        href="#experience"
                        className="text-sm font-medium hover:text-gray-300 transition-colors duration-200"
                    >
                        Experience
                    </a>
                    <a
                        href="/projects"
                        className="text-sm font-medium hover:text-gray-300 transition-colors duration-200"
                    >
                        Projects
                    </a>
                    <a
                        href="/contact"
                        className="text-sm font-medium hover:text-gray-300 transition-colors duration-200"
                    >
                        Contact
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button
                        onClick={toggleMenu}
                        className="focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-md p-1"
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                            />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden mt-4 flex flex-col space-y-4 pb-4">
                    <a
                        href="/"
                        className="text-sm font-medium hover:text-gray-300 transition-colors duration-200"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Home
                    </a>
                    <a
                        href="/about"
                        className="text-sm font-medium hover:text-gray-300 transition-colors duration-200"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        About
                    </a>
                    <a
                        href="/projects"
                        className="text-sm font-medium hover:text-gray-300 transition-colors duration-200"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Projects
                    </a>
                    <a
                        href="/contact"
                        className="text-sm font-medium hover:text-gray-300 transition-colors duration-200"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Contact
                    </a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
