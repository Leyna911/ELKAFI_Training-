import React from 'react'
import { cardInfosCours } from '../Constants';
import { styles } from '../styles';
import { SectionWrapper } from '../HOC';

const CoursParticuliers = () => {

    

  return (
    <div>
      <div className='flex flex-col justify-center items-center'>
        <h1 className={`${styles.sectionHeadText} `} >اكتسب الثقة وازدهر بجانب الخبراء </h1>
      </div>
       <div  className='flex  flex-col sm:flex-row  mt-5  '>
        {cardInfosCours.map((info)=>
              
                  <figure class="flex flex-col w-[450px] items-center justify-center p-3 mx-2 rounded text-center bg-white border-b  drop-shadow-xl  dark:bg-[#1c103f] hover:drop-shadow-2xl  hover:brightness-110 transition-all duration-300 ease-in-out ">
                    <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">{info.title}</h3>
                        <p class="my-4">{info.text}</p>
                    </blockquote>
                    <figcaption class="flex items-center justify-center space-x-3">
                        <img class="rounded-full w-9 h-9" src={info.pic} alt="profile picture"/>
                        <div class="space-y-0.5 font-medium dark:text-white text-left">
                            <div>{info.tutor}</div>
                            <div class="text-sm text-gray-500 dark:text-gray-400">Developer at Open AI</div>
                        </div>
                    </figcaption>    
                  </figure>
      
            )
            }
       </div>
    </div>
  )

            }
export default SectionWrapper(CoursParticuliers,"")
