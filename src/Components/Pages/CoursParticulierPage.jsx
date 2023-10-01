import React from 'react'
import PrixCours from '../PrixCours'
import HeroCours from '../HeroCours'
import Formations from '../Formations'


const CoursParticulierPage = () => {
  return (
    <div>
      <section id='herocours' className='py-20'>
        <HeroCours/>
      </section>
      <section>
        <PrixCours/>
      </section>
      <section>
        <Formations/>
      </section>
      
    </div>
  )
}

export default CoursParticulierPage
