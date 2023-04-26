import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

function Cards({d}) {

  return (
    <div className="content-items">
        {d && d.map((v, k) => (
          <div className="content-item" key={k}>
            <div className="content-img">
              <img src={v} alt={"image-" + "0"} />
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
          </div>
        ))}
      </div>
  )
}

export default Cards