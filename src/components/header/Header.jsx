import React, { useState } from 'react';
import { FaChevronDown, FaEnvelope, FaHome, FaInfoCircle } from "react-icons/fa";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <section className="header bg-white shadow-md relative">
      <div className="container max-w-[1200px] mx-auto p-5">
        <div className="header-wrapper flex items-center justify-between">
          <h2 className="text-blue-600 text-3xl font-bold">MySite</h2>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#"
              className="flex items-center gap-2 text-gray-600 font-semibold px-3 py-1 rounded hover:bg-blue-100 transition-colors"
            >
              <FaHome />Home
            </a>

            <a
              href="#"
              className="flex items-center gap-2 text-gray-600 font-semibold px-3 py-1 rounded hover:bg-blue-100 transition-colors"
            >
              <FaInfoCircle />About
            </a>

            {/* More Dropdown */}
            <div className="relative">
              <button
                className="flex items-center gap-2 text-gray-600 font-semibold px-3 py-1 rounded hover:bg-blue-100 transition-colors"
                onClick={() => setDropdownOpen(prev => !prev)}
              >
                More
                <FaChevronDown className={`transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {dropdownOpen && (
                <ul className="absolute top-full mt-2 bg-white shadow-md p-4 w-40 rounded z-10">
                  <li>
                    <a href="#" className="block py-1 text-gray-600 hover:text-blue-600">About</a>
                  </li>
                  <li>
                    <a href="#" className="block py-1 text-gray-600 hover:text-blue-600">Services</a>
                  </li>
                  <li>
                    <a href="#" className="block py-1 text-gray-600 hover:text-blue-600">Portfolio</a>
                  </li>
                  <li>
                    <a href="#" className="block py-1 flex items-center gap-2 text-gray-600 hover:text-blue-600">
                      <FaEnvelope />Contact
                    </a>
                  </li>
                </ul>
              )}
            </div>
          </nav>

          {/* Mobile Chevron */}
          <FaChevronDown
            className="md:hidden text-gray-500 cursor-pointer transition-transform duration-300"
            size={23}
            onClick={() => setMobileMenuOpen(prev => !prev)}
          />
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden absolute left-0 top-[72px] bg-white right-0 px-[20px] py-[10px] shadow-md z-10">
            <ul className="flex flex-col gap-6">
              <li>
                <a href="#" className="flex items-center gap-2 text-gray-600 font-semibold text-xl">
                  <FaHome />Home
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2 text-gray-600 font-semibold text-xl">
                  <FaInfoCircle />About
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 font-semibold text-xl">Services</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 font-semibold text-xl">Portfolio</a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2 text-gray-600 font-semibold text-xl">
                  <FaEnvelope />Contact
                </a>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </section>
  );
};

export default Header;
