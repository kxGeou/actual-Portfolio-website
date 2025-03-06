import About from "../components/About";
import Header from "../components/Header";

export default function MainPage() {

  return (
    <main className="min-w-screen cont">    
      <div className={`cont text-text/75 mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-16 lg:py-0 space-y-24`}>
       <Header></Header>
       <About></About>
    </div>
    </main>

  )
}


