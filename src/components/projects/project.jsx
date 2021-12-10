import "./project.scss"

export default function Projet() {
    return (
        <div className= "project" id= "project">
            <div className="projectContainer">
                <div className="projectElement">
                    <a 
                        href="https://projet-2048.netlify.app/" 
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img 
                            src="assets/2048.png" alt="2048" 
                        />
                    </a>
                </div>
                <div className="projectElement">
                    <a 
                        href="https://karimoucisse.github.io/maquette/" 
                        target="_blank"
                        rel="noreferrer" 
                    >
                        <img 
                            src="assets/reservia.png" alt="reservia" 
                        />
                    </a>
                </div>
                <div className="projectElement">
                    <a 
                        href="https://gameofthrone.netlify.app/" 
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img 
                            src="assets/gameofthrone.png" alt="game of throne" 
                        />
                    </a>
                </div>
                <div className="projectElement">
                    <a 
                        href="https://karimoucisse.github.io/Deezer/" 
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img 
                            src="assets/deezer.png" alt="deezer"
                            rel="noreferrer"
                        />
                    </a>
                </div>
            </div>
        </div>
    )
}
