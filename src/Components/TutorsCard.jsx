import React from 'react'
import { PP } from '../Assets';
import { SectionWrapper } from '../HOC';


const TutorsCard = () => {
  return (
    
<div className="grid mb-8   rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2 gap-5">
    <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-[#5d496d] dark:border-gray-700">
        <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">التكوين في الحجامة</h3>
            <p className="my-4">مدة التكوين : أسبوع حضوري زائد ست أشهر متابعة شخصية تتخللها عدة ورشات تكوينية </p>
        </blockquote>
        <figcaption className="flex items-center justify-center space-x-3">
            <img className="rounded-full w-9 h-9" src={PP} alt="profile picture"/>
            <div className="space-y-0.5 font-medium dark:text-white text-left">
                <div>Bonnie Green</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Developer at Open AI</div>
            </div>
        </figcaption>    
    </figure>
    <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-tr-lg dark:bg-gray-800 dark:border-gray-700">
        <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">التكوين في الإصابات الرياضية</h3>
            <p className="my-4">مدة التكوين  : ثلاث أشهر نظري تطبيقي</p>
        </blockquote>
        <figcaption className="flex items-center justify-center space-x-3">
            <img className="rounded-full w-9 h-9" src={PP} alt="profile picture"/>
            <div className="space-y-0.5 font-medium dark:text-white text-left">
                <div>Roberta Casas</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Lead designer at Dropbox</div>
            </div>
        </figcaption>    
    </figure>
    <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-bl-lg md:border-b-0 md:border-r dark:bg-gray-800 dark:border-gray-700">
        <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">التكوين في الإسعافات الأولية " مسعف في كل عائلة </h3>
            <p className="my-4">مدة التكوين : ورشة لمدة يومين</p>
        </blockquote>
        <figcaption className="flex items-center justify-center space-x-3">
            <img className="rounded-full w-9 h-9" src={PP} alt="profile picture"/>
            <div className="space-y-0.5 font-medium dark:text-white text-left">
                <div>Jese Leos</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Software Engineer at Facebook</div>
            </div>
        </figcaption>    
    </figure>
</div>

  )
}

export default SectionWrapper(TutorsCard,"TutorsCard");
