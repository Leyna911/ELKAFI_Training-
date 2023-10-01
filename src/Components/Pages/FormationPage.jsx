import React from 'react'

import { styles } from '../../styles'
import CoursParticuliers from "../CoursParticuliers"

const FormationPage = () => {
  return (
    <div className='py-20'>
      <h3 className={`flex  text-right w-[800px] text-[#1A1A1A] font-black md:text-[38px] sm:text-[40px] xs:text-[40px] text-[30px]   `}> .أدرج مهارة جديدة في سيرتك الذاتية واحصل على وظيفة </h3>
      <div>
        <CoursParticuliers/>
      </div>
    </div>
    
  )
}

export default FormationPage
