import Project from "./ui/project-element";
import Scriptly from '../assets/images/scriptly.png'
import Theme from '../assets/images/theme.png'
import Red from '../assets/images/red.png'
import Todo from '../assets/images/newTodo.png'
import Wordle from '../assets/images/wordle.png';
import WhatAbout from '../assets/images/whatAbout.png';
import { Link } from "react-router-dom";
import { useState } from "react";
const projectList = [
    {
        image : WhatAbout,
        alternative : "What about website",
        project : "Co powiesz na..?",
        description : "'Co powiesz na' to interaktywna strona która pomaga znaleźć ludziom pomysły na różne aktywności w zależności od wybranych przez użytkowników filtrów",
        language : ["React", "Filter", "Figma", "Tailwind", "CSS", "Desktop Only"],
        link: "https://copowieszna.netlify.app/"
    },
    {
        image : Theme,
        alternative : "Theme Website",
        project : "Motyw Visual Studio Code",
        description : "Stworzyłem własny, autorski motyw dla Visual Studio Code, zaprojektowany z myślą o minimalistycznym wyglądzie oraz czytelności kodu. Motyw wykorzystuje odcienie fioletu, nadając edytorowi nowoczesny i estetyczny wygląd, jednocześnie dbając o komfort pracy programisty.",
        link: "https://minimaldarktheme.netlify.app/"
    },
    {
        image : Red,
        alternative : "Red motion website",
        project : "Strona dla firmy z drukarkami 3D",
        description : "To był mój pierwszy komercyjny projekt – stworzyłem stronę internetową dla firmy R3d, specjalizującej się w drukarkach 3D. Zajmowałem się zarówno projektowaniem, jak i implementacją całej strony. Zrealizowałem ją w React, dbając o nowoczesny wygląd oraz responsywność, aby strona działała poprawnie na różnych urządzeniach.",
        language : [ "React", "Design"],
        link: "https://r3dmotion.com/"
    },
    {
        image : Wordle,
        alternative : "Wordle Copy Game",
        project : "Wordle wersja uproszczona",
        description : "Stworzyłem kopie popularnej gry słownej WORDLE, Lekko zmieniłem design planszy by była bardziej przyjazna dla oka",
        language : [ "React", "Design", "JSON", "TypeScript", "Regex", "Desktop Only"],
        link: "https://wordleclonetype.netlify.app/"
    },
    {
        image : Todo,
        alternative : "AI Todo List website",
        project : "To-Do lista zasilana AI oraz bazą danych supabase",
        description : "Stworzyłem aplikacje To-Do w której użytkownik tworzy swoje konto na którym baza danych supabase przechowuje jego To-Do, aplikacja zasilana jest przez AI dzięki któremu kategorie To-do są automatycznie ustawione zależnie od tytułu zadania, użytkownik także ma generowane oryginalne profilowe",
        language : ["Supabase", "CRUD", "AI", "TypeScript", "React", "Auth"],
        link: "https://aitaskamanager.netlify.app/"
    },
    {
        language : ["Firebase", "Database", "Design"],
        image : Scriptly,
        alternative : "Scriptly hero website",
        project : "Platforma Edukacyjna",
        description : "Scriptly to interaktywna platforma edukacyjno-dokumentacyjna, której celem jest nauka podstaw JavaScript oraz umiejętność czytania dokumentacji technicznej. Projekt pomaga początkującym programistom w zrozumieniu kluczowych koncepcji języka oraz nawigowaniu po dokumentacji w efektywny sposób.",
        link: "https://scriptly-a2c84.web.app/"
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
            <Link to="" className={`transition-all duration-300 flex justify-center items-center gap-1 cursor-not-allowed opacity-50`}>Zobacz wszystkie projekty
               <i className={`fa-solid fa-arrow-right text-[1rem] ml-2 transition-all duration-200 `}></i>
            </Link>
        </p>
    </section>
  )
}
