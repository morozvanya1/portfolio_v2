import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";


function Header({ d, ic, l }) {
    return (
        <div className='header'>
            <Link to={l}>
                <FontAwesomeIcon icon={ic[0]} className="left" />
            </Link>
            <h3>{d}</h3>
            {ic[1] !== undefined ? <FontAwesomeIcon icon={ic[1]} className="bag" /> : <p></p>}
        </div>
    )
}

export default Header