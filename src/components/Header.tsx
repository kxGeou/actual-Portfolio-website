import IconSet from "./ui/IconSet";

export default function Header() {

  const HeaderText = {
    name : "Grzegorz Matusik",
    job: "Junior Front End Developer",
    description: "Tworzę nowoczesne, funkcjonalne strony internetowe, które łączą estetykę z użytecznością"
  }

  return (
    <header className="space-y-5 lg:fixed lg:flex lg:flex-col lg:justify-between lg:min-h-[80%]">
        <div className="flex flex-col">
          <h2 className="text-[2.25rem] font-bold lg:text-[46px]">{HeaderText.name}</h2>
          <h2 className="text-[1.15rem] font-medium mb-5 lg:text-[20px]">{HeaderText.job}</h2>
          <h2 className="text-not-active font-medium lg:max-w-[50%]">{HeaderText.description}</h2>
        </div>
      <IconSet></IconSet>
    </header>
  )
}


