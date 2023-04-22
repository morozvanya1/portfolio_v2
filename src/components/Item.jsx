import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Item({ d, ic, l }) {
    
    return (
        <div className="content">
            {d.map((v, k) => (
                <Link to={l[k]} className="content-element" key={k}>
                    <div className="content-header">
                        <div className='inner-icon'>
                            <FontAwesomeIcon icon={ic[k]} className="icon" />
                        </div>
                    </div>
                    <div className="content-body">
                        <h2 className="h2">{v.split(';')[0]}</h2>
                        <p>{v.split(';')[1]}</p>
                    </div>
                    <FontAwesomeIcon icon={faAngleRight} className="arrow" />
                </Link>
            ))}
        </div>
    )
}

export default Item