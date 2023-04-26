import React from "react";
import Header from "../components/Header";
import {
  faFilter,
  faAngleLeft,
} from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";
import "./Content.css";
import Cards from "../components/Cards";
import tshirt1 from "../img/photo_1_2023-04-26_14-12-57.jpg";
import tshirt2 from "../img/photo_2_2023-04-26_14-12-57.jpg";
import tshirt3 from "../img/photo_3_2023-04-26_14-12-57.jpg";
import tshirt4 from "../img/photo_4_2023-04-26_14-12-57.jpg";
import tshirt5 from "../img/photo_5_2023-04-26_14-12-57.jpg";
import tshirt6 from "../img/photo_6_2023-04-26_14-12-57.jpg";
import tshirt7 from "../img/photo_7_2023-04-26_14-12-57.jpg";
import tshirt8 from "../img/photo_8_2023-04-26_14-12-57.jpg";
import tshirt9 from "../img/photo_9_2023-04-26_14-12-57.jpg";
import tshirt10 from "../img/photo_10_2023-04-26_14-12-57.jpg";
import tshirt11 from "../img/photo_11_2023-04-26_14-12-57.jpg";
import tshirt12 from "../img/photo_12_2023-04-26_14-12-57.jpg";
import tshirt13 from "../img/photo_13_2023-04-26_14-12-57.jpg";

function Content() {
  const location = useLocation();
  const d = location.state === null ? "" : location.state.d;
  const tshirtImg = [tshirt1, tshirt2, tshirt3, tshirt4, tshirt5, tshirt6, tshirt7, tshirt8, tshirt9, tshirt10, tshirt11, tshirt12, tshirt13];
  var arr;
  if (d == "Футболки") {
    arr = tshirtImg;
  }

  return (
    <div className="Content">
      {d && <Header d={d} ic={[faAngleLeft, faFilter]} l={"/wardrobe"} />}

      <Cards d={arr}/>

    </div>
  );
}

export default Content;
