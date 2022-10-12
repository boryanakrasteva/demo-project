import React from 'react'
import line from '../assets/line1.png'
import Footer from './Footer'

import Aos from 'aos'
import 'aos/dist/aos.css'

function Subscribe() {
    return (
        <div className='subscribe mt-[50px] p-[10px]'>
            <div className='separator hidden'></div>

            <div className="subscribe-container flex flex-col justify-center items-center text-center md:pl-[3em] md:pr-[3em]" data-aos="fade-up">
                <h1 className='font-font-poppins text-[34px] uppercase lg:text-[48px]'>Stay up to date</h1>
                <p className='font-font-poppins text-[16px]'>To receive our monthly newsletter please add your email address below</p>

                <div className='input w-full flex flex-col justify-center gap-[30px] pb-[10px] 
                    md:pl-[3em] md:pr-[3em] mt-[2em] 
                    xl:items-center'>
                    <input type="email" name="" id="" placeholder='subject' className='bg-transparent pt-[5px] pb-[5px] pl-[30px] pr-[30px] h-[50px] border-[#fff] 
                        placeholder:font-font-poppins placeholder:text-[16px] placeholder:uppercase 
                        xl:w-[60%] 
                        border-b-[1px] border-[#02293e73]' />

                    <div className='subscribe-btn w-full h-fit pt-[5px] pb-[5px] pl-[30px] pr-[30px] border-[1px] border-text-color
                         xl:w-[300px]'>
                        <span className='font-font-poppins text-[14px] uppercase text-text-color'>Subscribe</span>
                        <img className='hidden' src={line} alt="" />
                    </div>
                </div>

                <div className='subs-checkbox mt-[20px] flex text-start items-center gap-[10px] 
                    md:pl-[3em] md:pr-[3em]'>
                <input type="checkbox" />
                    <span className='font-font-poppins text-[14px]'>I’m happy for the Palms Merkur Royale Casino to send me news and inspiration.</span>
                </div>
            </div>

            <Footer />
        </div>

    )
}

export default Subscribe