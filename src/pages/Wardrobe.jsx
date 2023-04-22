import "./Wardrobe.css";
import React from 'react';
import Footer from '../components/Footer';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShirt, faSocks, faBagShopping, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import Item from "../components/Item";
import { Link } from "react-router-dom";

function Wardrobe() {

    return (
        <div className='Wardrobe'>
            <header>
                <Link to={"/"}>
                    <FontAwesomeIcon icon={faAngleLeft} className="left" />
                </Link>
                <h3>Категории</h3>
                <FontAwesomeIcon icon={faBagShopping} className="bag" />
            </header>

            <div className="categories">
                <div className="categories-item">
                    <div className="active">
                        <p>Основное</p>
                    </div>
                    <div>
                        <p>Желаемое</p>
                    </div>
                </div>

                <Item
                    d={["Футболки;", "Штаны;"]}
                    ic={[faShirt, faSocks]}
                    l={["/wardrobe", "/wardrobe"]}
                />
            </div>

            <Footer />
        </div>
    )
}

export default Wardrobe