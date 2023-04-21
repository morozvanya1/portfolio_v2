import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faBus,
  faShirt,
  faRightFromBracket,
  faAngleRight,
  faVanShuttle
} from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className="App">
      <header>
        <div className="header">
          <b>Морозов Иван</b>
          <img alt="" />
        </div>
        <h1>Мои проекты</h1>
      </header>

      <div className="content">
        <div className="content-element">
          <div className="content-header">
            <FontAwesomeIcon icon={faShirt} className="icon" />
          </div>
          <div className="content-body">
            <h2>Гардероб</h2>
            <p>Список вещей</p>
          </div>
          <FontAwesomeIcon icon={faAngleRight} className="arrow" />
        </div>
        <div className="content-element">
          <div className="content-header">
            <FontAwesomeIcon icon={faVanShuttle} className="icon" />
          </div>
          <div className="content-body">
            <h2>ЦДС Вятка</h2>
            <p>Расписание автобусов</p>
          </div>
          <FontAwesomeIcon icon={faAngleRight} className="arrow" />
        </div>
      </div>

      <footer>
        <div className="menu-footer">
          <FontAwesomeIcon icon={faHouse} className="icon active-1" />
          <p className="menu-choise active-2"></p>
        </div>
        <div className="menu-footer">
          <FontAwesomeIcon icon={faShirt} className="icon" />
          <p className="menu-choise"></p>
        </div>
        <div className="menu-footer">
          <FontAwesomeIcon icon={faBus} className="icon" />
          <p className="menu-choise"></p>
        </div>
        <div className="menu-footer">
          <FontAwesomeIcon icon={faRightFromBracket} className="icon" />
          <p className="menu-choise"></p>
        </div>
      </footer>
    </div>
  );
}

export default App;
