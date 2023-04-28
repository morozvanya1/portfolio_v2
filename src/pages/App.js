import "../css/App.css";
import {Footer, Item} from "../components/index"
import { faShirt, faVanShuttle } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className="App">
      <header>
        <div className="main-header">
          <b>Морозов Иван</b>
          <img alt="" />
        </div>
        <h1>Мои проекты</h1>
      </header>

      <Item
        d={["Гардероб;Список вещей", "ЦДС Вятка;Расписание автобусов"]}
        ic={[faShirt, faVanShuttle]}
        l={["/wardrobe", "/routes"]}
      />

      <Footer />
    </div>
  );
}

export default App;
