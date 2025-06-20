export default function About() {

    const paragraphs = [
        "Jestem Junior Frontend Developerem, który łączy kod i design w spójną całość. Tworzę nowoczesne, szybkie i responsywne strony w React + TypeScript, a ich wygląd projektuję w Figmie, dbając o estetykę oraz UX.",
        "Programowaniem stron zajmuję się od 2-3 lat, a swoje umiejętności rozwijałem zarówno w technikum na kierunku technik programista, jak i teraz samodzielnie, codziennie poszerzając swoją wiedzę.",
        "Miałem okazję zaprojektować, zakodować i hostować stronę internetową dla firmy zajmującej się drukarkami 3D, co było dla mnie świetnym doświadczeniem.",
        "Stale się rozwijam i chętnie podejmę się nowych wyzwań! Jeśli potrzebujesz nowoczesnej strony odezwij się!"
    ]


  return (
    <section id="oMnie">
        <h2 className="font-semibold text-[20px] lg:hidden">O mnie</h2>
        <div className="flex flex-col gap-5 mt-5 lg:mt-0 text-not-active font-medium">
            {paragraphs.map((text,textIndex) => (
                <p key={textIndex} className="leading-[1.60]">{text}</p>
            ))}
        </div>
    </section>
  )
}
