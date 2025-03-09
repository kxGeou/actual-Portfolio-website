import Project from "./ui/project-element";
import Scriptly from '../assets/images/scriptly.png'
import Theme from '../assets/images/theme.png'
import Red from '../assets/images/red.png'
import Todo from '../assets/images/todo.png'
import { Link } from "react-router-dom";
import { useState } from "react";
const projectList = [
    {
        language : ["Firebase", "Database", "Design"],
        image : Scriptly,
        alternative : "Scriptly hero section",
        project : "Platforma Edukacyjna",
        description : "Scriptly to interaktywna platforma edukacyjno-dokumentacyjna, której celem jest nauka podstaw JavaScript oraz umiejętność czytania dokumentacji technicznej. Projekt pomaga początkującym programistom w zrozumieniu kluczowych koncepcji języka oraz nawigowaniu po dokumentacji w efektywny sposób.",
        link: "https://scriptly-a2c84.web.app/"
    },
    {
        image : Theme,
        alternative : "Theme Website",
        project : "Motyw Visual Studio Code",
        description : "Stworzyłem własny, autorski motyw dla Visual Studio Code, zaprojektowany z myślą o minimalistycznym wyglądzie oraz czytelności kodu. Motyw wykorzystuje odcienie fioletu, nadając edytorowi nowoczesny i estetyczny wygląd, jednocześnie dbając o komfort pracy programisty.",
        link: "https://minimaldarktheme.netlify.app/"
    },
    {
        image : Todo,
        alternative : "Todo List website",
        project : "CRUD Todo lista",
        description : "Stworzyłem prostą aplikację typu Todo List z funkcjami CRUD (Create, Read, Update, Delete), która pozwala użytkownikowi na zarządzanie listą zadań. Aplikacja zapisuje dane bezpośrednio na urządzeniu użytkownika, co oznacza, że lista zadań pozostaje dostępna nawet po odświeżeniu strony, dzięki wykorzystaniu localStorage.",
        language : ["localStorage", "CRUD", "Design"],
        link: "https://tasktrack-typescript.netlify.app/"
    },
    {
        image : Red,
        alternative : "Red motion website",
        project : "Strona dla firmy z drukarkami 3D",
        description : "To był mój pierwszy komercyjny projekt – stworzyłem stronę internetową dla firmy R3d, specjalizującej się w drukarkach 3D. Zajmowałem się zarówno projektowaniem, jak i implementacją całej strony. Zrealizowałem ją w React, dbając o nowoczesny wygląd oraz responsywność, aby strona działała poprawnie na różnych urządzeniach.",
        language : [ "React", "Design"],
        link: "https://r3dmotion.com/"
    },
]


export default function Projects() {
    const [hover, setHover] = useState<boolean>(false)
    const [Hoverindex, setHoverIndex] = useState<any>(null);
    
  return (
    <section id="projekty" >
        <h2 className="font-semibold text-[20px] mb-8">Projekty</h2>
        <div className="flex flex-col gap-20">
            {projectList.map((project, projectIndex) => (
                <div onMouseEnter={() => setHoverIndex(projectIndex)} key={projectIndex} onMouseLeave={() => setHoverIndex(null)}>
                    <Project hoverIndex={Hoverindex} itemIndex={projectIndex}  languages={project.language} image={project.image} project={project.project} link={project.link} description={project.description} alternative={project.alternative}></Project>
                </div>
            ))}
        </div>
        <p className="font-semibold text-[1.20rem] mt-12 flex justify-start items-center gap-3 cursor-pointer" onMouseLeave={() => setHover(!hover)} onMouseEnter={() => setHover(!hover)}>
            <Link to="" className={`transition-all duration-300 flex justify-center items-center gap-1`}>Zobacz wszystkie projekty
               <i className={`fa-solid fa-arrow-right text-[1rem] ml-2 transition-all duration-200 ${hover && "translate-x-2 text-text-box"}`}></i>
            </Link>
        </p>
    </section>
  )
}
