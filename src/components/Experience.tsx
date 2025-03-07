import ExperienceBox from "./ui/ExperienceBox";

export default function Experience() {
  return (
    <section>
        <h2 className="font-semibold text-[20px] mb-8">Doświadczenie</h2>
        <ExperienceBox 
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, odio."
        languages={["React", "Javascript", "Javascript", "Javascript"]}
        year="2024 - 2025"
        job="Front End"
        link="qwe"
        ></ExperienceBox>
    </section>
  )
}
