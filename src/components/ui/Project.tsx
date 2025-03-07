import { Link } from "react-router-dom";
import Language from "./Language";
import Title from "./Title";
import { useState } from "react";

type TProject = {
    project : string;
    description : string; 
    languages?: string[];
    image : any;
    alternative : string ;
    link : string;
}

export default function Project({project, description, languages, image, alternative, link } : TProject) {
    const [hover, isHover] = useState<boolean>(false)
  
    return (
    <Link to={link}>
        <div onMouseEnter={() => isHover(!hover)} onMouseLeave={() => isHover(!hover)} className="cursor-pointer mb-20">
            <Title name={project} isHover={hover}></Title>
            <p className={`text-not-active text-wrap mt-2 ${languages?.length ? "" : "mb-5"}`}>{description}</p>
            {languages?.length && (
                <div className="flex gap-3 my-6">
                    {languages?.map((item, itemIndex) => (
                        <Language name={item} key={itemIndex}></Language>
                    ))}
                </div>
                )
            }
            <img src={image} alt={alternative} loading="lazy" className={`max-w-[200px] aspect-video object-cover rounded border-2 border-slate-200/10 transition ${hover ? "border-slate-200/30" : ""} sm:order-1 sm:col-span-2 sm:translate-y-1`}/>
        </div>
    </Link>
  )
}
