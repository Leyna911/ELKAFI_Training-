import React from 'react'
import { styles } from '../styles';

import { SectionWrapper } from '../HOC';
import { services } from '../Constants';

import { useState } from 'react';
import { scrollToSection } from '../utils/motion';

const WhoAreWe = () => {
  const [active,setActive]=useState('');

  const handleButtonClicked=(sectionId)=>{
      setActive(sectionId);
      scrollToSection(sectionId,setActive)
  }
  return (
    <div>
      <div className='flex flex-col justify-center '>
        <h1 className={`${styles.sectionSubText} `} >من نحن ؟</h1>
        <p className='text-center font-medium text-[#222222] tracking-wide' >.مؤسسة الكافي للتدريب و الاستشارات هي مؤسسة متخصصة في الاستشارة .تقييم و إعداد برامج التكوين </p>
      </div>
      <div className='flex   sm:flex-row flex-col justify-center items-center mt-10 gap-10'>
          {services.map((service)=>(
            <div className='flex flex-col  items-center  '>
              <div className='flex items-center justify-center w-[100px] h-[100px] bg-[#f0f0f0] rounded-full '><img src={service.icon} className='w-3/4 h-auto '/></div>
              <h3 className={`${styles.titles} w-[250px] flex text-center  `}>{service.title}</h3>
              <div>    
               
                    <button 
                      onClick={()=>handleButtonClicked(service.sectionId)} 
                      className="border border-[#615dcf] hover:bg-[#5928E5] hover:text-white text-[#5928E5] font-bold py-3 px-5 my-5 rounded" 
                    >
                      {service.btn}
                    </button>
                
                    
            </div>
            </div>
          ))
          }
      </div>
      
    </div>
  )
}

export default SectionWrapper(WhoAreWe,"whoarewe");
