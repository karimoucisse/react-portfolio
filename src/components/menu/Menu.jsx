import "./menu.scss"
export default function Menu({menuOpen, setMenuOpen}) {
    return (
        <div className= {`menu ${menuOpen && "active"}`}>
            <ul>
                <li onClick= {() => setMenuOpen(false)} ><a href="#intro">Home</a></li>
                <li onClick= {() => setMenuOpen(false)} ><a href="#projet">Projets</a></li>
                <li onClick= {() => setMenuOpen(false)} ><a href="#competence">Compétences</a></li>
                <li onClick= {() => setMenuOpen(false)} ><a href="#testimonials">Testimonials</a></li>
                <li onClick= {() => setMenuOpen(false)} ><a href="#contact">Contact</a></li>
            </ul>
            
        </div>
    )
}
