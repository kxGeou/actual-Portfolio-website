import IconSet from "./ui/IconSet";

export default function Header() {

  const HeaderText = {
    name : "Grzegorz Matusik",
    job: "Junior Front End Developer",
    description: "Tworzę nowoczesne, funkcjonalne strony internetowe, które łączą estetykę z użytecznością"
  }

  return (
    <header className="space-y-5">
        <div className="flex flex-col">
          <h2 className="text-[2.25rem] font-bold">{HeaderText.name}</h2>
          <h2 className="text-[1.15rem] font-medium mb-5">{HeaderText.job}</h2>
          <h2 className="text-not-active font-medium">{HeaderText.description}</h2>
        </div>
      <IconSet></IconSet>
    </header>
  )
}


