import React from 'react'
import { styles } from '../styles'
import SectionWrapper from '../HOC/SectionWrapper'
import { useState } from 'react'

import { prices2CEM, pricesBAC, pricesBEM } from '../Constants'

const PrixCours = () => {
  const [clickedButton,setClickedButton]=useState();

  const handleClickedBtn=(buttonName)=>{
      setClickedButton(buttonName);
  }

  return (
    <div className='mt-[-100px]'>
      <div className='flex flex-col justify-center items-center '>
        <h1 className={`${styles.sectionHeadText}`}>اكتشف خطة الدفع لدينا</h1>
      </div >
      <div className='flex md:flex-row  flex-col  justify-center items-center md:gap-5 gap-2 mt-5'>
        <button 
        type="button" 
        id='bem'
        name='priceplan'
        onClick={()=>handleClickedBtn('bem')}
        className={` font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:bg-gradient-to-bl  mr-2 mb-2
            ${clickedButton === 'bem' 
              ? 'bg-gradient-to-br from-purple-600 to-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 text-white'
              : 'border border-[#615dcf]  text-[#5928E5] '
          }
        `}> 	السنة الرابعة متوسط    </button>
        <button 
        type="button"
        id='bac'
        name='priceplan' 
        onClick={()=>handleClickedBtn('2cem')}
        className={` font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:bg-gradient-to-bl  mr-2 mb-2
        ${clickedButton === '2cem' 
          ? 'bg-gradient-to-br from-purple-600 to-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 text-white'
          : 'border border-[#615dcf]  text-[#5928E5] '
      }
    `}> 	السنة الثانية متوسط  </button>
        <button 
        type="button" 
        id='2ndcem'
        name='priceplan'
        onClick={()=>handleClickedBtn('bac')}
        className={` font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:bg-gradient-to-bl  mr-2 mb-2
            ${clickedButton === 'bac' 
              ? 'bg-gradient-to-br from-purple-600 to-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 text-white'
              : 'border border-[#615dcf]  text-[#5928E5] '
          }
        `}> 	الأقسام النهائية      </button>
      </div>
      {clickedButton === '2cem' && (
        <div className='flex  md:flex-row flex-col gap-2 mt-5'>
          {prices2CEM.map((plan,index)=>(
              <div key={index} class="relative w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                <h5 class="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">{plan.title}</h5>
                <div class="flex items-baseline text-gray-900 dark:text-white">
                    <span class="text-3xl font-semibold">DZD</span>
                    <span class="text-5xl font-extrabold tracking-tight">2000</span>
                    <span class="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">/شهر</span>
                </div>
                <ul  class="space-y-5 my-7">
                  {plan.plans.map((module,index)=>(
                    <div key={index} >
                        <li class="flex space-x-3 items-center">
                        <svg class="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                        </svg>
                        <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">{module}</span>
                      </li>
                    </div>
                  
                  ))}      
                </ul>
                </div>
          ))

          }
        </div>
      )

      }
            {clickedButton === 'bem' && (
        <div className='flex  md:flex-row flex-col gap-2 mt-5'>
          {pricesBEM.map((plan,index)=>(
              <div key={index} class="relative w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
              <h5 class="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">{plan.title}</h5>
              <div class="flex items-baseline text-gray-900 dark:text-white">
                  <span class="text-3xl font-semibold">DZD</span>
                  <span class="text-5xl font-extrabold tracking-tight">2000</span>
                  <span class="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">/month</span>
              </div>
              <ul  class="space-y-5 my-7">
                {plan.plans.map((module,index)=>(
                  <div key={index} >
                      <li class="flex space-x-3 items-center">
                      <svg class="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                      </svg>
                      <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">{module}</span>
                    </li>
                  </div>
                
                ))}      
              </ul>
              </div>
          ))

          }
        </div>
      )

      }
            {clickedButton === 'bac' && (
        <div className='flex md:flex-row flex-col gap-2 mt-5'>
          {pricesBAC.map((plan,index)=>(
              <div key={index} class="relative w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
              <h5 class="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">{plan.title}</h5>
              <div class="flex items-baseline text-gray-900 dark:text-white">
                  <span class="text-3xl font-semibold">DZD</span>
                  <span class="text-5xl font-extrabold tracking-tight">2000</span>
                  <span class="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">/month</span>
              </div>
              <ul  class="space-y-5 my-7">
                {plan.plans.map((module,index)=>(
                  <div key={index} >
                      <li class="flex space-x-3 items-center">
                      <svg class="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                      </svg>
                      <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">{module}</span>
                    </li>
                  </div>
                
                ))}      
              </ul>
             </div>
          ))

          }
        </div>
      )

      }
    </div>
  )
}

export default SectionWrapper(PrixCours,"")

