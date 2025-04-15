import React from 'react'

const Button = ({label}) => {
  return (
    <div className='button'>
      <button className='text-white bg-blue-600 py-3 px-5 rounded-md font-bold'>{label}</button>
    </div>
  )
}

export default Button
