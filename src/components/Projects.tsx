import Project from "./ui/Project";
import Scriptly from '../assets/images/scriptly.png'
import Theme from '../assets/images/theme.png'
import Red from '../assets/images/red.png'
import Todo from '../assets/images/todo.png'

const projectList = [
    {
        language : ["Firebase", "Database Fetch", "Design"],
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
  return (
    <section>
        <h2 className="font-semibold text-[20px] mb-8">Projekty</h2>
        {projectList.map((project, projectIndex) => (
            <Project key={projectIndex} languages={project.language} image={project.image} project={project.project} link={project.link} description={project.description} alternative={project.alternative}></Project>
        ))}
    </section>
  )
}
