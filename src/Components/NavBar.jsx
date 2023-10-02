import React,{useState} from 'react'
import { Link } from 'react-router-dom';

import { styles } from '../styles';
import { navLinks } from '../Constants';
import {logo,menu,close} from "../Assets"

import { useNavigate } from 'react-router-dom';

const NavBar = () => {
    const [active,setActive]=useState('');
    const [toggle, setToggle] = useState(false);

    const navigate = useNavigate();

    


  return (
    <nav className={`${styles.paddingX} w-full items-center py-2 fixed top-0 z-20 bg-gradient-to-r from-purple-700 to-indigo-600`}>

      <div className='w-full flex justify-between items-center max-w-7xl mx-auto relative '>
        
        <ul className='list-none hidden sm:flex flex-row gap-14 ml-12'>
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`text-white text-[18px]
              font-medium cursor-pointer`}
              onClick={()=>{
                setToggle(!toggle);
                if(link.title === 'دروس الدعم'){
                  navigate('/coursParticulierPage#herocours')
                }else if (link.title === 'تدريب احترافي'){
                  navigate('/formationPage#heroFormationPage')
                }else{
                  navigate('/')
                }
                
              }}
            >
              {link.title}
            </li>
          ) )}
        </ul>
        <Link
        to="/"
        className='flex items-center gap-2'
        onClick={() => {
          setActive("");
          window.scrollTo(0,0);
        }}
        >
          <img src={logo} alt="logo"  className='w-24 h-24 object-contain'/>
      
        </Link>
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img 
          src={toggle ? close : menu}
           alt="menu"
           className={`w-[28px] h-[28px] object-contain cursor-pointer `}
           onClick={()=>setToggle(!toggle)} 
           />

           <div className={`${!toggle ? 'hidden' : 'flex'} p-6 bg-white   absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl `} >
                <ul className='list-none  flex justify-end items-start flex-col gap-4 '>
                {navLinks.map((link) => (
                  <li
                    key={link.id}
                    className={`${
                      active === link.title && toggle ? 'text-white':'text-white'
                    } font-poppins font-medium cursor-pointer text-[16px]`}
                    onClick={()=>{
                      setToggle(!toggle);
                      if(link.title === 'دروس الدعم'){
                        navigate('/coursParticulierPage#herocours')
                      }else if (link.title === 'تدريب احترافي'){
                        navigate('/formationPage#heroFormationPage')
                      }else{
                        navigate('/')
                      }
                      
                    }}
                  >
                    <a href={`#${link.id}`} > {link.title} </a>

                  </li>
                ) )}
              </ul>
           </div>
        </div>
       
      </div>
    </nav>
   
  )
}

export default NavBar
