import React from 'react'
import { cardInfosCours } from '../Constants';

import { SectionWrapper } from '../HOC';
import Carousel from 'react-multi-carousel';

const CoursParticuliers = () => {

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 664 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 664, min: 0 },
      items: 1
    }
  };
  const customCarouselStyles = `
  .react-multiple-carousel__arrow {
    background-color: #928FFF; 
    position:absolute;
    top:52%;
    transform: translateY(-50%); 
   
  }
  .react-multiple-carousel__arrow--left {
    left: 10px; /* Adjust the left positioning for the left arrow */
  }

  .react-multiple-carousel__arrow--right {
    right: 10px; /* Adjust the right positioning for the right arrow */
  }
  .react-multiple-carousel__arrow:hover {
    background-color: #5928E5;
    color: ;
  }
`;

  return (
    <div>
      <style>{customCarouselStyles}</style>
      
     
      <Carousel responsive={responsive}>
          {cardInfosCours.map((info)=>
                    <figure className="flex flex-col h-[240px]  items-center justify-center p-3 mx-2 rounded text-center bg-white border-b  drop-shadow-xl  dark:bg-[#1c103f] hover:drop-shadow-2xl  hover:brightness-110 transition-all duration-300 ease-in-out ">
                      <blockquote className=" mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{info.title}</h3>
                          <p className="my-4">{info.text}</p>
                      </blockquote>
                      <figcaption className="flex items-center justify-center space-x-3">
                          <img className="rounded-full w-9 h-9" src={info.pic} alt="profile picture" loading='lazy'/>
                          <div className="space-y-0.5 font-medium dark:text-white text-left">
                              <div>{info.tutor}</div>
                              <div className="text-sm text-gray-500 dark:text-gray-400">{info.proffes}</div>
                          </div>
                      </figcaption>    
                    </figure>
        
              )
              }
       
       </Carousel>
      
    </div>
  )

            }
export default SectionWrapper(CoursParticuliers,"")
