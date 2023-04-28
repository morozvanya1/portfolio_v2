import React from "react";
import "../css/Weather.css";
import { Footer, Header } from "../components/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faSearch } from "@fortawesome/free-solid-svg-icons";

function Weather() {
  function getWeather() {
    const q = document.getElementById("city").value;
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${q}&APPID=0330b77c780de1eab5e21f76ad787628&units=metric`
    ).then((resp) =>
      resp.json().then((resp) => {
        const temp = Math.ceil(resp.main.temp) + " °C";
        const feels = Math.ceil(resp.main.feels_like) + " °C";
        console.log(resp);
        console.log("Погода - " + Math.ceil(resp.main.temp));
        console.log("Ощущается, как - " + Math.ceil(resp.main.feels_like));
        document.getElementById("weather-result-temp").innerHTML = temp;
        document.getElementById("weather-result-feels-p").innerHTML = feels;
        document.getElementsByClassName("weather-results")[0].style.display = "flex";
      })
    );
  }

  return (
    <div className="Weather">
      <Header d={"Погода"} ic={[faAngleLeft]} l={"/"} />

      <div className="weather-header">
        <input type="text" placeholder="Укажите город" id="city" />
        <FontAwesomeIcon
          icon={faSearch}
          className="weather-search"
          onClick={() => getWeather()}
        />
      </div>

      <div className="weather-results">
        <div className="weather-result-temp">
          <p>Погода на сегодня:</p>
          <b id="weather-result-temp"></b>
        </div>
        <div className="weather-result-temp" id="weather-result-feels-like">
          <p>Ощущается, как:</p>
          <b id="weather-result-feels-p"></b>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Weather;
