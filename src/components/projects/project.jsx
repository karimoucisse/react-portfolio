import "./project.scss"

export default function Projet() {
    return (
        <div className= "project" id= "project">
            <div className="projectContainer">
                <div className="projectElement">
                    <a href="https://karimoucisse.github.io/Deezer/" target="_blank">
                        <img src="assets/deezer.png" alt="deezer"/>
                    </a>
                </div>
                <div className="projectElement">
                    <a href="https://karimoucisse.github.io/maquette/" target="_blank" >
                        <img src="assets/reservia.png" alt="reservia" />
                    </a>
                </div>
                <div className="projectElement">
                    <a href="https://gameofthrone.netlify.app/" target="_blank">
                        <img src="assets/gameofthrone.png" alt="game of throne" />
                    </a>
                </div>
            </div>
        </div>
    )
}
