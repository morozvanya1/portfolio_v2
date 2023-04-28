import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHouse,
    faBus,
    faShirt,
    faRightFromBracket,
    faCloud
} from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

function Footer() {
    const links = ['/', '/wardrobe', '/routes', '/weather', '/exit'];
    const icons = [faHouse, faShirt, faBus, faCloud, faRightFromBracket];

    React.useEffect(() => {
        const path = window.location.pathname;
        const links = document.getElementsByClassName("menu-footer");
        for (var i = 0; i < links.length; i++) {
            if (links[i].pathname === path) {
                links[i].querySelector(".icon").classList.add("active-1");
                links[i].querySelector(".menu-choise").classList.add("active-2");
            }
        }
    }, []);

    return (
        <footer>
            {icons.map((v, k) => (
                <Link to={links[k]} relative="path" className="menu-footer" key={k}>
                    <FontAwesomeIcon icon={v} className="icon" id={k} />
                    <p className="menu-choise"></p>
                </Link>
            ))}
        </footer>
    )
}

export default Footer