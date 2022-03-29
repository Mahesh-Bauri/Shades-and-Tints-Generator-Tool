import React, { useEffect, useState, useRef } from "react";
import SingleColor from "./SingleColor";
import { getRandomHex } from "./utils1";
import Values from "values.js";
import { CgColorPicker } from "react-icons/cg";

function App() {
  const inpRef = useRef(null);
  // const [error, setError] = useState(false);
  const [list, setList] = useState(new Values("#f2f444").all(10));
  // const [value, setValue] = useState("");
  const [random, setRandom] = useState("#f2f444");
  const [picker, setPicker] = useState("#f2f444");

  function handleSubmit(e) {
    try {
      const colors = new Values(e.target.value).all(10);
      inpRef.current.value = e.target.value;
      setPicker(e.target.value);
      setList(colors);
    } catch (err) {
      console.log(err);
      // setError(true);
    }
  }

  function randomColor() {
    try {
      const randomColor = getRandomHex();
      const colors = new Values(randomColor).all(10);
      setPicker(randomColor);
      setRandom(randomColor);
      setList(colors);
    } catch (err) {
      console.log(err);
      // setError(true);
    }
  }

  useEffect(() => {
    inpRef.current.focus();
    inpRef.current.value = random;
  }, [random]);

  console.log("render");
  return (
    <>
      <section className="container shadow">
        <h3>{`shades & tints generator`}</h3>
        <form className="inp-form" action="">
          <div className="inp-c">
            <label htmlFor="color">
              <CgColorPicker className="picker" />
            </label>
            <input
              // style={{ backgroundColor: `${picker}` }}
              type="color"
              name="color"
              id="color"
              value={picker}
              onChange={handleSubmit}
              className="color-picker"
            />
          </div>

          <input
            ref={inpRef}
            type="text"
            placeholder="#f2f444"
            // className={`${error ? "error" : null}`}
            onChange={handleSubmit}
          />

          {/* <button type="submit" className="btn">
            submit
          </button> */}
        </form>
        <button className="btn btn-random" onClick={randomColor}>
          random
        </button>
      </section>
      <section className="colors">
        {list.map((color, index) => {
          const { hex } = color;

          return <SingleColor index={index} key={index} {...color} hex={hex} />;
        })}
      </section>
    </>
  );
}

export default App;
