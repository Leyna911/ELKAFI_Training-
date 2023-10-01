import React from 'react'

import { styles } from '../../styles'
import CoursParticuliers from "../CoursParticuliers"
import HeroFormationPage from '../HeroFormationPage'


const FormationPage = () => {
  return (
    <div>
      <section id='heroFormationPage'>
        <HeroFormationPage/>
      </section>
      <section >
        <div className='flex flex-col justify-center items-center mt-20'>
          <h1 className={`${styles.sectionHeadText} `} > الدورات المتوفرة  </h1>
        </div>
        <CoursParticuliers/>
      </section>
      
    </div>
    
  )
}

export default FormationPage
