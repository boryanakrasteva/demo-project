import React from 'react'
import restaurantsimg from '../assets/restaurant.png'
import arrow from '../assets/arrow.png'
import rooms from '../assets/rooms.png'
import spa from '../assets/spa.png'

import Aos from 'aos'
import 'aos/dist/aos.css'

function Services() {
    return (
        <div className='services p-[1em] lg:mt-[100px]'>
            <div className='services-watermark w-[80%] 
                lg:relative lg:text-center' data-aos="fade-up" >
                <h1 className='hidden 
                    lg:flex lg:absolute top-[-70px] font-font-poppins text-[127px] text-[#C89C59] opacity-[0.1] left-[-10px] font-bold 
                    xl:text-[170px]'>MUCH MORE</h1>
                <p className='text-[28px] 
                    md:text-[32px] uppercase font-font-minerva text-text-color 
                    lg:relative lg:top-[-55px] 
                    xl:text-[48px] xl:top-[-50px]'>And even more than a casino</p>
            </div>
            <div className="services-container">
                
                <div className="left 
                    md:pl-[2em] md:pr-[2em] 
                    lg:mt-[80px] lg:flex cursor-pointer">
                    <div className="left-img">
                        <img className='w-screen mt-[3.5em] mb-[1em] lg:relative transition-all duration-[0.2s]' src={restaurantsimg} alt="" />
                    </div>
                    <div className="left-details 
                        lg:flex lg:flex-col lg:gap-[50px] lg:justify-center">
                        <div className="left-title">
                            <h1 className='text-[24px] 
                                md:text-[26px] text-secondary-color font-font-minerva uppercase mb-[0.5em] 
                                lg:relative lg:left-[-50px] lg:top-[50px] lg:text-[48px] transition-all duration-[0.2s]'>restaurants</h1>
                        </div>
                        <div className="left-more lg:w-fit 
                            lg:relative lg:left-[10px] lg:top-[-25px] lg:p-[30px]">
                            <p className='font-font-poppins text-[16px] mb-[1em]'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>
                            <img className='hidden 
                                lg:flex lg:relative lg:w-[100px] lg:left-[250px] lg:top-[10px] 
                                xl:w-[150px] transition-right duration-[0.2s]' src={arrow} alt="" />
                        </div>
                        <div className='cta-btn text-center font-font-poppins text-[16px] pl-[3em] pr-[3em] pt-[0.5em] pb-[0.5em] border-[1px] border-text-color lg:hidden'>
                            <span>Read more</span>
                        </div>
                    </div>
                </div>

                <div className="right 
                    md:pl-[2em] md:pr-[2em] 
                    lg:mt-[80px] lg:flex lg:flex-row-reverse cursor-pointer" data-aos="fade-up">
                    <div className="right-img">
                        <img className='w-screen mt-[3.5em] mb-[1em] 
                            lg:relative transition-all duration-[0.2s]' src={rooms} alt="" />
                    </div>
                    <div className="right-details 
                        lg:flex lg:flex-col lg:gap-[50px] lg:justify-center">
                        <div className="right-title">
                            <h1 className='text-[24px] md:text-[26px] text-secondary-color font-font-minerva uppercase mb-[0.5em] 
                                lg:relative lg:left-[100px] lg:top-[50px] lg:text-[48px] transition-all duration-[0.2s]'>rooms and suites</h1>
                        </div>
                        <div className="right-more 
                            lg:w-fit lg:relative lg:left-[10px] lg:top-[-25px] lg:p-[30px]">
                            <p className='font-font-poppins text-[16px] mb-[1em]'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>
                            <img className='hidden 
                                lg:flex lg:relative lg:w-[100px] lg:left-[250px] lg:top-[10px] 
                                xl:w-[150px] transition-right duration-[0.2s]' src={arrow} alt="" />
                        </div>
                        <div className='cta-btn text-center font-font-poppins text-[16px] pl-[3em] pr-[3em] pt-[0.5em] pb-[0.5em] border-[1px] border-text-color hidden'>
                            <span>Read more</span>
                        </div>
                    </div>
                </div>

                <div className="left md:pl-[2em] md:pr-[2em] 
                    lg:mt-[80px] lg:flex cursor-pointer" data-aos="fade-up">
                    <div className="left-img">
                        <img className='w-screen mt-[3.5em] mb-[1em] 
                            lg:relative transition-all duration-[0.2s]' src={spa} alt="" />
                    </div>
                    <div className="left-details 
                        lg:flex lg:flex-col lg:gap-[50px] lg:justify-center">
                        <div className="left-title">
                            <h1 className='text-[24px] md:text-[26px] text-secondary-color font-font-minerva uppercase mb-[0.5em] 
                                lg:relative lg:left-[-50px] lg:top-[50px] lg:text-[48px] transition-all duration-[0.2s]'>Spa Fascilities</h1>
                        </div>
                        <div className="left-more 
                            lg:w-fit lg:relative lg:left-[10px] lg:top-[-25px] lg:p-[30px]">
                            <p className='font-font-poppins text-[16px] mb-[1em]'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>
                            <img className='hidden 
                                lg:flex lg:relative lg:w-[100px] lg:left-[250px] lg:top-[10px] 
                                xl:w-[150px] transition-right duration-[0.2s]' src={arrow} alt="" />
                        </div>
                        <div className='cta-btn text-center font-font-poppins text-[16px] pl-[3em] pr-[3em] pt-[0.5em] pb-[0.5em] border-[1px] border-text-color lg:hidden'>
                            <span>Read more</span>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default Services