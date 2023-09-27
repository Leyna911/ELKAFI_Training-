import React from 'react'
import { styles } from '../styles'
import { SectionWrapper } from '../HOC'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {cardInfos} from "../Constants"

const Formations = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
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
        {cardInfos.map((info)=>(
        <div className='ml-2 mr-2 '>
          <div className=" max-w-sm h-[500px] border rounded  rounded-lg overflow-hidden shadow-lg hover:drop-shadow-2xl hover:brighteness-150 duration-300 ease-in-out">
              <img className="w-full " src={info.pic} alt={info.title} />     
              <div className="px-6 py-4">
                  <h5 className="font-bold text-[#1A1A1A] text-xl mb-2">{info.title}</h5>
                  <p className="text-gray-700 text-base">{info.text}</p>
                  {info.list && (
                    <ul className='mt-5'>
                      {info.list.map((item,i)=>(
                        <li key={i} className='  inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-[#928FFF] mr-2 mb-2'>{item}</li>
                      ))}
                    </ul>
                  )}
              </div>
          </div>
        </div> 

        ))

        }
        </Carousel>
     
    </div>
  )
}

export default SectionWrapper( Formations, "")

