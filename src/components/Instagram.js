import React from 'react'

import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.png'
import img4 from '../assets/img4.png'
import img5 from '../assets/img5.png'
import img6 from '../assets/img6.png'
import img7 from '../assets/img7.png'
import img8 from '../assets/img8.png'

import Aos from 'aos'
import 'aos/dist/aos.css'

const photos = [
  {
    alt: 'photo',
    photo: img1
  }, {
    alt: 'photo',
    photo: img2
  }, {
    alt: 'photo',
    photo: img3
  },
  {
    alt: 'photo',
    photo: img4
  }, {
    alt: 'photo',
    photo: img5
  }, {
    alt: 'photo',
    photo: img6
  },
  {
    alt: 'photo',
    photo: img7
  },
  {
    alt: 'photo',
    photo: img8
  }

]
function Instagram() {
  return (
    <div className='instagram p-[10px] lg:mt-[100px]'>
      <div className="instagram-watermark lg:relative">
        <h1 className='hidden 
          lg:flex lg:absolute lg:top-[-120px] lg:left[-5px] text-secondary-color opacity-[0.1] text-[170px] font-bold 
          xl:text-[170px]'>INSTAGRAM</h1>
        <p className='text-text-color font-font-minerva text-[28px] 
          md:text-[32px] uppercase 
          lg:relative lg:top-[35px] 
          xl:text-[48px] xl:left-[30px] '>Share your experience</p>
      </div>
      <div className="instagram-container flex justify-center mt-[10px] 
        lg:mt-[100px]">
        <div className="photos-container flex gap-4 overflow-hidden 
          lg:grid lg:grid-cols-4">
          {photos.map(({ alt, photo }) => {
            return (
              <img className='w-auto h-[130px] md:h-[230px] lg:h-[230px] lg:w-[230px]' src={photo} alt={alt} />
            )
          })}
        </div>
      </div>

    </div>
  )
}

export default Instagram