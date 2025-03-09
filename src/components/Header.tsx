import IconSet from "./ui/icon-set";
import '../index.css'
import { useState } from "react";
import NavElement from "./ui/nav-element";
export default function Header() {

  const HeaderText = {
    name : "Grzegorz Matusik",
    job: "Junior Front End Developer",
    description: "Tworzę nowoczesne, funkcjonalne strony internetowe, które łączą estetykę z użytecznością"
  }

  const Nav = [
    "O mnie", 
    "Doświadczenie", 
    "Projekty"
  ]

  const [hoverIndex, setHoverIndex] = useState<number | null>(null)

  return (
      <header className="space-y-5 lg:fixed lg:flex lg:flex-col lg:justify-between lg:min-h-[80%] " > 
        <div className="flex flex-col">
          <h2 className="text-[2.25rem] font-bold lg:text-[46px] ">{HeaderText.name}</h2>
          <h2 className="text-[1.15rem] font-medium mb-5 lg:text-[20px]">{HeaderText.job}</h2>
          <h2 className="text-not-active font-medium lg:max-w-[50%]">{HeaderText.description}</h2>
        </div>

        <nav className="hidden lg:flex flex-col gap-5">
            {Nav.map((nav, navIndex) => (
              <span key={navIndex} onMouseEnter={() => setHoverIndex(navIndex)} onMouseLeave={()=> setHoverIndex(null)}>
                <NavElement hoveredIndex={hoverIndex} name={nav} index={navIndex}></NavElement>
              </span>
            ))}
        </nav>

      <IconSet></IconSet>
    </header>
  )
}


