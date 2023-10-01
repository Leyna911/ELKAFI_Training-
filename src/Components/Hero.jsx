import React from 'react'
import { HashLink } from 'react-router-hash-link'
import { styles } from '../styles'
import ImagesCarousel from './ImagesCarousel'

const Hero = () => {
  return (
    <section className='relative bg-gradient-to-r from-purple-700 to-indigo-600 py-24 w-full h-auto       '>

      <div className='flex flex-col justify-center text-center items-center ' >
        <div className='sm:w-[300px] md:w-[500px]  '>
          <h1 className={`${styles.herHeadText} text-white  `}>
           استكشف عالمًا من المعرفة  الطبية والتعليمية
          </h1>
        </div>
        <div className=' w-[500px]'>
          <p className={`${styles.herSubText} mt-2 text-white  `}>
          اكتشف التدريب الطبي المتطور والدورات الأكاديمية التي تتكيف
           مع جميع المستويات
          </p>
        </div>
        <div className='flex flex-row justify-end gap-3'>  
          <HashLink to="/registrationPage" smooth>
            <button
              className="bg-[#FDC403] hover:bg-[#5928E5] text-black font-bold py-3 px-4 my-5 rounded-full text-[20px] flex items-center"
              >
              <div className="flex items-center">
                <svg
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  stroke="currentColor"
                  fill="currentColor"
                >
                  <path d="M11 19.6a0.6 0.6 0 1 0 0.8-0.8l-7.4-6.8h16.6a0.6 0.6 0 0 0 0-1.2H4.4l7.4-6.8a0.6 0.6 0 0 0-0.8-0.8L2.7 10.7a0.9 0.9 0 0 0-0.3 0.8 0.9 0.9 0 0 0 0.3 0.6l8.3 7.5Z" />
                </svg>
                <span className="ml-2">تسجيل</span>
              </div>
        </button>

                
            </HashLink>
        </div >
        <div className='mt-6'>
          <ImagesCarousel/>
        </div>
      </div>
    </section>
  )
}

export default Hero
