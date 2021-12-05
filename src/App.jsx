import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro"
// import Portfolio from "./components/portfolio/Portfolio"
import Projet from "./components/projects/projet"
import Competence from "./components/competences/competence"
import Testimonials from "./components/testimonials/Testimonials"
import Contact from "./components/contact/Contact"
import Menu from "./components/menu/Menu";
import { useState } from "react";
import "./App.scss"
export default function App() {
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Topbar menuOpen= {menuOpen} setMenuOpen= {setMenuOpen}/>
      <Menu menuOpen= {menuOpen} setMenuOpen= {setMenuOpen}/>
      <div className = "sections">
        <Intro/>
        <Projet/>
        <Competence/>
        <Testimonials/>
        <Contact/>
      </div>
    </div>
  )
}
