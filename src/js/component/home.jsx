import React, { useState } from "react";
import Light from "./Light.jsx";

//create your first component
const Home = () => {
  const [active, setActive] = useState(null);
  const [color, setColor] = useState("");
  function handleChange() {
    setColor(event.target.value);
  }
  return (
    <>
      <div
        className="container m-auto mt-5 pt-5 pb-5 bg-dark col-2 rounded d-flex flex-column align-items-center"
        onClick={() => setActive(event.target.style.backgroundColor)}
      >
        <Light color="red" active={active} />
        <Light color="yellow" active={active} />
        <Light color="green" active={active} />
      </div>
      <div className="container d-block col-2 mt-3">
        <label>
          Choose a color to add:
          <select className="ms-2 mb-5" value={color} onChange={handleChange}>
            <option value="" disabled defaultValue=""></option>
            <option value="purple">Purple</option>
            <option value="Blue">Blue</option>
            <option value="Rainbow">Mystery</option>
          </select>
        </label>
      </div>
    </>
  );
};

export default Home;
