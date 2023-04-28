import React from "react";
import { useLocation } from "react-router-dom";
import "../css/Content.css";
import { faFilter, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { Header, Cards } from "../components/index";
import { tshirt1, tshirt2, tshirt3, tshirt4, tshirt5, tshirt6, tshirt7, tshirt8, tshirt9, tshirt10, tshirt11, tshirt12, tshirt13 } from "../img/index"

function Content() {
  const location = useLocation();
  const all = location.state === null ? "" : location.state.all;
  const h = location.state === null ? "" : location.state.h;
  const d = location.state === null ? "" : location.state.d === undefined ? h : location.state.d;
  const tshirtImg = [tshirt1, tshirt2, tshirt3, tshirt4, tshirt5, tshirt6, tshirt7, tshirt8, tshirt9, tshirt10, tshirt11, tshirt12, tshirt13];
  const arr = d === "Футболки" ? tshirtImg : all;

  return (
    <div className="Content">
      {d && <Header d={d} ic={[faAngleLeft, faFilter]} l={"/wardrobe"} />}

      <Cards d={arr} h={d} />
    </div>
  );
}

export default Content;
