import React from 'react'
import Headings from '../partials/headings'
import { FaGithub } from 'react-icons/fa'
import aboutData from './services.data'

const Services = () => {
  return (
    <div>
      <section className="services bg-gray-100">
        <div className="container max-w-[1200px] mx-auto p-5  py-24">

          <Headings label="Services"/>

          <div className="card-wrapper flex flex-col gap-5 lg:flex-row">

            {aboutData.map((data,key) => {
              return(
                <div className="card border-1 px-6 py-6 flex flex-col gap-[13px] bg-white  border-gray-200 rounded-md shadow-md" key={key}>
              {data.icon}
              <h2 className="title  text-xl font-semibold">{data.title}</h2>
              <p className='text-gray-500'>{data.description}</p>
            </div>
              )
            })}

            

          </div>


        </div>
      </section>
    </div>
  )
}

export default Services
