import "./intro.scss"
import { useEffect, useRef } from "react"
import { init } from "ityped"
export default function Intro() {
    const textref = useRef()
    useEffect(() => {
        init(textref.current, { 
            showCursor: true, 
            backDelay:  1500,
            backSpeed : 60,
            strings: ['développeur full-stack','à la recherche de stage' ] })
    }, [])
    console.log(useRef());
    return (
        <div className = "intro" id= "intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="/assets/imageProfil.png" alt="photo profil" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Salut, je m'appelle</h2>
                    <h1>Karimou Cisse</h1>
                    <h3>Je suis <span ref={textref}></span></h3>
                </div>
                <a href="#portfolio">
                    <i className="fas fa-chevron-down"></i>
                </a>
            </div>
        </div>
    )
}
