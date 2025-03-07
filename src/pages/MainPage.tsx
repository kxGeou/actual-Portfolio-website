import About from "../components/About";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Projects from "../components/Projects";

export default function MainPage() {

  return (
    <main className=" cont ">    
      <div className={`cont  text-text/75 mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-16 lg:py-0 space-y-24`}>
       <Header></Header>
       <About></About>
       <Experience></Experience>
       <Projects></Projects>
       <Footer></Footer>
    </div>
    </main>

  )
}


