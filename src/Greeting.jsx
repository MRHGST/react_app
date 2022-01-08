import React from "react";

const today = new Date();
const time = today.getHours();
let greeting;

const customStyle = {
  color: "",
};

if (time < 12) {
  greeting = "Good morning";
  customStyle.color = "Red";
} else if (time < 18) {
  greeting = "Good afternoon";
  customStyle.color = "Green";
} else {
  greeting = "Good evening";
  customStyle.color = "Blue";
}

function Greeting() {
  return (
    <h1 className="heading" style={customStyle}>
      {greeting}
    </h1>
  );
}

export default Greeting;
