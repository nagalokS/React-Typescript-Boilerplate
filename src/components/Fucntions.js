import { useState } from "react";
import "../scss/style.scss";

const firstObj = {
  name: "Ivane",
  age: 22,
  haircut: "bold",
};

const secondObj = {
  name: "Ivan",
  age: 12,
  haircut: "long-hair",
};

export default () => {
  const [list, setList] = useState([]);

  return (
    <div className="img-wrapper">
      <div>
        <h2>random headerdsd</h2>
      </div>

      <button
        onClick={() => {
          setList(firstObj);
        }}
      >
        first
      </button>

      <button
        onClick={() => {
          setList(secondObj);
        }}
      >
        second
      </button>

      <ul>
        {Object.keys(list).map((el, id) => (
          <li key={id}>
            {el}:{list[el]}
          </li>
        ))}
      </ul>
    </div>
  );
};
