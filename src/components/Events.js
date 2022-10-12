import React from 'react'
import EventCard from './EventCard'
import event1 from '../assets/event1.png'
import event2 from '../assets/event2.png'
import event3 from '../assets/event3.png'
import line from '../assets/line.png'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'


const events = [
    {
        image: event1,
        title: 'MUSIC LIVE SHOW @ Black & White Piano Lounge',
        type: 'MUSIC LIVE SHOW',
        place: 'Black & White Piano Lounge',
        time: '22:30'
    }, {
        image: event2,
        title: 'MUSIC LIVE SHOW @ Black & White Piano Lounge',
        type: 'MUSIC LIVE SHOW',
        place: 'Black & White Piano Lounge',
        time: '22:30'
    },
    {
        image: event3,
        title: 'MUSIC LIVE SHOW @ Black & White Piano Lounge',
        type: 'MUSIC LIVE SHOW',
        place: 'Black & White Piano Lounge',
        time: '22:30'
    }
]

function Events() {
    return (
        <div className='events w-full flex flex-col lg:mt-[150px] lg:relative'>
            <div className='events-container w-screen md:w-[80%] h-[500px] md:h-[600px] bg-text-color lg:relative'>
                <div className='events-watermark lg:relative' >
                    <h1 className='hidden lg:flex lg:absolute top-[-170px] font-font-poppins text-[200px] text-[#b3c1c9] opacity-[0.1] left-[10px] font-bold '>EVENTS</h1>
                    <p data-aos="fade-up" className='mt-[1em] ml-[1em] font-font-minerva uppercase text-[28px] 
                        md:text-[32px] mb-[1em] text-main-color 
                        lg:ml-[100px] lg:mt-[50px] 
                        xl:text-[48px]'>Upcoming Events</p>
                </div>

                <div className="cards-container hidden 
                    lg:flex lg:absolute gap-[3em] lg:left-[20px] 
                    xl:left-[70px] xl:top-[150px]">
                    {events.map(({ image, title, type, place, time }) => {
                        return (
                            <EventCard image={image} title={title} type={type} place={place} time={time} />
                        )
                    })}
                </div>

                <div className="swiper-cards w-screen 
                    md:relative md:left-[-150px] 
                    lg:hidden">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={0}
                        pagination={{
                            type: "progressbar",
                        }}
                        navigation={false}
                        modules={[Pagination]}
                        className="carousel w-[80%] md:w-[50%]"
                    >
                        {events.map(({ image, title, type, place, time }) => {
                            return (
                                <SwiperSlide><EventCard image={image} title={title} type={type} place={place} time={time} /></SwiperSlide>
                            )
                        })}
                    </Swiper>
                </div>
            </div>

            <div className="btn-container hidden">
                <div className='hero-btn'data-aos="fade-up">
                    <span>more events</span>
                    <img src={line} alt="" />
                </div>
            </div>


        </div>
    )
}

export default Events