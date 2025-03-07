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
};


export default function ExperienceBox({
  year,
  job,
  description,
  languages,
  link,
}: TExperienceBox) {

  const [hover, setHover] = useState<boolean>(false);


  return (
    <Link to={link}>
      <div className="flex flex-col justify-start items-start mb-20" onMouseEnter={() => setHover(!hover)} onMouseLeave={() => setHover(!hover)}>
        <div className="mb-4 flex flex-col gap-2">
          <p className={`text-not-active font-medium text-[14px] `}>{year}</p>
            <Title name={job} isHover={hover}></Title>
          <p className="text-not-active text-wrap">{description}</p>
        </div>

        <div className="flex gap-4 flex-wrap max-w-full w-full">
          {languages.map((lang, langIndex) => (
            <Language name={lang} key={langIndex}></Language>
          ))}
        </div>
      </div>
    </Link>
  );
}
