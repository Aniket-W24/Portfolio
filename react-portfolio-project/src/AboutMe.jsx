import { useState } from "react";
import "./AboutMe.css";

export default function AboutMe() {
  let [bgColor, setBgColor] = useState("white");
  let [color, setColor] = useState("black");

  let pStyles = {opacity: "1", backgroundColor: "#535353", color: "white", transform: "skew(-10deg)", height: "fit-content", width: "600px", marginLeft: "5px"}

  let btnClick = () => {
    const newBgColor = bgColor === "white" ? "black" : "white";
    const newColor = color === "black" ? "#FAF9F6" : "black";
    setBgColor(newBgColor);
    setColor(newColor);
    console.log(newColor);
    console.log("Button clicked");
  };
  return (
    <div className="AboutMe" style={{ backgroundColor:  bgColor, color: color  }}>
      <p >
        I am a passionate <b>Full-Stack Developer</b> dedicated to solving
        complex problems.
        <br></br>
        <br></br>I firmly <b>Believe</b> in the power of combining <b>Smart</b>{" "}
        work with <b>Hard</b> work.
      </p>
      {/* <img src="/Subject.png"></img> */}
      {/* <button
        onClick={btnClick}
        style={{ backgroundColor: bgColor, border: "none" }}
      > */}
        <img onClick={btnClick} src="/lampImg.png"></img>
      {/* </button> */}
    </div>
  );
}
