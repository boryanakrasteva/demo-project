import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'

import arrow from '../assets/arrow.png'

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import img1 from '../assets/casino1.png'
import img2 from '../assets/casino2.png'
import img3 from '../assets/casino3.png'
import CasinoCard from './CasinoCard';


const casino = [
  {
    image: img1,
    name: 'Roulette',
    title: 'Do you feel lucky?',
    text: 'The roulette table has 37 numbers: from 0 to 36. You must guess the winning number. \
    That is to say the box where the white ball will fall after spinning the wheel. \
    You can play by putting a chip on the number that you think will be released. \
    You can also bet on multiple numbers with a single chip.'
  },
  {
    image: img2,
    name: 'Texas Hold’em',
    title: '   ',
    text: 'Texas Hold’em is a Poker game in which each player receives two cards as their initial hand. \
     Each player will use their two hole cards along with the five community cards to form the best five-card Poker hand.'
  },
  {
    image: img3,
    name: 'Caribbean Stud Poker',
    title: '     ',
    text: 'Even if you’ve played poker all your life, as you walk through the tables you’ll find poker variations all over the floor you might never have heard of. \
    One you should find familiar, though, is Caribbean Stud Poker.'
  }
]

function Carousel() {
  return (

    <div className='carousel-wrapper w-screen md:relative md:left-[-150px]'>
      <Swiper
        slidesPerView={1}
        pagination={{
          type: "progressbar",
        }}
        navigation={false}
        modules={[Pagination]}
        className="carousel w-[80%] md:w-[50%] lg:w-[50%] mt-8 xl:w-[30%]"
      >
        {casino.map(({ image, name, title, text }) => {
          return (
            <SwiperSlide><CasinoCard image={image} name={name} title={title} text={text} /></SwiperSlide>
          )
        })}

        <SwiperSlide className='md:p-5 flex justify-center'>
          <div className='carousel-btn-container cursor-pointer'>
            <div className="carousel-btn flex flex-col justify-center items-center text-center mt-[60px] w-full h-[250px] lg:w-[350px] pr-[30px] pl-[30px] font-sans text-[28px] uppercase text-text-color border-[1px] border-[#c89c5967]">
              <span>Explore more of our gaming</span>
              <img className='lg:w-[150px] lg:relative lg:right-[-40px] lg:top-[20px] transition-right duration-[0.2s]'src={arrow} alt="" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

    </div>
  )
}

export default Carousel