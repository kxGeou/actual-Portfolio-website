import About from "../components/About";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Projects from "../components/Projects";
import { useState, useEffect } from "react";

export default function MainPage() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event:any) => {
      setCursorPos({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <main className="cont relative">
     
      
      <div className={`cont relative text-text/75 mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-16 lg:py-24 space-y-24 lg:flex justify-between gap-16 w-full`}>
      <div
        className="pointer-events-none fixed top-0 left-0 w-screen h-screen"
        style={{
          background: `radial-gradient(circle 400px at ${cursorPos.x}px ${cursorPos.y}px, rgba(23, 103, 255, 0.10), transparent)`,
        }}
      ></div>
       <div className="space-y-24 w-full">
          <Header></Header>
        </div>
        <div className="space-y-24 w-full">
          <About></About>   
          <Experience></Experience>
          <Projects></Projects>
          <Footer></Footer>
        </div>       
      </div>
    </main>
  );
}
