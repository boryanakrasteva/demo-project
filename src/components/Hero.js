import React, { useState } from 'react'
import { IoSearchSharp } from 'react-icons/io5'
import { BsChevronCompactDown } from 'react-icons/bs'
import Navbar from './Navbar'
import HeaderSlider from './HeaderSlider'
import image from '../assets/eventimg.png'
import line from '../assets/line.png'



function Hero() {
    const [isShown, setIsShown] = useState(false);

    const handleClick = event => {
        setIsShown(current => !current);
    };



    return (
        <div className='relative w-full overflow-hidden '>
            <Navbar />
            <HeaderSlider/>
            
            <div className='layer w-screen 
                lg:relative lg:top-0 lg:flex lg:flex-col lg:items-center lg:justify-center lg:text-center '>
                
                <div className="container w-full flex flex-col pl-3 pr-3 items-center text-center justify-center gap-[25px] mt-5 
                    lg:absolute lg:flex lg:flex-col lg:items-center lg:justify-center">
                    
                   

                    <div className='hero-btn z-[1] cursor-pointer w-[80%] h-fit p-[5px] border-[1px] border-text-color text-center mb-[60em] 
                        md:mb-[30em]
                        lg:relative lg:w-fit lg:pt-[5px] lg:pb-[5px] lg:pl-[30px] lg:pr-[30px] lg:border-secondary-color'>
                        <span className='z-[1] text-font-poppins text-[14px] 
                            lg:relative  lg:text-secondary-color 
                            xl:text-[16px]'>Read more</span>
                        <img className='hidden 
                            lg:flex lg:absolute right-[-18px] bottom-[16px] w-[35px] transition-right duration-[0.2s]' src={line} alt="" />
                    </div>
                </div>

                <div className="widget hidden cursor-pointer
                    lg:flex lg:absolute lg:bottom-[200px] lg:right-0 lg:z-[900]">
                    <button onClick={handleClick} className='events-btn z-[999] cursor-pointer w-[70px] h-[160px] bg-secondary-color uppercase text-main-color'>
                        <span className='w-[70px] h-[160px] absolute top-0 left-[-70px] rotate-[90deg] font-font-poppins text-[20px]'>Events</span>
                    </button>
                    {isShown && (
                        <div className='z-[999] event-card w-[300px] h-[220px] bg-secondary-color flex flex-col gap-[25px] font-sans'>
                            <div className='up flex justify-between'>
                                <div className='event-date flex flex-col justify-center items-center text-[40px] ml-[30px]'>
                                    <p>06</p>
                                    <p>jun</p>
                                </div>
                                <div><img src={image} alt="" /></div>
                            </div>
                            <div className='mid flex justify-center items-center text-[12px]'>
                                <p>MUSIC LIVE SHOW @ Black &amp; White Piano Lounge</p>
                            </div>
                            <div className="down flex items-center justify-center text-[12px]">
                                <p>Teppanyaki Night</p>
                            </div>
                        </div>

                    )}

                </div>

                <div className='hidden z-[999]
                    lg:flex lg:absolute lg:items-center text-main-color lg:bottom-[40px] gap-[10px] border-b-[2px] border-b-[#c3c3c3]' data-aos="fade-up">
                    <div className='tab text-start w-[250px]'>
                        <h1 className='font-font-poppins text-[20px] xl:text-[24px] font-bold text-secondary-color'>01.</h1>
                        <p className='xl:text-[18px]'>Who we are</p>
                    </div>

                    <div className='tab text-start w-[250px]'>
                        <h1 className='font-font-poppins text-[20px] xl:text-[24px] font-bold text-secondary-color'>02.</h1>
                        <p className='xl:text-[18px]'>Lorem Ipsum</p>
                    </div>

                    <div className='tab text-start w-[250px]'>
                        <h1 className='font-font-poppins  text-[20px] xl:text-[24px] font-bold text-secondary-color'>03.</h1>
                        <p className='xl:text-[18px]'>Simply dummy text</p>
                    </div>
                </div>

                <div className="pagination-2 flex text-center justify-center gap-[3em] lg:hidden">
                    <div className='w-[10px] h-[10px] border-[1px] border-text-color rounded-[50%] bg-text-color'></div>
                    <div className='w-[10px] h-[10px] border-[1px] border-text-color rounded-[50%]'></div>
                    <div className='w-[10px] h-[10px] border-[1px] border-text-color rounded-[50%]'></div>
                </div>

            </div>

        </div>
    )
}

export default Hero