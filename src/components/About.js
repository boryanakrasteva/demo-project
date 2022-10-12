import React from 'react'
import image from '../assets/palms.png'
import line from '../assets/line1.png'


function About() {
  return (
    <div className='about hidden md:flex md:relative md:h-[400px] md:mt-[100px] text-text-color cursor-default'>
        <div className='title-container w-[50%] uppercase h-fit'>
          <img src={image} alt="" className='absolute w-auto h-[450px] xl:h-[650px]'/>
            <span data-aos="fade-up" className='absolute font-font-minerva text-[48px] 
              md:top-0 md:left-[90px] 
              xl:text-[72px] xl:top-[50px]'>About</span>
        </div>
        <div className='about-container w-[50%] font-font-poppins 
          md:ml-1 md:mr-1' >
            <h1 data-aos="fade-up" className='text-[26px] xl:text-[48px] uppercase'>Elegance, class and diversity of entertainment in the heart of the capital</h1>
            <p data-aos="fade-up" className='text-[14px] xl:text-[18px] mt-8'>Offering elegance, class and exciting experience with the highest level of service, 
                Palms Merkur Royalе is the newest and the most exclusive gaming facility in the Bulgarian capital Sofia. 
                Situated in the Millennium Center which is among the tallest and mo</p>

            <div data-aos="fade-up" className='about-btn relative cursor-pointer w-fit h-fit pt-[5px] pb-[5px] pr-[30px] pl-[30px] border-[1px] border-text-color mt-[50px]'>
              <span className='z-[1] relative font-font-poppins xl:text-[18px]'>explore</span>
              <img className='hidden lg:flex lg:absolute lg:right-[-20px] lg:bottom-[16px] lg:w-[35px] transition-right duration-[0.2s]' src={line} alt="" />
            </div>
        </div>
    </div>
  )
}

export default About