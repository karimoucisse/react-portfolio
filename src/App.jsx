import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Project from "./components/projects/project"
import ProjectMobile from "./components/projectsMobile/ProjectMobile";
import Competence from "./components/competences/competence";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Menu from "./components/menu/Menu";
import { useState } from "react";
import "./App.scss";
import { useMediaQuery } from 'react-responsive'

export default function App() {
  const [menuOpen,setMenuOpen] = useState(false)
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 900px)'
  })
  return (
    <div className="app">
      <Topbar menuOpen= {menuOpen} setMenuOpen= {setMenuOpen}/>
      <Menu menuOpen= {menuOpen} setMenuOpen= {setMenuOpen}/>
      <div className = "sections">
        <Intro/>
        {isDesktopOrLaptop ? <Project/> : <ProjectMobile/>}
        <Competence/>
        <Testimonials/>
        <Contact/>
      </div>
    </div>
  )
}
