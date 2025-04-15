import React from 'react'
import Button from '../partials/Button'

const Banner = () => {
  return (
    <>
    <section className="banner py-20 bg-gray-200">
        <div className="container max-w-[1200px] mx-auto p-5">
            <div className="banner-wrap text-center flex flex-col gap-6">
                <h1 className='text-4xl font-bold text-gray-800'>Welcome to MySite</h1>
                <p className='text-gray-600 font-medium'>A simple one-page website built with React
                    React Icons, and smooth scrolling navigation.
                </p>
                <Button label="Get in Touch"/>
            </div>
        </div>
    </section> 
    </>
  )
}

export default Banner

