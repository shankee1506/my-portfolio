import React from 'react'
import './Intro.css';
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";

import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";

import { Link } from "react-scroll";

const Intro = () => {
  return (
    <div className="Intro" id="Intro">
    {/* left name side */}
    <div className="i-left">
      <div className="i-name">
        {/* yahan change hy darkmode ka */}
        <span >Hey! I Am</span>
        <span>Shankeerthan</span>
        <span>
          Full Stack Developer with beginner level of experience in web designing
          and development, producting the Quality work
        </span>
      </div>
      <Link to="contact" smooth={true} spy={true}>
        <button className="button i-button">Hire me</button>
      </Link>
      {/* social icons */}
        <div className="i-icons">
          <a href='https://github.com/shankee1506'>
            <img src={Github} alt="" />
          </a>
          <a href='https://www.linkedin.com/in/perananthan-shankeerthan-b22a14197/'>
          <img src={LinkedIn} alt="" />
          </a>
          <a href=''>
          <img src={Instagram} alt="" />
          </a>       
      </div>
    </div>
    {/* right image side */}
    <div className="i-right">
      <img src={Vector1} alt="" />
      <img src={Vector2} alt="" />
      <img src={boy} alt="" />
      {/* animation */}





      <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
      <div
        className="blur"
        style={{
          background: "#C1F5FF",
          top: "17rem",
          width: "21rem",
          height: "11rem",
          left: "-9rem",
        }}
      ></div>
    </div>
  </div>
  )
}

export default Intro