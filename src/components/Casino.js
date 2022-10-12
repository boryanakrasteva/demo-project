import React from 'react'
import Carousel from './Carousel'
import CasinoCard from './CasinoCard'



function Casino() {
  return (
    <div className='casino mt-[5em] mb-[5em] xl:mt-[20em] overflow-hidden'>
      
      <div className="casino-container flex flex-col md:flex-row lg:flex-row text-text-color" data-aos="fade-up">
        <div className='details flex flex-col ml-[1em] p-[1em] lg:mr-[3em]'>
          <h1 className='text-[24px] md:text-[48px] uppercase font-font-minerva xl:text-[72px]'>Casino</h1>
          <p className='md:w-[250px] lg:w-[250px] text-[16px] mt-[1.5em] font-font-poppins'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>
        </div>
        <div className='lg:ml-[-50px] xl:ml-[-100px]'>
          <Carousel />
        </div>
      </div>
    </div>
  )
}

export default Casino