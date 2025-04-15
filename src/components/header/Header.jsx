import React from 'react'
import { FaChevronDown, FaEnvelope, FaHome, FaInfoCircle } from "react-icons/fa";
import { useState } from "react";


const Header = () => {
    const [hide, setHide] = useState(false);

    function handleHide() {
        setHide(prev => !prev);
    }
  return (
    <>
    <section className="header bg-white shadow-md relative">
        <div className="container max-w-[1200px] mx-auto p-5">
          <div className="header-wrapper flex items-center justify-between">
            <h2 className="text-blue-600 text-3xl font-bold">MySite</h2>

            {/* Chevron Toggle */}
            <FaChevronDown
            className={`text-gray-500 cursor-pointer transition-transform duration-300 ${hide ? 'rotate-180' : ''}`}
            size={23}
            onClick={handleHide}/>

          </div>

          {/* Show nav only when hide is true */}
          {hide && (
            <nav className="absolute left-0 top-[72px] bg-white right-0 px-[20px] py-[10px] shadow-md z-10 ">
              <ul className="flex flex-col gap-6">
                <li><a href="#" className="flex items-center gap-2 text-gray-600 font-semibold text-xl"><FaHome />Home</a></li>
                <li><a href="#" className="flex items-center gap-2 text-gray-600 font-semibold text-xl"><FaInfoCircle />About</a></li>
                <li><a href="#" className="text-gray-600 font-semibold text-xl">Services</a></li>
                <li><a href="#" className="text-gray-600 font-semibold text-xl">Portfolio</a></li>
                <li><a href="#" className="flex items-center gap-2 text-gray-600 font-semibold text-xl"><FaEnvelope />Contact</a></li>
              </ul>
            </nav>
          )}
        </div>
    </section> 
    </>
  )
}

export default Header
