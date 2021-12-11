import "./contact.scss"
export default function Contact() {
    return (
            <div className = "contact" id= "contact">
                <div className="container">
                    <div className="contactinfo">
                        <div>
                            <h2>Contact Info</h2>
                            <ul className="info">
                                <li>
                                    <span><i className="fas fa-map-marker-alt"></i></span>
                                    <span>Paris, 75015</span>
                                </li>
                                <li>
                                    <span><i className="fas fa-user"></i></span>
                                    <span>+33 6 59 02 40 13</span>
                                </li>
                                <li>
                                    <span><i className="fas fa-envelope"></i></span>
                                    <span>Karimou.cisse1@gmail.com</span>
                                </li>
                            </ul>
                        </div>
                            <ul className="reseau">
                                <li>
                                    <a href="#">
                                        <i className="fab fa-github"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fab fa-linkedin"></i>
                                    </a>
                                </li>
                            </ul>
                    </div>

                    <div className="contactForm">
                        <h2>Send a Message</h2>
                        <form className="formBox">
                            <div className="inputBox w50">
                                <input 
                                    type="text"
                                    name=""
                                    required
                                    placeholder= "First Name"
                                />
                            </div>
                            <div className="inputBox w50">
                                <input 
                                    type="text"
                                    name=""
                                    required
                                    placeholder="Last Name"
                                />
                            </div>
                            <div className="inputBox w50 infoContact">
                                <input 
                                    type="text"
                                    name=""
                                    required
                                    placeholder = "Email Address"
                                />
                            </div>
                            <div className="inputBox w50 infoContact">
                                <input 
                                    type="text"
                                    name=""
                                    required
                                    placeholder= "Mobile Number"
                                />
                            </div>
                            <div className="inputBox w100">
                                <textarea 
                                    name="" 
                                    required
                                    placeholder= "Write your message here ..."
                                ></textarea>
                            </div>
                            <div className="inputBox">
                                <button 
                                    type="submit"
                                    required
                                >
                                    send
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
    )
}
