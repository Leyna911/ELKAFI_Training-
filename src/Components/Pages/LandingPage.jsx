import React from 'react'
import Hero from '../Hero';
import WhoAreWe from '../WhoAreWe';
import Formations from '../Formations';
import CoursParticuliers from '../CoursParticuliers';

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
         <CoursParticuliers/>
     </section>
     <section id='formations'>
        <Formations/>
     </section>
    
    </div>
  )
}

export default LandingPage
