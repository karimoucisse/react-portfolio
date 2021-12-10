import "./menu.scss"
import { useMediaQuery } from 'react-responsive'

export default function Menu({menuOpen, setMenuOpen}) {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 900px)'
    })

    return (
        <div className= {`menu ${menuOpen && "active"}`}>
            <ul>
                <li onClick= {() => setMenuOpen(false)} >
                    <a href="#intro">Home</a>
                </li>
                <li onClick= {() => setMenuOpen(false)} >
                    <a href={isDesktopOrLaptop ? "#project" : "#projectMobile"}>Projects</a>
                </li>
                <li onClick= {() => setMenuOpen(false)} >
                    <a href="#competence">Compétences</a>
                </li>
                <li onClick= {() => setMenuOpen(false)} >
                    <a href="#testimonials">Testimonials</a>
                </li>
                <li onClick= {() => setMenuOpen(false)} >
                    <a href="#contact">Contact</a>
                </li>
            </ul>
            
        </div>
    )
}
