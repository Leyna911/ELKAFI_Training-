import React from 'react'
import { pic10,pic12,pic13,pic14,pic21,pic3,pic4,pic5,pic6,pic7,pic8,pic9 } from '../Assets'
import CarouselForImages from './CarouselForImages'

import { LazyLoadImage } from 'react-lazy-load-image-component'

const ImagesCarousel = () => {

    const slides=[
        pic5,pic14,pic21,pic3,pic4,pic10,pic12,pic13,pic6,pic7,pic8,pic9
    ]
  return (
    <div>
        <div className='max-w-sm '>
            <CarouselForImages>
                {slides.map((slide ,i )=>(
                    <LazyLoadImage key={i} src={slide} alt='slide'  loading='lazy'/>
                ))
                } 
            </CarouselForImages>
    </div>
   
    </div>
  )
}

export default ImagesCarousel
