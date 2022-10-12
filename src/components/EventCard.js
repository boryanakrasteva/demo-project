import React from 'react'


function EventCard({ image, title, type, place, time }) {
    return (
        <div className="events-card w-[250px] md:w-[350px] lg:w-[290px] xl:w-[390px] flex flex-col text-main-color font-font-poppins">
            <div className="card-img">
                <img className='w-full md:w-full h-[150px] md:h-[250px] mb-[-15px]'src={image} alt=""/>
            </div>
            <div className="event-details pt-[15px] pr-[15px] pb-[30px] pl-[15px] bg-[#C89C59] xl:h-[200px]">
                <h1 className='text-[20px] md:text-[22px] font-[400]'>{title}</h1>
                <h2 className='text-[16px] md:text-[18px]'>{type}</h2>
                <p className='text-[12px] md:text-[14px]'>Place / {place}</p>
                <hr></hr>
                <p className='text-[12px]'>Time / {time}</p>
            </div>
        </div>
    )
}

export default EventCard