import React, { useState } from 'react'

import logo from '../assets/Logo.png'
import { BsChevronCompactDown } from 'react-icons/bs'
import { GiHamburgerMenu } from 'react-icons/gi'
import { GrFormClose } from 'react-icons/gr'

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    console.log(isOpen)

    return (
        <div className='absolute w-full z-[999] flex justify-between pr-4 pl-4 items-center text-center border-b-[1px] border-secondary-color'>
            <div className='z-[-10]'>
                <img src={logo} alt="" className='w-[50%] relative' />
            </div>

            <div className='mr-4 ml-[-5em]'>
                <ul className='hidden md:flex gap-3 justify-between text-main-color '>
                    <li><a href="" className='font-font-poppins uppercase text-[10px] xl:text-[14px]'>About us</a></li>
                    <li><a href="" className='font-font-poppins uppercase text-[10px] xl:text-[14px]'>Tour</a></li>
                    <li><a href="" className='font-font-poppins uppercase text-[10px] xl:text-[14px]'>Casino</a></li>
                    <li><a href="" className='font-font-poppins uppercase text-[10px] xl:text-[14px]'>Poker Club</a></li>
                    <li><a href="" className='font-font-poppins uppercase text-[10px] xl:text-[14px]'>Dinning</a></li>
                    <li><a href="" className='font-font-poppins uppercase text-[10px] xl:text-[14px]'>Hotel &amp; spa</a></li>
                    <li><a href="" className='font-font-poppins uppercase text-[10px] xl:text-[14px]'>Events &amp; promo</a></li>
                    <li><a href="" className='font-font-poppins uppercase text-[10px] xl:text-[14px]'>Privileges</a></li>
                    <li><a href="" className='font-font-poppins uppercase text-[10px] xl:text-[14px]'>Careers</a></li>
                    <li><a href="" className='font-font-poppins uppercase text-[10px] xl:text-[14px]'>Contact us</a></li>
                </ul>
            </div>

            <div className='flex gap-6 '>
                <div className='lang-menu flex text-[#000]'>
                    <select className='z-[0] bg-transparent text-main-color'>
                        <option className='bg-[#000]'><a href="">EN <BsChevronCompactDown/></a></option>
                        <option className='bg-[#000]'><a href="">BG <BsChevronCompactDown/></a></option>
                    </select>
                </div>

                <div className="text-main-color md:hidden z-[99]">
                    {!isOpen ? <GiHamburgerMenu size={25} className='text-main-color' onClick={toggle} /> : <GrFormClose size={25} className=' text-main-color' onClick={toggle} />}
                </div>
            </div>

            { isOpen && <div className='md:hidden w-[80%] h-screen bg-[#fff] right-0 top-0 z-[11] absolute' data-aos="slide-left">
                <ul className='flex flex-col gap-[14px] text-[#000] top-0 mt-[20px] text-center'>
                    <li className='p-2 mr-6 ml-6 border-b-[1px] border-[#dbd3d3]'><a href="" className='font-font-poppins uppercase text-[16px] sm:text-[20px]'>About us</a></li>
                    <li className='p-2 mr-6 ml-6 border-b-[1px] border-[#dbd3d3]'><a href="" className='font-font-poppins uppercase text-[16px] sm:text-[20px]'>Tour</a></li>
                    <li className='p-2 mr-6 ml-6 border-b-[1px] border-[#dbd3d3]'><a href="" className='font-font-poppins uppercase text-[16px] sm:text-[20px]'>Casino</a></li>
                    <li className='p-2 mr-6 ml-6 border-b-[1px] border-[#dbd3d3]'><a href="" className='font-font-poppins uppercase text-[16px] sm:text-[20px]'>Poker Club</a></li>
                    <li className='p-2 mr-6 ml-6 border-b-[1px] border-[#dbd3d3]'><a href="" className='font-font-poppins uppercase text-[16px] sm:text-[20px]'>Dinning</a></li>
                    <li className='p-2 mr-6 ml-6 border-b-[1px] border-[#dbd3d3]'><a href="" className='font-font-poppins uppercase text-[16px] sm:text-[20px]'>Hotel &amp; spa</a></li>
                    <li className='p-2 mr-6 ml-6 border-b-[1px] border-[#dbd3d3]'><a href="" className='font-font-poppins uppercase text-[16px] sm:text-[20px]'>Events &amp; promo</a></li>
                    <li className='p-2 mr-6 ml-6 border-b-[1px] border-[#dbd3d3]'><a href="" className='font-font-poppins uppercase text-[16px] sm:text-[20px]'>Privileges</a></li>
                    <li className='p-2 mr-6 ml-6 border-b-[1px] border-[#dbd3d3]'><a href="" className='font-font-poppins uppercase text-[16px] sm:text-[20px]'>Careers</a></li>
                    <li className='p-2 mr-6 ml-6 border-b-[1px] border-[#dbd3d3]'><a href="" className='font-font-poppins uppercase text-[16px] sm:text-[20px]'>Contact us</a></li>
                </ul>

            </div>}

        </div>
    )
}

export default Navbar