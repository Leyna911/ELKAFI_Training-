import React from 'react'
import { SectionWrapper } from '../HOC';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { cardInfosCours } from '../Constants';


const CoursParticuliers = () => {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 3
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 2
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
            {cardInfosCours.map((info)=>(
                <div className='ml-2 mr-2'>
                    <div className="  h-[200px] max-w-sm lg:max-w-full lg:flex  ">
                    <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{ backgroundImage: `url(${info.pic})` }} >
                    </div>
                    <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                    <div className="mb-8">
                        <div className="text-gray-900 font-bold text-xl mb-2">{info.title}</div>
                        <p className="text-gray-700 text-base">{info.text}</p>
                    </div>
                    <div className="flex items-center">
                        <img className="w-10 h-10 rounded-full mr-4" src={info.pic} alt={info.title}/>
                        <div className="text-sm">
                        <p className="text-gray-900 leading-none">{info.tutor}</p>
                        <p className="text-gray-600">Aug 18</p>
                        </div>
                    </div>
                    </div>
                </div>
              </div>
            ))}
       </Carousel>
    </div>
  )
}

export default CoursParticuliers
