import { useState } from "react";
import "./AboutMe.css";

export default function AboutMe() {
  // let [bgColor, setBgColor] = useState("white");
  // let [color, setColor] = useState("black");

  // let pStyles = {opacity: "1", backgroundColor: "#535353", color: "white", transform: "skew(-10deg)", height: "fit-content", width: "600px", marginLeft: "5px"}

  // let btnClick = () => {
  //   const newBgColor = bgColor === "white" ? "black" : "white";
  //   const newColor = color === "black" ? "#FAF9F6" : "black";
  //   setBgColor(newBgColor);
  //   setColor(newColor);
  //   console.log(newColor);
  //   console.log("Button clicked");
  // };

  // style={{ backgroundColor:  bgColor, color: color  }}
  return (
    <div style={{display: 'flex', padding: "2rem"}}>
      <p className="AboutMe" >
      I am a passionate <b>Full-Stack Developer</b> dedicated to solving complex problems with innovative solutions. I believe in the power of <b>Smart</b> work combined with <b>Hard</b> work to create high-quality, scalable applications.
      </p>
      <div>
        <img src="manWithCoffee.svg" style={{height: '30rem', width: '30rem'}}></img>
      </div>
    </div>
  );
}
