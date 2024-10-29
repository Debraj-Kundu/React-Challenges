import React, { forwardRef, useRef } from "react";

const Circle = forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      style={{
        height: "60px",
        width: "60px",
        borderRadius: "100%",
        background: "cyan",
        position: "absolute",
        top: "0px",
        left: "0px",
        opacity: "50%",
      }}
    ></div>
  );
});
export const MovingCursor = () => {
  const my_style = {
    border: "2px solid black",
    width: "500px",
    height: "500px",
    position: "relative",
  };
  const circleRef = useRef(null);
  const handleMouseMove = (e) => {
    setTimeout(() => {
      circleRef.current.style.left = e.clientX + "px";
      circleRef.current.style.top = e.clientY + "px";
    }, 150);
    // console.log(e.clientX, e.clientY);
  };
  return (
    <div onMouseMove={handleMouseMove} style={my_style}>
      <h2>Moving Circle</h2>
      <Circle ref={circleRef} />
    </div>
  );
};
