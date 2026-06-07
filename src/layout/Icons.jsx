import "./Icons.css";
import { motion, useReducedMotion } from "framer-motion";
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
import { faDatabase, faFile } from "@fortawesome/free-solid-svg-icons";

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.06,
            delayChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: {
        opacity: 0,
        y: 24,
        scale: 0.9
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.4,
            ease: [0.25, 0.46, 0.45, 0.94]
        }
    }
};

function TypeScriptIcon() {
    return (
        <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" aria-hidden="true">
            <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.394 2.394 0 0 0-.537-.5 5.758 5.758 0 0 0-.808-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" />
        </svg>
    );
}

function TailwindIcon() {
    return (
        <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" aria-hidden="true">
            <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
        </svg>
    );
}

function Icons({ icons, animated = true }) {
    const shouldReduceMotion = useReducedMotion();

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
        faJava: faJava,
        faFile: faFile
    };

    const customIconMap = {
        faTypeScript: TypeScriptIcon,
        faTailwind: TailwindIcon
    };

    const hoverAnimation = shouldReduceMotion
        ? undefined
        : { y: -8, scale: 1.05 };

    const tapAnimation = shouldReduceMotion
        ? undefined
        : { scale: 0.97 };

    const listContent = icons.map((skill) => {
        const CustomIcon = customIconMap[skill.icon];
        const ItemTag = animated ? motion.li : 'li';

        const itemProps = animated
            ? {
                variants: itemVariants,
                whileHover: hoverAnimation,
                whileTap: tapAnimation,
                transition: { type: 'spring', stiffness: 400, damping: 22 }
            }
            : {};

        return (
            <ItemTag
                key={skill.name}
                title={skill.name}
                {...itemProps}
            >
                {CustomIcon ? (
                    <span
                        className="icons__custom"
                        style={{ '--hover-color': skill.color }}
                    >
                        <CustomIcon />
                    </span>
                ) : (
                    <FontAwesomeIcon
                        icon={iconMap[skill.icon]}
                        style={{ '--hover-color': skill.color }}
                    />
                )}
            </ItemTag>
        );
    });

    if (!animated) {
        return (
            <div className="icons">
                <ul>{listContent}</ul>
            </div>
        );
    }

    return (
        <div className="icons">
            <motion.ul
                variants={containerVariants}
                initial={shouldReduceMotion ? false : 'hidden'}
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
            >
                {listContent}
            </motion.ul>
        </div>
    );
}

export default Icons;
