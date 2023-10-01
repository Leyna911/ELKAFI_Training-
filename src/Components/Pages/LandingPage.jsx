import React from 'react'
import Hero from '../Hero';
import WhoAreWe from '../WhoAreWe';
import Formations from '../Formations';
import CoursParticuliers from '../CoursParticuliers';

import { styles } from '../../styles';

const LandingPage = () => {
  return (
    <div>
     <section id='acceuil' className='py-20'>
        <Hero/>
     </section> 
     <section >
        <WhoAreWe/>
     </section>
     <section id='coursParticuliers'>
         <div className='flex flex-col justify-center items-center mt-20'>
            <h1 className={`${styles.sectionHeadText} `} >اكتسب الثقة وازدهر بجانب الخبراء </h1>
         </div>
         <CoursParticuliers/>
     </section>
     <section id='formations'>
        <Formations/>
     </section>
    
    </div>
  )
}

export default LandingPage
