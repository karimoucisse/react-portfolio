import "./topbar.scss"


export default function Topbar({menuOpen, setMenuOpen}) {
    // const {menuOpen, setMenuOpen} = props

    return (
        <div className = {`topbar ${menuOpen && "active"}`}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className = "logo">Portfolio</a>
                    <div className="itemContainer">
                        <i className="fas fa-user"></i>
                        <span>+33 6 59 02 40 13</span>
                    </div>
                    <div className="itemContainer">
                        <i className="fas fa-envelope"></i>
                        <span>karimou.cisse1@gmail.com</span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick= {() => setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
