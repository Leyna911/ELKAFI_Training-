import React from 'react'
import { styles } from '../styles';

import { SectionWrapper } from '../HOC';
import TutorsCard from './TutorsCard';

import CoursParticuliers from './CoursParticuliers';

const WhoAreWe = () => {
  return (
    <div>
      <div className='flex flex-col justify-center items-center'>
        <h1 className={`${styles.sectionSubText} `} >لماذا أخترتنا ؟</h1>
        <p className='text-center font-medium text-[#222222] tracking-wide' >.مؤسسة الكافي للتدريب و الاستشارات هي مؤسسة متخصصة في الاستشارة .تقييم و إعداد برامج التكوين </p>
      </div>
      <CoursParticuliers/>
    </div>
  )
}

export default SectionWrapper(WhoAreWe,"whoarewe");
