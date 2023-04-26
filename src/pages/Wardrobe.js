import "./Wardrobe.css";
import React from "react";
import Footer from "../components/Footer";
import { faBagShopping, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import tshirt from "../img/tshirt.png";
import sweatpants from "../img/sweatpants.png";
import shorts from "../img/shorts.png";
import jacket from "../img/jacket.png";
import accessories from "../img/accessories.png";
import Item from "../components/Item";
import Header from "../components/Header";

function Wardrobe() {
  const iMenu = ["Основное", "Желаемое"];
  const [aMenu, setAMenu] = React.useState(0);
  const ref = React.useRef(null);

  React.useEffect(() => {
    var hf = document.getElementsByTagName("footer")[0].offsetTop + "px";
    document.getElementsByClassName("Wardrobe")[0].style.height = hf;
  }, [ref]);

  return (
    <div className="Wardrobe" ref={ref}>
      <Header 
        d={"Категории"}
        ic={[faAngleLeft, faBagShopping]}
        l={"/"}
      />

      <div className="categories">
        <div className="categories-item">
          {iMenu.map((v, k) => (
            <div
              className={aMenu === k ? "active" : null}
              key={k}
              onClick={() => setAMenu(k)}
            >
              <p>{v}</p>
            </div>
          ))}
        </div>

        {aMenu === 0 ? (
          <Item
            d={["Куртки;", "Футболки;", "Штаны;", "Шорты;", "Аксессуары;"]}
            ic={[jacket, tshirt, sweatpants, shorts, accessories]}
            l={["/content", "/content", "/content", "/content", "/content"]}
            img
          />
        ) : null}
      </div>

      <Footer />
    </div>
  );
}

export default Wardrobe;
