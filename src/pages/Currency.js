import React from "react";
import "../css/Currency.css";
import { Footer, Header } from "../components/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faArrowsRotate } from "@fortawesome/free-solid-svg-icons";

function Currency() {
  const ref = React.useRef(null);
  const w = ["Доллар", "Евро"];

  React.useEffect(() => {
    var hf = document.getElementsByTagName("footer")[0].offsetTop + "px";
    document.getElementsByClassName("Currency")[0].style.height = hf;
  }, [ref]);

  async function getCurrency() {
    var myHeaders = new Headers();
    myHeaders.append("apikey", "jWk4gL5bH5ljsQnS3H9MsOad5dsRWArx");

    var requestOptions = {
      method: "GET",
      redirect: "follow",
      headers: myHeaders,
    };

    await fetch(
      "https://api.apilayer.com/currency_data/live?source=RUB&currencies=USD%2CEUR",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        const usd = 1 / result.quotes.RUBUSD;
        const eur = 1 / result.quotes.RUBEUR;
        document.getElementsByClassName("currency-result-val")[0].innerHTML =
          usd.toFixed(2);
        document.getElementsByClassName("currency-result-val")[1].innerHTML =
          eur.toFixed(2);
      })
      .catch((error) => console.log("error", error));

      document.getElementsByClassName("currency-results")[0].style.display = "flex";
  }

  return (
    <div className="Currency" ref={ref}>
      <Header d={"Курс валют"} ic={[faAngleLeft]} l={"/others"} />

      <FontAwesomeIcon
        icon={faArrowsRotate}
        className="refresh"
        onClick={() => getCurrency()}
      />

      <div className="currency-main">
        <button onClick={() => getCurrency()}>Узнать курс на сегодня</button>
      </div>

      <div className="currency-results">
        {w.map((v, k) => (
          <div className="currency-result" key={k}>
            <p>{v}</p>
            <b className="currency-result-val">80.24</b>
          </div>
        ))}
      </div>

      {/* <Load /> */}

      <Footer />
    </div>
  );
}

export default Currency;
