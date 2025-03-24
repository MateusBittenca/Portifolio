import "./Links.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Links({ link, icon }) {
    return (
        <div className="links">
            <a href={link} className="icon">
                <FontAwesomeIcon icon={icon} />
            </a>
        </div>
    );
}

export default Links;