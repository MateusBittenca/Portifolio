
import "./Project_icons.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function Project_icons({ icons }) {
    return (
        <div className="Pro_icons">
            <ul >
                {icons.map((icon, index) => (
                    <li key={index}>
                        <FontAwesomeIcon icon={icon} />
                    </li>
                ))}
            </ul>
        </div>
    )

}

export default Project_icons