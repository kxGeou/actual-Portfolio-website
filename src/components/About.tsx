export default function About() {

    const paragraphs = [
        "Jestem Junior Frontend Developerem, który łączy kod i design w spójną całość. Tworzę nowoczesne, szybkie i responsywne strony w React + TypeScript, a ich wygląd projektuję w Figma, dbając o estetykę i UX.",
        "Programowaniem stron zajmuję się od 3 lat, a swoje umiejętności rozwijam zarówno w technikum na kierunku technik programista, jak i samodzielnie, codziennie poszerzając swoją wiedzę.",
        "Miałem okazję zaprojektować, zakodować i hostować stronę internetową dla firmy zajmującej się drukarkami 3D, co było dla mnie świetnym doświadczeniem.",
        "Stale się rozwijam i chętnie podejmę się nowych wyzwań! Jeśli potrzebujesz nowoczesnej strony odezwij się!"
    ]


  return (
    <section>
        <h2 className="font-semibold text-[20px] ">O mnie</h2>
        <div className="space-y-5 mt-5 text-not-active font-medium">
            {paragraphs.map((text,textIndex) => (
                <p key={textIndex} className="leading-[1.60]">{text}</p>
            ))}
        </div>
    </section>
  )
}
