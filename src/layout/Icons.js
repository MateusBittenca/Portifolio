import "./Icons.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    faHtml5, 
    faCss3, 
    faJs, 
    faReact, 
    faPhp, 
    faPython, 
    faGitAlt,
    faNodeJs,
    faDocker,
    faJava
    
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

function Icons({ icons }) {
    // Mapeamento dos ícones para os objetos FontAwesome
    const iconMap = {
        faHtml5: faHtml5,
        faCss3: faCss3,
        faJs: faJs,
        faReact: faReact,
        faPhp: faPhp,
        faPython: faPython,
        faGitAlt: faGitAlt,
        faNodeJs: faNodeJs,
        faDocker: faDocker,
        faMysql: faDatabase,
        faJava: faJava
    };

    return (
        <div className="icons">
            <ul>
                {icons.map((skill, index) => (
                    <li key={index} title={skill.name}>
                        <FontAwesomeIcon 
                            icon={iconMap[skill.icon]} 
                            style={{ '--hover-color': skill.color }}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Icons;    