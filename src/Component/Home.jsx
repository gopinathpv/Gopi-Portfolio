import "../App.css";
import React from "react";
import Typewriter from "typewriter-effect";
import { AiFillGithub } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import {
  styleHello,
  styleName,
  icon,
  homeStyle,
  typeWriterOptions,
  github,
  linkedin,
} from "./ConstantFile";

function Home() {
  return (
    <>
      <div className="center" style={homeStyle}>
        <div style={styleHello}>Hello</div>
        <div style={styleName}>I'm Gopinath Polasani Vasu </div>
        <div style={styleName}>
          <Typewriter options={typeWriterOptions} />
        </div>
        <div>
          <button
            style={icon}
            className="mediabtn"
            type="button"
            onClick={() => window.open(github)}
          >
            <AiFillGithub className="icon" />
          </button>
          <button
            style={icon}
            type="button"
            className="mediabtn"
            onClick={() => window.open(linkedin)}
          >
            <BsLinkedin className="icon" />
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;
