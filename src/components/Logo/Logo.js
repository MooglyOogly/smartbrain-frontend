import React from "react";
import Tilt from "react-parallax-tilt";
import brain from "./smartbrain.png";
import "./Logo.css";

const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt
        tiltReverse="true"
        className="br2 shadow-2"
        style={{ height: "130px", width: "130px" }}
      >
        <div className="pa3">
          <img style={{ paddingTop: "20px" }} alt="logo" src={brain} />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
