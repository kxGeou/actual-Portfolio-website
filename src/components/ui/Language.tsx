type TLanguage = {
    name : string;
}
export default function Language({name} : TLanguage) {
  return (
    <div className="flex justify-center items-center px-4 py-[4px] w-fit rounded-4xl bg-box">
        <span className="text-text-box text-[14px]">{name}</span>
    </div>
  )
}
