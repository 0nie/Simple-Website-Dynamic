import React from 'react'
import aboutData from './about-data'
import Headings from '../partials/headings'

const AboutUs = () => {
  return (
    <div>
      <section className="banner py-20">
        <div className="container max-w-[1200px] mx-auto p-5">
            
          <Headings label="About Us"/>

          <div className="about-wrapper">
            {aboutData.map((item, index) => {
              return (
                <div className="about-card mb-5" key={index}>
                  <h3 className='mb-3 font-semibold text-2xl text-gray-700'>{item.title}</h3>
                  <p className='text-justify text-gray-600'>{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutUs;
