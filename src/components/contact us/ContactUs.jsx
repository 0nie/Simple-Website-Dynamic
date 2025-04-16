import React from 'react'
import Button from '../partials/Button'

const ContactUs = () => {
  return (
    <div>
      <section className="contact-us bg-blue-600">
        <div className="container max-w-[1200px] mx-auto p-5  py-24">
            <div className="contact-us-wrap">
                <h2 className='text-white text-center text-3xl font-bold mb-10'>Contact Us</h2>
                <form className='bg-white py-8 px-6 rounded-md flex flex-col gap-5 lg:w-[500px] mx-auto'>
                    <div className="name flex flex-col gap-3">
                        <label htmlFor="name" className='text-gray-600 text-[14px] font-semibold'>Name</label>
                        <input type="text" name='name' className='border-1 border-gray-200 rounded-md p-3 text-md'/>
                    </div>

                    <div className="email flex flex-col gap-3">
                        <label htmlFor="email" className='text-gray-600 text-[14px] font-semibold'>Email</label>
                        <input type="email" name='email' className='border-1 border-gray-200 rounded-md p-3 text-md'  />
                    </div>

                    <div className="message flex flex-col gap-3">
                        <label htmlFor="message" className='text-gray-600 text-[14px] font-semibold'>Message</label>
                        <textarea name="message" id="" className='border-1 border-gray-200 rounded-md p-3 overflow-hidden resize-none h-[130px] text-md '  ></textarea>
                    </div>

                   <Button label="Submit" className="" type="contact" />



                </form>
            </div>
        </div>
      </section>
    </div>
  )
}

export default ContactUs
