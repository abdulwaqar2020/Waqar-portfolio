import Frontend from '../images/frontend.png'
import Backend from '../images/backend.png'
import Tools from '../images/tool.png'
import SoftSkill from '../images/softskill.png'


export const SKILLS = [
    {
        title: "Frontend",
        icon: Frontend,
        skills: [
            { skill: "HTML5", percentage: "90%" },
            { skill: "CSS", percentage: "75%" },
            { skill: "JavaScript", percentage: "50% - 60%" },
            { skill: "React", percentage: "65%" },
        ],
    },
    {
        title: "Backend",
        icon: Backend,
        skills: [
            { skill: "Node.js", percentage: "Start Soon" },
            { skill: "Express", percentage: "Start Soon" },

        ],
    },
    {
        title: "Tools",
        icon: Tools,
        skills: [
            { skill: "Visual Studio Code", percentage: "75%" },
            { skill: "Responsive Design", percentage: "65%" },
        ],
    },
    {
        title: "Soft Skills",
        icon: SoftSkill,
        skills: [
            { skill: "Problem Solving", percentage: "75%" },
            { skill: " Collaboration", percentage: "85%" },
            { skill: " Team Work", percentage: "90%" },
            { skill: " Attention on detials", percentage: "70%" },
        ],
    },
];

export const WORK_EXPERIENCE = [
    {
        title: "Junior Frontend Developer at iCreativez Nawabshah",
        date: "June, 2024 - Present",
        
        responsibilities:[
            "Design interactive and responsive UI for client's",
            "Working with team and solve the different problems",
            "Conducted code reviews"
        ],
    },
    {
        title: "Certification in CIT and Mobile App Development",
        date: "June, 2021 - Dec, 2021",
        responsibilities:[
            "Learn Html,Css ,Bootstrap and Javascript",
            "Doing multiple projects like  login form,clone of website etc",
            "Conducted code reviews"
        ],
    },
    {
        title: "Library Management System",
        date: "Jan, 2023 - Oct, 2023",
        responsibilities:[
            "Admin Upload Books and Deleted books from this system",
            "There are two roles one of Admin Role and second Student Role.",
            "This system contains books list which belongs to different field ",
            
        ],
    }
]