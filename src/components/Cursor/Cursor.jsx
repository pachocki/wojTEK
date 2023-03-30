import React, { useContext, useEffect } from "react";
import "./cursor.css";
import useMousePosition from "../../hooks/useMousePosition";
import { MouseContext } from "../../context/MouseContext";

const DotRing = () => {
  const { cursorType, cursorChangeHandler } = useContext(MouseContext);
  const { x, y } = useMousePosition();

  return (
    <>
      <div
        className={"dot md:hidden " + cursorType}
        style={{ left: `${x}px`, top: `${y}px` }}
      ></div>
    </>
  );
};

export default DotRing;
