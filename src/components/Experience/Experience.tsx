import { useEffect, useState } from "react";

import "./Experience.scss";
import Landing from "../../assets/Landing.png"
import Cordial from "../../assets/cordial.png"
import OV from "../../assets/ov.jpg"
import Next from "../../assets/next.svg"
import React from "../../assets/react.svg"
import Node from "../../assets/nodejs.svg"
import Angular from "../../assets/angular.svg"
import Typescript from "../../assets/typescript.svg"
import Java from "../../assets/java.svg"
import Redirect from "../../assets/link.svg"
import DevWeb from "../../assets/dev-web.webp"
import SwipeLeft from "../../assets/swipe-left.svg"

const Experience = () => {

  const [swipeLeft, setSwipteLeft] = useState<boolean>(true)
  
  useEffect(() => {
    const experiencesContainer = document.getElementById("scroll")
    experiencesContainer?.addEventListener("scroll", () => {
      if (experiencesContainer.scrollWidth > 0) {
        setSwipteLeft(false)
      }
    });
  }, [])

  return (
    <div id="experiences" className="experiences">
      <div className="experiences-container" id="scroll">
        <div className={"experience"}>
          <div className="left-side">
            <h2 className="title">Fullstack Developer</h2>
            <img src={DevWeb} alt="" />
          </div>
          <p className="description">
            <span>Web development</span> oriented to insurance companies for the consultancy ABS-TI.<br/><br/>
            I work on frontend and backend, although my specialty is the front with React/Next + Typescript. I use technologies like <span>React, Next, Angular, Javascript, Typescript, Java, Node, Springboot</span>.<br/><br/>
            Aug 2022 - Current
          </p>
          <div className="right-icons">
            <a className="clickeable" href="https://www.abs-ti.com/es/" target="_blank">
              <img className="redirect" src={Redirect} alt="" />
            </a>
          </div>
        </div>
        <div className={"experience"}>
          <div className="left-side">
            <h2 className="title">Cordial E-Commerce</h2>
            <img src={Cordial} alt="" />
          </div>
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
          <div className="left-side">
            <h2 className="title">SMG Landing Page</h2>
            <img src={Landing} alt="" />
          </div>
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
          <div className="left-side">
            <h2 className="title">Virtual Office</h2>
            <img src={OV} alt="" />
          </div>
          <p className="description">
            We developed a <span>Virtual Office</span> for SMG employees to facilitate inquiries about the company's customer data.<br/><br/>In addition, we migrated from an old database to a much more modern one to speed up the query.
          </p>
          <div className="right-icons">
            <img className="first-tech" src={React} alt="" />
            <img className="second-tech" src={Java} alt="" />
          </div>
        </div>
        {
          swipeLeft &&
          <div className="right-pointer">
            <img className="icon" src={SwipeLeft} alt="" />
          </div>
        }
      </div>
    </div>
  )
}

export default Experience