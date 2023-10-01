import React from 'react'
import { pic10,pic12,pic13,pic14,pic21,pic3,pic4,pic5,pic6,pic7,pic8,pic9 } from '../Assets'
import CarouselForImages from './CarouselForImages'

const ImagesCarousel = () => {

    const slides=[
        pic10,pic12,pic13,pic14,pic21,pic3,pic4,pic5,pic6,pic7,pic8,pic9
    ]
  return (
    <div>
        <div className='max-w-sm '>
            <CarouselForImages>
                {slides.map((slide)=>(
                    <img src={slide} alt='slide'  loading='lazy'/>
                ))
                } 
            </CarouselForImages>
    </div>
   
    </div>
  )
}

export default ImagesCarousel
