import React from 'react'

const Button = ({ label, className, type }) => {
  const buttonClass = type === "contact"
    ? "bg-blue-600 text-white px-4 py-2 rounded-md cursor-pointer"
    : "bg-blue-600 inline-block w-[130px] text-white py-3 rounded-md mx-auto mt-2 cursor-pointer";
    
  return <button className={`${buttonClass} ${className}`}>{label}</button>;
};


export default Button
