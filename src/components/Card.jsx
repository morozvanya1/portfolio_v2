import React from 'react';
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faPlus,
  faAngleLeft,
  faAngleDown
} from "@fortawesome/free-solid-svg-icons";

function Card() {
  const location = useLocation();
  const d = location.state === null ? "" : location.state.d;
  const all = location.state === null ? "" : location.state.all;
  const h = location.state === null ? "" : location.state.h;
  console.log(h);
  console.log(all);

  function openDesc() {
    console.log('hello');
    var hidden = document.getElementsByClassName("card-desc-body-hidden")[0].style.display;
    console.log(hidden)
    if (hidden !== "none") {
      document.getElementsByClassName("card-desc-body-h")[0].style.paddingBottom = "20px";
      document.getElementsByClassName("card-desc-body-hidden")[0].style.display = "none";
      document.getElementsByClassName("card-down")[0].style.transform = "rotate(0deg)";
    } else {
      document.getElementsByClassName("card-desc-body-hidden")[0].style.display = "block";
      document.getElementsByClassName("card-down")[0].style.transform = "rotate(180deg)";
      document.getElementsByClassName("card-desc-body-h")[0].style.paddingBottom = "0px";
    }

  }

  return (
    <div className='Card'>
      <div className='card-header'>
        <Link to={"/content"} state={{ all: all, h: h }}>
          <FontAwesomeIcon icon={faAngleLeft} className="card-left" />
        </Link>
        <FontAwesomeIcon icon={faHeart} className="card-heart" />
      </div>
      <div className='card-content'>
        <img src={d} alt={d} />
        <div className='card-desc'>
          <div className='card-desc-header'>
            <p>Футболка</p>
            <b>1000 р.</b>
          </div>
          <div className='card-desc-body'>
            <div className='card-desc-body-h'>
              <b>Описание</b>
              <FontAwesomeIcon icon={faAngleDown} className="card-down" onClick={() => openDesc()} />
            </div>
            <div className='card-desc-body-hidden'>Эта футболка изготовлена из высококачественного хлопка. Она имеет приятную на ощупь ткань, которая приятно лежит на коже. Футболка имеет классический крой, который подчеркивает вашу фигуру.</div>
            <div className='card-desc-body-s'>
              <b>Размер</b>
              <div className='card-desc-body-size'>
                <p>XL</p>
              </div>
            </div>
            <div className='button'>
              <button>
                <FontAwesomeIcon icon={faPlus} className="card-plus" />
                Добавить в корзину
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card