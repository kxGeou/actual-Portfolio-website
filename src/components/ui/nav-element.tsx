type TNav = {
    name: string;
    index : number;
    hoveredIndex: number | null; 
}


function NavElement( { name, index, hoveredIndex} : TNav) {
  return (
    <span className={`cursor-pointer flex justify-start gap-3 items-center transition-all duration-300 ${hoveredIndex !== null && hoveredIndex !== index ? "lg:opacity-40" : "lg:opacity-100"} ${hoveredIndex == index ? "text-text-box" : ""}`}>
        <hr className={`transition-all duration-300 h-[2px] bg-text w-10 ${hoveredIndex == index ? "w-15" : ""}`}/>
        <a>
        {name}
        </a>
    </span>
  )
}

export default NavElement
