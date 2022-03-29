import React, { useState, useEffect } from "react";
import rgbToHex from "./utils";

const SingleColor = (props) => {
  const { rgb, weight, hex, index } = props;
  const [alert, setAlert] = useState(false);

  const bgc = rgb.join(",");
  const hexValue = `#${hex}`;

  useEffect(() => {
    const id = setTimeout(() => {
      setAlert(false);
    }, 2000);

    return () => {
      clearTimeout(id);
    };
  }, [alert]);

  return (
    <article
      className={`color ${index >= 10 && "color-light"} ${
        index === 10 && "--border"
      }`}
      style={{ backgroundColor: `rgb(${bgc})` }}
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(hexValue);
      }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hexValue}</p>
      {index === 0 && (
        <p className="love">
          {" "}
          Made with <span>❤</span> by Mahesh
        </p>
      )}
      <p className="alert">{alert && "copied to clipboard"}</p>

      {index === 10 && <h4 className="color-light center">base</h4>}
    </article>
  );
};

export default SingleColor;

/* alpha: 1
rgb: (3) [255, 255, 255]
type: "tint"
weight: 100
hex: ("ffffff"); */
