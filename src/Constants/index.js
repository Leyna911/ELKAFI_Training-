import { pic1 } from "../Assets";
import { pic2 } from "../Assets";
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
        title:"الرئيسية"
    }
];

export const cardInfos = [
    {
        id:'cardne',
        pic:pic1,
        title:"دروس الدعم",
        text:"تحسين المستوى  في اللغة الانجليزية للأطفال",
        
    },
    {
        id:'cardwo',
        pic:pic1,
        title:"السنة الرابعة متوسط BEM",
        text:"تحسين المستوى  في اللغة الانجليزية للأطفال",
        list:[
            'رياضيات' ,
            'فيزياء',       
        ]
        
    },
    {
        id:'cardhree',
        pic:pic2,
        title:"السنة الثانية متوسط",
        text:"تحسين المستوى  في اللغة الانجليزية للأطفال",
        list:[
            'رياضيات' ,
            'فيزياء',       
        ]
        
    },
    {
        id:'cardour',
        pic:pic1,
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
        id:'cardfive',
        pic:pic2,
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
        tutor:"Lazhar Boudchicha "
    },
    {
        id:'2',
        pic:formMedic,
        title:"التكوين في الإصابات الرياضية ",
        text:"مدة التكوين  : ثلاث أشهر نظري تطبيقي ",
        tutor:"Mehdi Bouhenna "
    },
    {
        id:'3',
        pic:formMedic,
        title:"	'التكوين في الإسعافات الأولية  'مسعف في كل عائلة ",
        text:"مدة التكوين : ورشة لمدة يومين ",
        tutor:"Mehdi Bouhenna "
    },
 
]

export const services =[
    {
        id:1,
        icon:academic,
        title:"دروس خصوصية لمختلف المستويات",
        btn: "اكتشف دروسنا الخصوصية",
        sectionId:'formations'
      
    },
    {
        id:2,
        icon:medical,
        title:"التدريب المهني مع تسليم الشهادة",
        btn:" اكتشف دوراتنا التدريبية المهنية",
        sectionId:'coursParticuliers'
        
    }
]

export const pricesBEM =[
    {
        id:'p1',
        title:'	"السنة الرابعة متوسط "مواد أساسية ',
        prix:"2000",
        plans:[
            'math: 2000DA',
            'physique: 2000DA',
        ]
    },
    {
        id:'p1',
        title:'	السنة الرابعة متوسط',
        prix:"2000",
        plans:[
            'francais: 2000DA',
            'anglais: 2000DA',
        ]
    },
    {
        id:'p1',
        title:'	السنة الرابعة متوسط',
        prix:"2000",
        plans:[
            'math: 2000DA',
            'physique: 2000DA',
        ]
    }
]


export const pricesBAC =[
    {
        id:'p1',
        title:'"الأقسام النهائية "مواد أساسية' ,
        prix:"2000",
        plans:[
            '2000DA :	رياضيات ',
            '2000DA :	فيزياء  ',
            '2000DA :	أدب عربي  ',
            '2000DA :هندسة ميكانيكية  ',
            '2000DA :	هندسة مدنية  ',
            '2000DA :	هندسة كهربائية  ',
        ]
    },
    {
        id:'p1',
        title:'"الأقسام النهائية "مواد ثانوية ',
        prix:"2000",
        plans:[
            '2000DA :	تاريخ و جغرافيا  ',
        ]
    },
    {
        id:'p1',
        title:'"الأقسام النهائية "لغات ',
        prix:"2000",
        plans:[
            '2000DA :	انجليزية ',
            '2000DA :	فرنسية  ',
        ]
    }
]


export const prices2CEM =[
    {
        id:'p1',
        title:'	"السنة الثانية متوسط "مواد أساسية ',
        prix:"2000",
        plans:[
            '500DA :	رياضيات ',
        ]
    },
    {
        id:'p1',
        title:'	"السنة الثانية متوسط "مواد ثانوية',
        prix:"2000",
        plans:[
            '500DA :	فيزياء  ',

        ]
    },
    
]