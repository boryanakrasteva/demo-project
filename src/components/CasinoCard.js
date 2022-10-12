import React from 'react'

function CasinoCard({image, name, title, text}) {
  return (
    <div className="casino-card w-[250px] md:w-[350px] flex flex-col text-main-color font-font-poppins">
            <div className="card-img">
                <img className='w-fit md:w-full h-[150px] md:h-[250px]' src={image} alt=""/>
            </div>
            <div className="casino-details h-[250px] pt-[15px] pr-[15px] pb-[30px] pl-[15px] bg-[#02293e]">
                <h1 className='text-[20px] md:text-[22px] font-[400] '>{name}</h1>
                <h2 className='text-[16px] md:text-[18px] text-secondary-color'>{title}</h2>
                <p className='text-[10px] md:text-[12px]'>{text}</p>
            </div>
        </div>
  )
}

export default CasinoCard