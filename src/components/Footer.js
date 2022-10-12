import React from 'react'

function Footer() {
    return (
        <div className='footer h-fit p-[10px] mt-12 bg-text-color text-center pt-[25px]'>
            <div className="footer-container text-main-color font-font-sans 
                lg:pr-[50px] lg:pl-[50px]">
                <div className="cols grid grid-cols-2 grid-rows-2 gap-[20px] border-b-[1px] border-[#ffffff74] 
                    lg:flex lg:gap-[40px] lg:justify-between lg:pb-[5em]">
                    <div className='column text-start'>
                        <ul className='footer-links list-none flex flex-col gap-[10px]'>
                            <li><a href="" className=' text-[14px]'>About Us</a></li>
                            <li><a href=""className=' text-[14px]' >Our Privileges</a></li>
                            <li><a href=""className=' text-[14px]' >Events &amp;	Promo</a></li>
                        </ul>
                    </div>
                    <div className='column text-start'>
                        <ul className='footer-links'>
                            <li><a href="" className=' text-[14px]'>Cookie Policy</a></li>
                            <li><a href="" className=' text-[14px]'>Loyalty Program</a></li>
                            <li><a href="" className=' text-[14px]'>Responsible Gaming</a></li>
                            <li><a href="" className=' text-[14px]'>PMR Casino Privilege Club</a></li>
                            <li><a href="" className=' text-[14px]'>Privacy Policy​</a></li>
                        </ul>
                    </div>
                    <div className='column hidden 
                        lg:flex text-start'>
                        <ul className="footer-links">
                        <h1 className='text-[22px] font-sans'>Restaurants</h1>
                            <li><p className=' text-[14px]'>888 Taste Show Asian Cuisine</p></li>
                            <li><p className=' text-[14px]'>San Remo Mediterranean Cuisine</p></li>
                            <li><p className=' text-[14px]'>Black &amp; White Sport Bar and Piano Lounge</p></li>
                        </ul>

                    </div>
                    <div className='column text-start'>
                        <ul className='footer-links'>
                            <h1 className='text-[22px] font-sans'>Contact us</h1>
                            <li><a href="" className='text-[14px]'>+359 2 443 0 333</a></li>
                            <li><a className='email text-[14px] text-secondary-color' href="" ><br /> concierge@pmrcasino.com</a></li>
                            <li><a className='location text-[14px] underline-offset-1' href="">Show location</a></li>
                        </ul>
                    </div>
                </div>

                <span className='text-[12px] p-[20px]'>Development by Prodesign.bgProdesign.wien</span>
            </div>
        </div>
    )
}

export default Footer