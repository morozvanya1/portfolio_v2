import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHeart,
    faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

function Cards({ d, h }) {
    console.log(h);

    return (
        <div className="content-items">
            {d && d.map((v, k) => (
                <Link to="/card" state={{ d: v , all: d, h: h}} className="content-item" key={k}>
                    <div className="content-img">
                        <img src={v} alt={"image-" + { k }} />
                        <div className="content-like">
                            <FontAwesomeIcon icon={faHeart} className="like-heart" />
                        </div>
                    </div>
                    <div className="content-desc">
                        <h3>Футболка {k}</h3>
                        <div className="content-desc-add">
                            <p>1000 р.</p>
                            <FontAwesomeIcon icon={faPlus} className="add" />
                        </div>
                    </div>
                </Link>
            ))}
        </div>

    )
}

export default Cards