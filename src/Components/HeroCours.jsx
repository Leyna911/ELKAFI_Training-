import React from 'react'
import { bgCourPart } from '../Assets'
import { styles } from '../styles'
import { guyStudying } from '../Assets'
import { HashLink } from 'react-router-hash-link'


const HeroCours = () => {
  return (
    <div className='mt-20'>
        <div className='flex flex-col justify-center items-center gap-10  text-center '>
            <div className='flex flex-col sm:w-[300px] md:w-[500px]'>
                <h3 className={`${styles.herHeadText} `}>  تعليمٌ خاص، تفوقٌ  <span className='text-right text-[#270092]'>حقيقي</span> </h3>
                <p className={`${styles.herSubText} mt-2 md:w-[500px]   text-black-100`}> نحن هنا لمساعدة طلابنا على تحقيق النجاح في دراستهم وتطوير مهاراتهم الأكاديمية في مختلف المجالات  <span className='text-right text-[#270092]'>.</span></p>
            </div>
            <div className='flex flex-row justify-end gap-3'>  
          <HashLink to="/registrationPage" smooth>
            <button  
            className="bg-[#5928E5]  text-white font-bold py-3 px-5 my-5 rounded-full" 
            >   
              <svg  className='inline-block mr-2 ' viewBox="0 0 16 16" width="16" height="16" stroke="currentColor" fill="currentColor"><path d="M7.3 13.1a0.4 0.4 0 1 0 0.6-0.6l-5-4.5h11.1a0.4 0.4 0 0 0 0-0.8H2.9l5-4.5a0.4 0.4 0 0 0-0.6-0.6L1.8 7.2a0.6 0.6 0 0 0-0.2 0.5 0.6 0.6 0 0 0 0.2 0.3l5.5 5.1Z"  /></svg>
              تسجيل  في دروس الدعم
            </button>     
            </HashLink>
          
        </div>
  
        </div>
    </div>
  )
}

export default HeroCours
