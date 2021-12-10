import "./intro.scss"
import { useEffect, useRef } from "react"
import { init } from "ityped"
import { useMediaQuery } from 'react-responsive'

export default function Intro() {
    const textref = useRef()
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 900px)'
    })

    useEffect(() => {
        init(textref.current, { 
            showCursor: true, 
            backDelay:  1500,
            backSpeed : 60,
            strings: ['développeur full-stack','à la recherche de stage' ] })
    }, [])

    return (
        <div className = "intro" id= "intro">
            <div className="left">
                <div className="imgContainer">
                    <div className="img">img</div>
                    {/* <img src="/assets/imageProfil.png" alt="profil-img" /> */}
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Salut, je m'appelle</h2>
                    <h1>Karimou Cisse</h1>
                    <h3>Je suis <span ref={textref}></span></h3>
                </div>
                <a href={isDesktopOrLaptop ? "#project" : "#projectMobile"}>
                    <i className="fas fa-chevron-down"></i>
                </a>
            </div>
        </div>
    )
}
