import { Link } from "react-router-dom";
import Language from "./Language";
import { useState } from "react";
import Title from "./Title";
type TExperienceBox = {
  year: string;
  job: string;
  description: string;
  languages: string[];
  link: string;
  hoverIndex: any;
  itemIndex: number
};


export default function ExperienceBox({
  year,
  job,
  description,
  languages,
  link,
  hoverIndex,
  itemIndex
}: TExperienceBox) {

  const [hover, setHover] = useState<boolean>(false);


  return (
    <Link to={link}>
      <div className={`flex sm:justify-between lg:border-[1.5px] lg:border-transparent lg:rounded-xl transition-all lg:py-4 lg:px-3 duration-300 ${hoverIndex !== null && hoverIndex !== itemIndex ? "lg:opacity-40" : "lg:opacity-100"} ${hoverIndex == itemIndex ? "lg:bg-white/2 lg:border-1 lg:border-white/10" : ""}`}>
        <p className={`text-not-active font-medium text-[14px] w-full hidden sm:block mt-1`}>{year}</p>
        <div className="flex flex-col justify-start items-start" onMouseEnter={() => setHover(!hover)} onMouseLeave={() => setHover(!hover)}>
          <div className="mb-4 flex flex-col gap-2">
            <p className={`text-not-active font-medium text-[14px] sm:hidden`}>{year}</p>
            <Title name={job} isHover={hover}></Title>
            <p className="text-not-active text-wrap text-[15px]">{description}</p>
          </div>

          <div className="flex gap-4 flex-wrap max-w-full w-full">
            {languages.map((lang, langIndex) => (
              <Language name={lang} key={langIndex}></Language>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
