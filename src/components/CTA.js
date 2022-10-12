import React, { useEffect } from 'react'

import arrow from '../assets/arrow.png'


function CTA() {
  
  return (
    <div className='cta md:pr-[100px] md:pl-[100px] cursor-pointer flex justify-center'>
      <div className="cta-container bg-[#c89c59]/[0.1] uppercase flex flex-col text-center justify-center p-[20px] items-center gap-[1.5em] lg:relative lg:flex  lg:h-[200px] lg:w-[80%] lg:text-center lg:items-center">
        <span className='font-font-minerva text-[16px] pl-[30px] pr-[30px] lg:text-[24px] lg:text-text-color lg:p-0'>Enjoy one of the most popular variants of the card game of poker at our poker club</span>
        <img src={arrow} alt="" className='hidden lg:flex lg:absolute w-[150px] bottom-[30px] right-[100px] transition-right duration-[0.2s]'/>
        <div className='cta-btn w-[100%] h-fit p-[5px] border-[1px]  border-text-color text-center lg:hidden'>
          <span className='relative font-font-poppins text-[14px]'>Read more</span>
        </div>
      </div>
    </div>
  )
}

export default CTA