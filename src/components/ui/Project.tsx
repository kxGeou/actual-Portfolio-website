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
        <div className="flex sm:justify-between sm:items-start">
            <div className="hidden sm:block sm:min-w-[25%] max-w-full mr-12">
              <img src={image} alt={alternative} loading="lazy" className={`max-w-[200px] aspect-video object-cover rounded border-2 border-slate-200/10 transition hidden w-full sm:min-w-[120px]  sm:block ${hover ? "border-slate-200/30" : ""}`}/>
            </div>
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
                <img src={image} alt={alternative} loading="lazy" className={`max-w-[200px] aspect-video object-cover rounded border-2 border-slate-200/10 transition sm:hidden ${hover ? "border-slate-200/30" : ""} `}/>
            </div>
        </div>
    </Link>
  )
}
