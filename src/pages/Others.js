import React from "react";
import "../css/App.css";
import { Footer, Item, Header } from "../components/index";
import {
  faVanShuttle,
  faCloud,
  faWallet,
  faAngleLeft,
} from "@fortawesome/free-solid-svg-icons";

function Others() {
  return (
    <div className="Others">
      <Header d={"Прочее"} ic={[faAngleLeft]} l={"/"} />

      <Item
        d={[
          "ЦДС Вятка;Расписание автобусов",
          "Погода;Прогноз на сегодня",
          "Курс валют;Информация по обмену",
        ]}
        ic={[faVanShuttle, faCloud, faWallet]}
        l={["/routes", "/weather", "/currency"]}
      />

      <Footer />
    </div>
  );
}

export default Others;
