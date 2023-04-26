import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Item({ d, ic, l, img }) {

    return (
        <div className="content">
            {d.map((v, k) => (
                <Link to={l[k]} state={{ d: v.split(';')[0] }} className="content-element" key={k}>
                    <div className="content-header">
                        {img ? <img src={ic[k]} alt={"image-" + k} /> :
                            <FontAwesomeIcon icon={ic[k]} className="icon" />}
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