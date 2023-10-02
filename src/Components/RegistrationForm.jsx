import React, { useState } from 'react'
import { useRef } from 'react';

import { DatePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs'
import dayjs from 'dayjs';

import emailjs from "@emailjs/browser"

import { styles } from '../styles';

const RegistrationForm = () => {

  const formRef=useRef(); 
  const [form,setForm]=useState({
    name:"",
    lastName:"",
    email:"",
    DOB:"",
    address:"",
    service:"",
  })

  const [selectedService,setSelectedService]=useState("");
  const [loading,setLoading]=useState(false);



  const handleServiceChange=(value)=>{
    setSelectedService(value);
    setForm({...form, service:value})
  }

  const handleInputChange=(e)=>{
    const {name,value} = e.target ; 
    setForm({...form,[name]:value});
     
  }
 
  const handleSubmit=(e)=>{
      e.preventDefault();
      setLoading(true)
      emailjs
        .send(
          'service_i9mcwnp',
          'template_navc4y8',
          {
            form_name: form.name,
            to_name: "EL KAFI TRAINING",
            from_email: form.email,
            last_name: form.lastName,
            dob: form.DOB,
            service: form.service,
            address: form.address,
          },
          '5_8eoHPj5GL7i6Ivp'
          
        )
        .then(
          ()=>{
            setLoading(false)
            alert("! تم التسجيل بنجاح ")

            setForm({
              name:"",
              lastName:"",
              email:"",
              DOB:"",
              address:"",
              service:"",
            })
          },
          (error)=>{
            setLoading(false);
            console.error(error);

            alert('try again')
          }
        )
      


      /*if(form.name && form.lastName && form.DOB && form.address && form.email && selectedService){
        console.log("!التسجيل بنجاح")
      }else{
        console.log(".يرجى ملء جميع الحقول ")
      }*/
  }

  

  return (
    <div className='flex flex-col justify-center items-center my-[180px] text-right   '>
     <h2 className={`${styles.sectionHeadText} mb-2` }>تعجبك مؤسستنا و تريد التسجيل ؟</h2>
      <h3 className={`${styles.titles} mb-3 text-[#444444]`}>يرجى ملء جميع الحقول المطلوبة</h3>
      <form 
      ref={formRef}
      onSubmit={handleSubmit}
      className="w-full max-w-lg border-lg  rounded shadow shadow-md  p-10">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block   text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
            :الإسم 
            </label>
            <input 
            required
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200  rounded py-3 px-4 mb-3  focus:outline-none focus:bg-white" id="grid-first-name" type="text"
            name='name'
            value={form.name}
            onChange={handleInputChange}
            />
           
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block  text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
            اللقب :
            </label>
            <input
            required
            name='lastName'
            value={form.lastName}
            onChange={handleInputChange}
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4  focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" />
          </div>
        </div>
        <div className="flex flex-col justify-end mb-6">
          <div className="text-right">
            <label className="block text-gray-700 text-xs font-bold mb-2">
              :تاريخ الميلاد 
            </label>
          </div>
          <div className="relative max-w-sm ml-auto">
            <div className="absolute inset-y-0 right-0 flex items-center pr-3.5 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" >
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
              </svg>
            </div>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                required  
                type="text" 
                name='DOB'
                value={form.DOB ? dayjs(form.DOB).format("YYYY-MM-DD") : null }
                onChange={(date)=>handleInputChange({target:{name:'DOB',value:date.format("YYYY-MM-DD")}})}
                className="text-right bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pr-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                placeholder="حدد تاريخ ميلاد"
              />
            </LocalizationProvider>
           
          </div>
        </div>
        <div className='px-3 mb-6 '>
           <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
           :البريد الالكتروني 
           </label>
            <input
              required
              type='email'
              name='email'
              value={form.email}
              onChange={handleInputChange}
              placeholder='ما هو بريدك الإلكتروني'
              className="text-right  appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            />
          
        </div>
        <div className='px-3 mb-6 '>
           <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
           :العنوان 
           </label>
            <input
              type='text'
              name='address'
              value={form.address}
              onChange={handleInputChange}
              className="text-right  appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            />
          
        </div>

        <div className='mb-6'>
              <div className='flex flex-row gap-10 justify-end mr-6' >
                <div className="flex items-center mb-4">
                  <input 
                  id="formation" 
                  type="radio" 
                  name="service" 
                  value="التكوينات" 
                  onChange={()=>handleServiceChange('formation-select')}
                  className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" />
                  
                  <label 
                  htmlFor="formation" 
                  className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  التكوينات
                  </label>
                </div>

                <div className="flex items-center mb-4">
                  <input 
                  id="courpart" 
                  type="radio" 
                  name="service" 
                  value="دروس خصوصية" 
                  onChange={()=>handleServiceChange('courpart-select')}
                  className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"/>
                  <label htmlFor="courpart" className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  دروس خصوصية
                  </label>
                </div>

                <div className="flex items-center mb-4">
                  <input 
                  id="langues" 
                  type="radio" 
                  name="service" 
                  value="اللغات"
                  onChange={()=>{handleServiceChange('langues-select')}}
                   className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:bg-gray-700 dark:border-gray-600"/>
                  <label htmlFor="langues" className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  اللغات
                  </label>
                </div>
              </div>
           

        </div>
        {selectedService === 'formation-select' && (
           <div className='text-right mb-6'>       
           <label className="service-select block mb-2 text-sm font-medium text-gray-900 dark:text-white">إختر	التكوين </label>
           <select 
           name='service'
           id="formation" 
           value={form.service}
           onChange={handleInputChange}
           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
             <option>	التكوين في الحجامة </option>
             <option>التكوين في الإصابات الرياضية </option>
             <option>	التكوين في الإسعافات الأولية </option>
           </select>
       </div>  
        )}
        
        {selectedService === 'courpart-select' && (
            <div className='text-right mb-6'>       
            <label className="service-select  block mb-2 text-sm font-medium text-gray-900 dark:text-white">إختر	درس خصوصي </label>
            <select
              name='service'
              value={form.service}
              onChange={handleInputChange}
            id="courpart" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option>   	رياضيات 	السنة الثانية متوسط  </option>
              <option>  	فيزياء  	السنة الثانية متوسط  </option>
              <option>	رياضيات 	السنة الرابعة متوسط   </option>
              <option>   	فيزياء 	السنة الرابعة متوسط </option>
              <option>    	أدب عربي السنة الرابعة متوسط </option>   
              <option>  	رياضيات  	الأقسام النهائية    </option>
              <option>   	فيزياء 	الأقسام النهائية    </option>
              <option>    انجليزية 	الأقسام النهائية   </option>
              <option>   	تاريخ و جغرافيا  الأقسام النهائية    </option>
              <option>   	فرنسية الأقسام النهائية    </option>
              <option>   	فرنسية 	الأقسام النهائية    </option>
              <option>   	هندسة ميكانيكية 	الأقسام النهائية    </option>
              <option>   	هندسة مدنية الأقسام النهائية    </option>
              <option>   	هندسة كهربائية الأقسام النهائية    </option>

            </select>
        </div> 
        )}
         
          {selectedService === 'langues-select' && (
               <div className='text-right mb-6 '>       
               <label className="service-select  block mb-2 text-sm font-medium text-gray-900 dark:text-white">إختر	دورات لغة </label>
               <select 
               name='service'
                value={form.service}
                onChange={handleInputChange}
               id="langues" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                 <option>	  لغة فرنسية  </option>
                 <option> لغة انجليزية   </option>
                 <option>	لغة اسبانية </option>
                 <option>	 	دروس الدعم في اللغة الانجليزية للأطفال  </option>
               </select>
           </div> 
          )}
        
        <button 
          type='submit'
          className='border border-[#61b95f]  hover:bg-[#04C200] hover:text-white text-[#04C200] font-bold py-3 px-5 my-5 rounded'>
          {loading ?' يرجى الانتظار ': 'تسجيل'} 
        </button>


   
       
</form>
    </div>
    

  )

}

export default RegistrationForm;