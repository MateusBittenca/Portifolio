import "./Icons.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function Icons({ icons }) {
    return (
        <div className="icons">
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

export default Icons    