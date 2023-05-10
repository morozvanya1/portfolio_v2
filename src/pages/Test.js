import React from "react";
import "../css/Test.css";

function Test() {
  const [tower, setTower] = React.useState("А");
  const [floor, setFloor] = React.useState("3");
  const [room, setRoom] = React.useState("1");
  const [valueD, setValueD] = React.useState("2022-11-05T01:00");
  const [comment, setComment] = React.useState("");
  const towerList = ["А", "Б"];

  const items = [
    {
      tower: tower,
      floor: floor,
      room: room,
      valueD: valueD,
      comment: comment,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(JSON.stringify(items));
  };

  const handleClear = () => {
    setTower("А");
    setFloor("3");
    setRoom("1");
    setValueD("");
    setComment("");
  };

  return (
    <div className="Test">
      <form onSubmit={handleSubmit}>
        <label>
          <p>Выберите башню:</p>
          <select value={tower} onChange={(e) => setTower(e.target.value)}>
            {towerList.map((v, k) => (
              <option value={v} key={k}>
                {v}
              </option>
            ))}
          </select>
        </label>
        <label>
          <p>Выберите этаж:</p>
          <select value={floor} onChange={(e) => setFloor(e.target.value)}>
            {Array.from({ length: 25 }, (_, i) => i + 3).map((v, k) => (
              <option key={k} value={v}>
                {v}
              </option>
            ))}
          </select>
        </label>
        <label>
          <p>Выберите переговорку:</p>
          <select value={room} onChange={(e) => setRoom(e.target.value)}>
            {Array.from({ length: 10 }, (_, i) => i + 1).map((v, k) => (
              <option key={k} value={v}>
                {v}
              </option>
            ))}
          </select>
        </label>
        <label>
          <p>Выберите дату и время:</p>
          <input
            type="datetime-local"
            value={valueD}
            onChange={(e) => setValueD(e.target.value)}
          />
        </label>
        <label>
          <p>Комментарий:</p>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </label>
        <div className="buttons">
          <button type="submit">Отправить</button>
          <button type="button" onClick={handleClear}>
            Очистить
          </button>
        </div>
      </form>
    </div>
  );
}

export default Test;
