import React from 'react'
import Hero from '../Hero';
import WhoAreWe from '../WhoAreWe';
import Formations from '../Formations';

const LandingPage = () => {
  return (
    <div>
     <section className='py-20'>
        <Hero/>
     </section> 
     <section>
        <WhoAreWe/>
     </section>
     <section>
        <Formations/>
     </section>
    </div>
  )
}

export default LandingPage
