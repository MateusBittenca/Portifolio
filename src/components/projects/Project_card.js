import { faGithub, faLinkedin, faInstagram, faPython, faGit, faGitAlt } from "@fortawesome/free-brands-svg-icons";

import Icons from "../../layout/Icons"
import "./Project_card.css"
import Project_icons from "./Project_icons";


function Project_card({ text, name, img, tec }) {
    return (


        <section className="card_project">
            <div className="card_project__content">
                <img src="../assets/img/Eu.jpg"></img>
                <h3>{name}</h3>
                <p id="desc">{text}</p>
                <div className="technologies">
                    <Project_icons icons={[ tec ]} />
                </div>
                
            </div>
        </section>
    )
}

export default Project_card