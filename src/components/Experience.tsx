import ExperienceBox from "./ui/experience-box";
import Title from "./ui/Title";
import { useState } from "react";
const experienceList = [
  {
    description:
      "Podczas nauki w technikum zdobyłem wszechstronną wiedzę z zakresu programowania. Poznałem algorytmy i struktury danych, a także rozwijałem umiejętności w różnych obszarach – od programowania aplikacji mobilnych po tworzenie interfejsów webowych.",
    year: "2020 - 2025",
    job: "Technik programista - uczeń",
    link: "https://www.ckziu.jaworzno.pl/",
    languages: [
      "C++",
      "React",
      "Maui",
      "C#",
      "GitHub",
      "Git",
      "JavaScript",
      "HTML",
      "CSS",
      "Bootstrap",
    ],
  },

  {
    description:
      "Mój pierwszy komercyjny projekt – stworzenie oraz hosting strony internetowej dla firmy zajmującej się modelami 3D. Aplikacja została zaprojektowana w React, z wykorzystaniem SASS do stylizacji, co zapewniło nowoczesny i responsywny interfejs",
    year: "luty 2024 - 2024",
    job: "Front End Developer, Designer",
    link: "https://r3dmotion.com/",
    languages: [
      "React",
      "GitHub",
      "JavaScript",
      "Figma",
      "Sass",
      "FontAwesome",
    ],
  },
  {
    description:
      "Podczas praktyk jako Technik Programista w firmie Informatics Jaworzno, wspierałem zespół IT w konfiguracji i instalacji urządzeń, takich jak komputery, routery oraz drukarki. Moje obowiązki obejmowały również rozwiązywanie problemów technicznych.",
    year: "maj 2022 - 2022",
    job: "Praktykant IT / Technik Programista",
    link: "https://informatics.jaworzno.pl/informatics/",
    languages: [
      "Konfiguracja Urządzeń",
      "Instalacja Urządzeń",
    ],
  },
  {
    description:
      "Podczas praktyk jako Technik Programista wspierałem zespół IT w konfiguracji i instalacji urządzeń, takich jak komputery, routery oraz drukarki. Moje obowiązki obejmowały pomoc w administracji siecią i konfiguracji oprogramowania. ",
    year: "paźdz. 2022 - 2022",
    job: "Praktyki IT w Urzędzie Miasta Jaworzno",
    link: "https://bip.jaworzno.pl/",
    languages: [
      "Konfiguracja Urządzeń",
      "Wymiana komponentów",
      "React",
      "Tailwind",
      "PHP",
      "DataBase",
    ],
  },

];
export default function Experience() {
  const [hover, isHover] = useState(false);
  const [Hoverindex, setHoverIndex] = useState<any>(null);
  return (
    <section id="doświadczenie">
      <h2 className="font-semibold text-[20px] mb-8">Doświadczenie</h2>
      <div className="flex flex-col gap-20 mb-16">
        {experienceList.map((exp, expIndex) => (
          <div
            onMouseEnter={() => setHoverIndex(expIndex)}
            onMouseLeave={() => setHoverIndex(null)}
            key={expIndex}
          >
            <ExperienceBox
              hoverIndex={Hoverindex}
              itemIndex={expIndex}
              description={exp.description}
              year={exp.year}
              link={exp.link} 
              job={exp.job}
              languages={exp.languages}
            ></ExperienceBox>
          </div>
        ))}
      </div>
      <span
        className="cursor-pointer"
        onMouseEnter={() => isHover(!hover)}
        onMouseLeave={() => isHover(!hover)}
      >
       <a href="/GrzegorzMatusik.pdf" target="_blank">
          <Title name={"Zobacze całe CV"} isHover={hover}></Title>
        </a> 
        
      </span>
    </section>
  );
}
