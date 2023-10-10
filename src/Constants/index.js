import { pic1, pic10, pic3, pic4,pic5,pic6,pic7,pic8 } from "../Assets";
import { pic2,english,math } from "../Assets";
import { formMedic } from "../Assets";
import { academic } from "../Assets";
import { medical } from "../Assets";


export const navLinks = [
   
    {
        id:"formations", 
        title:"تدريب احترافي"
    },
    {
        id:"cours", 
        title:"دروس الدعم"
    },
    {
        id:"acceuil", 
        title:"الصفحة الرئيسية"
    }
];

export const cardInfos = [
    {
        id:1,
        pic:english,
        title:"دروس الدعم",
        text:"تحسين المستوى  في اللغة الانجليزية للأطفال",
        
    },
    {
        id:2,
        pic:pic1,
        title:"السنة الرابعة متوسط BEM",
        text:"تحسين المستوى  في اللغة الانجليزية للأطفال",
        list:[
            'رياضيات' ,
            'فيزياء',       
        ]
        
    },
    {
        id:3,
        pic:pic2,
        title:"السنة الثانية متوسط",
        text:"تحسين المستوى  في اللغة الانجليزية للأطفال",
        list:[
            'رياضيات' ,
            'فيزياء',       
        ]
        
    },
    {
        id:4,
        pic:math,
        title:"الأقسام النهائية BAC",
        text:"تحسين المستوى  في اللغة الانجليزية للأطفال",
        list:[
            'رياضيات' ,
            'فيزياء',   
            'انجليزية ',
            'تاريخ و جغرافيا ',
            'لغة فرنسية  ',
            'أدب عربي ',
            'هندسة ميكانيكية',
            'هندسة مدنية ',
            'هندسة كهربائية '    
        ]
        
    },
    {
        id:5,
        pic:english,
        title:"لغات ",
        text:"المؤسسة متخصصة في تعليم اللغات حيث توفر برامج تعليمية عالمية موجهة لكل الأعمار و الفئات ابتداءا من 6 سنوات التحضير لشهادات عالمية تحت اشراف أساتذة ذو خبرة في التدريس و بعدة طرق" ,       
        list:[
            'لغة فرنسية ' ,
            'لغة انجليزية ',   
            'لغة اسبانية  ',   
        ]
        
    }

]

export const cardInfosCours = [
    {
        id:'1',
        pic:formMedic,
        title:"	التكوين في الحجامة ",
        text:"مدة التكوين : أسبوع حضوري زائد ست أشهر متابعة شخصية تتخللها عدة ورشات تكوينية ",
        tutor:"Mahdi Bouhenna ",
        proffes:"Phd médecine de sport "
    },
    {
        id:'2',
        pic:formMedic,
        title:"التكوين في الإصابات الرياضية ",
        text:"مدة التكوين  : ثلاث أشهر نظري تطبيقي ",
        tutor:"Mahdi Bouhenna ",
        proffes:"Phd médecine de sport "
    },
    {
        id:'3',
        pic:formMedic,
        title:"	'التكوين في الإسعافات الأولية  'مسعف في كل عائلة ",
        text:"مدة التكوين : ورشة لمدة يومين ",
        tutor:"Mahdi Bouhenna ",
        proffes:"Phd médecine de sport "
    },
    {
        id:'4',
        pic:formMedic,
        title:"	التكوين في العناية بالمرضى ",
        text:"مدة التكوين : شهر نظري + 6 أشهر متابعة شخصية ",
        tutor:"Mahdi Bouhenna ",
        proffes:"Phd médecine de sport "
    },
 
]

export const services =[
    {
        id:1,
        icon:academic,
        title:"دروس خصوصية لمختلف المستويات",
        btn: "اكتشف دروسنا الخصوصية",
        sectionId:'formations',
     
      
    },
    {
        id:2,
        icon:medical,
        title:"التدريب المهني مع تسليم الشهادة",
        btn:" اكتشف دوراتنا التدريبية المهنية",
        sectionId:'coursParticuliers',
       
        
    }
]

export const pricesBEM =[
    {
        id:'p1',
        title:'	"السنة الرابعة متوسط "مواد أساسية ',
        prix:"2000",
        plans:[
            'رياضيات ',
            'فيزياء  ',
            'أدب عربي  ',
        ]
    },
]


export const pricesBAC =[
    {
        id:'p1',
        title:'"الأقسام النهائية "مواد أساسية' ,
        prix:"2000",
        plans:[
            'رياضيات ',
            'فيزياء  ',
            'أدب عربي  ',
            'هندسة ميكانيكية  ',
            'هندسة مدنية  ',
            'هندسة كهربائية  ',
        ]
    },
    {
        id:'p1',
        title:'"الأقسام النهائية "مواد ثانوية ',
        prix:"2000",
        plans:[
            '	تاريخ و جغرافيا  ',
        ]
    },
    {
        id:'p1',
        title:'"الأقسام النهائية "لغات ',
        prix:"2000",
        plans:[
            '	انجليزية ',
            'فرنسية  ',
        ]
    }
]


export const prices2CEM =[
    {
        id:'p1',
        title:'	"السنة الثانية متوسط "مواد أساسية ',
        prix:"2000",
        plans:[
            'رياضيات ',
        ]
    },
    {
        id:'p1',
        title:'	"السنة الثانية متوسط "مواد ثانوية',
        prix:"2000",
        plans:[
            'فيزياء  ',

        ]
    },
    
]

export const imgHero=[
    {
        id:1,
        img:pic10,
    },
    {
        id:2,
        img:pic4,
    },
    {
        id:3,
        img:pic3,
    },
    {
        id:4,
        img:pic5,
    },
    {
        id:5,
        img:pic6,
    },
    {
        id:6,
        img:pic7,
    },
    {
        id:7,
        img:pic8,
    },
]