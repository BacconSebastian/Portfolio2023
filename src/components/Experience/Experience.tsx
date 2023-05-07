import { useEffect, useState } from "react";

import "./Experience.scss";
import ExperienceIcon from "../../assets/experience.png"
import Landing from "../../assets/Landing.png"
import Cordial from "../../assets/cordial.png"
import OV from "../../assets/ov.jpg"
import Next from "../../assets/next.svg"
import React from "../../assets/react.svg"
import Node from "../../assets/nodejs.svg"
import Angular from "../../assets/angular.svg"
import Typescript from "../../assets/typescript.svg"
import Java from "../../assets/java.svg"
import Redirect from "../../assets/redirect.svg"
import DevWeb from "../../assets/dev-web.webp"

const Experience = () => {

  return (
    <div className="experiences">
      <img className={"experience-icon"} src={ExperienceIcon} alt="" />
      <div className="experiences-container" id="scroll">
        <div className={"experience"}>
          <h1 className="title">Fullstack Developer</h1>
          <img src={DevWeb} alt="" />
          <p className="description">
            <span>Web development</span> oriented to insurance companies for the consultancy ABS-TI.<br/><br/>
            I work on frontend and backend, although my specialty is the front with React/Next + Typescript.<br/><br/>
            I use technologies like <span>React, Next, Angular, Javascript, Typescript, Java, Node, Springboot</span>.<br/><br/>
            Aug 2022 - Current
          </p>
          <div className="right-icons">
            <a className="clickeable" href="https://www.abs-ti.com/es/" target="_blank">
              <img className="redirect" src={Redirect} alt="" />
            </a>
          </div>
        </div>
        <div className={"experience"}>
          <h1 className="title">Cordial E-Commerce</h1>
          <img src={Cordial} alt="" />
          <p className="description">
            We developed an <span>E-Commerce</span> for Cordial, which will have its functionality in Paraguay.
            <br/><br/>In this development we handle user data, purchases, sales, permissions, among many other things.
          </p>
          <div className="right-icons">
            <img className="first-tech" src={Angular} alt="" />
            <img className="second-tech" src={Typescript} alt="" />
            <a className="clickeable" href="https://dev.nous.com.py/home" target="_blank">
              <img className="redirect" src={Redirect} alt="" />
            </a>
          </div>
        </div>
        <div className={"experience"}>
          <h1 className="title">SMG Landing Page</h1>
          <img src={Landing} alt="" />
          <p className="description">
            We developed a static page for Swiss Medical Group, which works as a <span>Landing Page</span> for a first
            contact with customers.<br/><br/>You also have the option to send emails of consultation, quote, etc.
          </p>
          <div className="right-icons">
            <img className="next" src={Next} alt="" />
            <img className="second-tech" src={Node} alt="" />
            <a href="https://swissmedicalseguros.com/" target="_blank">
              <img className="redirect" src={Redirect} alt="" />
            </a>
          </div>
        </div>
        <div className={"experience"}>
          <h1 className="title">Virtual Office</h1>
          <img src={OV} alt="" />
          <p className="description">
            We developed a <span>Virtual Office</span> for SMG employees to facilitate inquiries about the company's customer data
          </p>
          <div className="right-icons">
            <img className="first-tech" src={React} alt="" />
            <img className="second-tech" src={Java} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience