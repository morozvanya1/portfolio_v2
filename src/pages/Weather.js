import React from "react";
import "../css/Weather.css";
import { Footer, Header } from "../components/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faSearch,
  faAngleRight,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

function Weather() {
  const [cities, setCities] = React.useState(
    localStorage.getItem("cities") === null
      ? []
      : JSON.parse(localStorage.getItem("cities"))
  );

  const ref = React.useRef(null);

  React.useEffect(() => {
    var hf = document.getElementsByTagName("footer")[0].offsetTop + "px";
    document.getElementsByClassName("Weather")[0].style.height = hf;
  }, [ref]);

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
        document.getElementsByClassName("weather-results")[0].style.display =
          "flex";
      })
    );
  }

  function changeCity(v) {
    document.getElementById("city").value = v;
    getWeather();
  }

  function addCity() {
    const q = document.getElementById("city").value;
    var list =
      localStorage.getItem("cities") === null
        ? []
        : JSON.parse(localStorage.getItem("cities"));
    list[list.length] = q;
    console.log(list);
    localStorage.setItem("cities", JSON.stringify(list));
    setCities(list);
  }

  function deleteCity(v) {
    var list =
      localStorage.getItem("cities") === null
        ? []
        : JSON.parse(localStorage.getItem("cities"));
    var arr = [];
    var index = 0;
    for (var i = 0; i < list.length; i++) {
      if (list[i] !== v) {
        arr[index] = list[i];
        index++;
      }
    }
    localStorage.setItem("cities", JSON.stringify(arr));
    setCities(arr);
  }

  return (
    <div className="Weather" ref={ref}>
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

      <div className="my-cities">
        <div className="add-city">
          <button onClick={() => addCity()}>Добавить город</button>
        </div>
        <div className="cities-list">
          <b>Избранные города:</b>
          {cities.map((v, k) => (
            <div className="city" key={k}>
              <FontAwesomeIcon
                icon={faXmark}
                className="weather-close"
                onClick={() => deleteCity(v)}
              />
              <p onClick={() => changeCity(v)}>{v}</p>
              <FontAwesomeIcon
                icon={faAngleRight}
                className="weather-right"
                onClick={() => changeCity(v)}
              />
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Weather;
