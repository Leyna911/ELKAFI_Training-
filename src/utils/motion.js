import { scroller } from "react-scroll";



export const scrollToSection =(sectionId,setActive)=>{
    setActive(sectionId);
    scroller.scrollTo(sectionId,{
      duration:500,
      delay:0,
      smooth:'easeInOutQuart',
      
    })
  };

  export const staggerContainer = (staggerChildren, delayChildren) => {
    return {
      hidden: {},
      show: {
        transition: {
          staggerChildren: staggerChildren,
          delayChildren: delayChildren || 0,
        },
      },
    };
  };