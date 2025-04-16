import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <div>
      <section className="footer bg-gray-800">
        <div className="container max-w-[1200px] mx-auto p-5  py-10">
            <div className="footer-wrap flex flex-col items-center gap-4">
                <div className="icons flex gap-5">
                    <FaGithub size={23}  className='text-gray-400'/>
                    <FaTwitter size={23}  className='text-gray-400'/>
                    <FaLinkedin size={23} className='text-gray-400' />
                </div>
                
                <div className="copyright">
                    <p className='text-gray-400  text-[16px]'>
                        © 2025 MySite. All rights reserved.
                    </p>
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Footer
