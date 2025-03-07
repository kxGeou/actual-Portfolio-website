import Project from "./ui/Project";
import Scriptly from '../assets/images/scriptly.png'
export default function Projects() {
  return (
    <section>
        <h2 className="font-semibold text-[20px] mb-8">Projekty</h2>
        <Project languages={["FireBase", "Database"]} image={Scriptly} alternative="scriptly" project="Platforma Edukacyjna" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, voluptatem tenetur nemo sequi aperiam illum eum provident quisquam commodi. Et."></Project>
    </section>
  )
}
