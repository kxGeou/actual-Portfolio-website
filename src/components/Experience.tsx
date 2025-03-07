import ExperienceBox from "./ui/ExperienceBox";
import Title from "./ui/Title";
import { useState } from "react";
const experienceList = [ 
  {
    description : "Podczas nauki w technikum zdobyłem wszechstronną wiedzę z zakresu programowania. Poznałem algorytmy i struktury danych, a także rozwijałem umiejętności w różnych obszarach – od programowania aplikacji mobilnych po tworzenie interfejsów webowych.",
    year : "2020 - 2025",
    job : "Technik programista uczeń",
    link : "https://www.ckziu.jaworzno.pl/",
    languages : ["C++", "React", "Maui", "C#", "GitHub", "Git", "JavaScript", "HTML", "CSS", "Bootstrap"]
  },
  
  {
    description : "Mój pierwszy komercyjny projekt – stworzenie oraz hosting strony internetowej dla firmy zajmującej się modelami 3D. Aplikacja została zaprojektowana w React, z wykorzystaniem SASS do stylizacji, co zapewniło nowoczesny i responsywny interfejs",
    year : "luty 2024 - 2024",
    job : "Front End Developer, Designer",
    link : "https://r3dmotion.com/",
    languages : ["React", "GitHub", "JavaScript", "Figma", "Sass", "FontAwesome"]
  },

]
export default function Experience() {

  const [hover, isHover] = useState(false)

  return (
    <section>
        <h2 className="font-semibold text-[20px] mb-8">Doświadczenie</h2>
        {experienceList.map((exp, expIndex) => (
          <ExperienceBox description={exp.description} key={expIndex} year={exp.year} link={exp.link} job={exp.job} languages={exp.languages}></ExperienceBox>
        ))}
        <span className="cursor-pointer" onMouseEnter={() => isHover(!hover)}  onMouseLeave={() => isHover(!hover)}><Title name={"Zobacze całe CV"} isHover={hover}></Title></span>
    </section>
  )
}
