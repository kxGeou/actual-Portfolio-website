type Ttitle = {
    name : string
    isHover : boolean;
}

export default function Title({name, isHover} : Ttitle) {
  return (
    <div>
        <h2 className={`font-semibold text-[1.15rem] flex justify-start items-center gap-3 ${isHover ? "text-text-box" : ""}`}>{name} <span><i className={`transition-all duration-200 fa-solid fa-link text-[0.75rem] ${isHover ? "-translate-y-1.25" : ""}`}></i></span></h2>
    </div>
  )
}
