import "../css/App.css";
import { Footer, Item } from "../components/index";
import { faShirt, faListCheck } from "@fortawesome/free-solid-svg-icons";

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
        d={["Гардероб;Список вещей", "Прочее;Все остальное"]}
        ic={[faShirt, faListCheck]}
        l={["/wardrobe", "/others"]}
      />

      <Footer />
    </div>
  );
}

export default App;
