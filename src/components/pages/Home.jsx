import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faInstagram, faPython,faGitAlt  } from "@fortawesome/free-brands-svg-icons";
import { faHtml5, faCss3, faJs, faReact, faPhp, faData } from "@fortawesome/free-brands-svg-icons";
import Links from "../../layout/Links";
import Icons from "../../layout/Icons";
import Project_card from "../projects/Project_card";
import Contact from "../contact/contact";
import "./Home.css"
import { useState, useEffect } from "react";
import EuImg from '../../assets/img/Eu.jpg';


function Home() {

    const [projects, setProjects] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/projects", {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
            }
        })
            .then((response) => response.json())
            .then((data) => {
                setProjects(data)
                console.log(projects)
            })
            .catch((error) => console.error(error))
    }, [])

    const nome = "Mateus Bittencourt"
    const profissao = "FULLSTACK DEVELOPER"
    const cidade = "São José dos Campos, SP"
    const descricao = "Sou um programador, apaixonado por tecnologia e em busca da minha primeira experiência profissional. Tenho muita vontade de aprender, crescer e contribuir para projetos que façam a diferença. Dedico-me ao estudo constante de programação e desenvolvimento de soluções práticas e criativas. Com determinação e curiosidade, estou pronto para enfrentar desafios, colaborar com equipes e transformar conhecimento em resultados."
    const telefone = "12 99112-5282"
    const email = "mpbittenc@gmail.com"
    
    return (
        <div className="perfil">
            <div className="perfil__img">
                <img src={EuImg}></img>
            </div>

            <div className="perfil__content">
                <h1>{nome}</h1>
                <h3>{profissao}</h3>
                <h4>{cidade}</h4>
                <p>
                   {descricao}
                </p>    

                <div className="links">
                    <Links link="https://github.com/MateusBittenca" icon={faGithub} />
                    <Links link="https://www.linkedin.com/in/mateus-ribeiro-leite-paes-bittencourt-60730a294" icon={faLinkedin} />
                    <Links link="" icon={faInstagram} />
                </div>

                <div className="skills">
                    <h1>Habilidades</h1>
                    <Icons icons={[faHtml5, faCss3, faJs, faReact, faPhp, faPython, faGitAlt]} />
                </div>
            </div>

            <div className="projects">
                <h1>Projetos</h1>
                <div className="projects__display">
                    <Project_card />
                </div>
            </div>

            <div className="contact">
                <Contact />
            </div>
        </div>
    );


}

export default Home;
