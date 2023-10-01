import React from 'react'
import { styles } from '../styles'
import { pic21 } from '../Assets'

import { SectionWrapper } from '../HOC'

import { HashLink } from 'react-router-hash-link'

const HeroFormationPage = () => {
  return (
    <div className='mt-20'>
        <div className='flex md:flex-row flex-col    gap-5 '>
            <div className='md:w-[700px]  h-auto rounded rounded-lg  '>
                <img src={pic21}/>
            </div>
            <div className='flex flex-col md:w-[600px] w-[395px]  text-right        '>
                <h3 className={`flex    text-[#1A1A1A] font-black md:text-[38px] sm:text-[40px] xs:text-[40px] text-[30px]   `}> أدرج مهارة جديدة في سيرتك الذاتية واحصل على وظيفة </h3>
                <p className={`${styles.herSubText} mt-2    `}> مؤسسة الكافي للتدريب و الاستشارات هي مؤسسة متخصصة في الاستشارة  تقييم و إعداد برامج  التكوين  مع تسليم شهادة معتمدة و  القدر على القيام بهذه الأنشطة خارج مؤسستنا  مع تسليم شهادة معتمدة و  القدر على القيام بهذه الأنشطة خارج مؤسستنا مع إمكانية التوظيف بعيادة الكافي ، لا يهم المستوى و لكن يهم الصحة الجيدة للمتربص و القدرة على التحمل  </p>
                <div className='flex flex-row justify-end '>  
                    <HashLink to="/registrationPage" smooth>
                        <button  
                        className="bg-[#5928E5]  text-white font-bold py-3 px-5 my-5 rounded-full" 
                        >   
                        <svg  className='inline-block mr-2 ' viewBox="0 0 16 16" width="16" height="16" stroke="currentColor" fill="currentColor"><path d="M7.3 13.1a0.4 0.4 0 1 0 0.6-0.6l-5-4.5h11.1a0.4 0.4 0 0 0 0-0.8H2.9l5-4.5a0.4 0.4 0 0 0-0.6-0.6L1.8 7.2a0.6 0.6 0 0 0-0.2 0.5 0.6 0.6 0 0 0 0.2 0.3l5.5 5.1Z"  /></svg>
                        تسجيل  في  الدورات
                        </button>     
                    </HashLink>  
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default SectionWrapper(HeroFormationPage,"")
