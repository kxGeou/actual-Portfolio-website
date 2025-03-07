import { Link } from "react-router-dom";
import Language from "./Language";

type TExperienceBox = {
  year: string;
  job: string;
  description: string;
  languages : string[];
  link: string;
};


export default function ExperienceBox({
  year,
  job,
  description,
  languages,
  link,
}: TExperienceBox) {
  return (
    <div className="flex flex-col justify-start items-start">
      <div className="mb-4 flex flex-col gap-2">
        <p className="text-not-active font-medium text-[14px]">{year}</p>
        <Link to={link}> <h2 className="font-semibold text-[1.25rem] flex justify-start items-center gap-3">{job} <span><i className="fa-solid fa-arrow-up-right-from-square text-[1rem]"></i></span></h2></Link>
        <p className="text-not-active">{description}</p>
      </div>

    <div className="flex gap-4 flex-wrap">
      {languages.map((lang, langIndex) => (
        <Language name={lang} key={langIndex}></Language>
      ))}
    </div>
      
    </div>
  );
}
