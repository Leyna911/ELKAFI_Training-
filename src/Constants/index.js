import { pic1 } from "../Assets";
import { pic2 } from "../Assets";
import { formMedic } from "../Assets";


export const navLinks = [
    {
        id:"acceuil", 
        title:"ترحيب"
    },
    {
        id:"formations", 
        title:"تدريب احترافي"
    },
    {
        id:"cours", 
        title:"دروس الدعم"
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
            'فرنسية ',
            'أدب عربي ',
            'هندسة ميكانيكية',
            'هندسة مدنية ',
            'هندسة كهربائية '    
        ]
        
    },

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