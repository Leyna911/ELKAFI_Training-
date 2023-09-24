import React from 'react'
import { HashLink } from 'react-router-hash-link'
import { hero } from '../Assets'
import { styles } from '../styles'


const Hero = () => {
  return (
    <section className='relative flex xl:flex-row flex-col  justify-center items-center gap-10 '>
      <div  >
        <div className='sm:w-[300px] md:w-[500px] '>
          <h1 className={`${styles.herHeadText} text-black capitalize `}>
           استكشف عالمًا من<span className='text-[#270092]'>المعرفة  </span> الطبية والتعليمية.
          </h1>
        </div>
        <div className=' w-[500px]'>
          <p className={`${styles.herSubText} mt-2 text-black-100 capitalize `}>
          اكتشف التدريب الطبي المتطور والدورات الأكاديمية التي تتكيف مع جميع المستويات.
          </p>
        </div>
        <div className='flex flex-row gap-3'>
         
          <HashLink to="/resultPage#contactSection" smooth>
            <button  
            className="bg-[#928FFF] hover:bg-[#5928E5] text-white font-bold py-3 px-5 my-5 rounded-full" 
            >
                اتصال
                <svg  className='inline-block ml-2' viewBox="0 0 16 16" width="16" height="16" stroke="currentColor" fill="currentColor"><path d="M8.7 2.1a0.4 0.4 0 0 0-0.6 0.6L13.1 7.2H2a0.4 0.4 0 0 0 0 0.8h11.1l-5 4.5a0.4 0.4 0 0 0 0.6 0.6l5.5-5.1a0.6 0.6 0 0 0 0-0.8L8.7 2.1Z"  /></svg>
            </button>
            
            </HashLink>
          
        </div>
      </div>
      <div className='flex  md:w-[700px] xs:w-[200] '>
        <img src={hero} alt='hero'/>
      </div>
    </section>
  )
}

export default Hero
