import React, { useState, useRef, useLayoutEffect, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Draggable from 'react-draggable';

import StandardCanvas from "../../assets/components/StandardCanvas";
import MyForm from "../../assets/components/MyFroms/MyForms";

import "./Contact.css";



export default function Contacts() {
  const [stage, setStage] = useState({width: 0, height: 0});
  const stageRef = useRef(null);

  const dragSettings = {
    initial: "60%",
    maxBack: 34.2,
    maxFront: 60
  }

  let bounds = {
    left: (stage.width * dragSettings.maxFront) / 100,
    right: (stage.width * dragSettings.maxBack) / 100,
  }

  useEffect(() => {
    bounds.left = (stage.width * dragSettings.maxFront) / 100
    bounds.right = (stage.width * dragSettings.maxBack) / 100
  },[stage.width])

  useLayoutEffect(() => {
    if (stageRef.current) {
      setStage({
        width: stageRef.current.offsetWidth,
        height: stageRef.current.offsetHeight
      });
    }
  }, [stageRef.current]);
  return (
    <div className="contacts" ref={stageRef}>
      <StandardCanvas/>
      <Draggable handle="button" axis={"x"} 
        positionOffset={{x: dragSettings.initial ,y: "0%"}} 
        bounds={{top: 0, left: -bounds.left, right: bounds.right, bottom: 0}}
      >
        <div className="contactsWrapper">
          <div className="contactsContainer">
            <div className="contactsIntro"> 
              <p className="contactsText">
                Vamos{stage.width > stage.height ? <br/> : " "}
                começar{stage.width > stage.height ? <br/> : " "}
                a desenvolver{stage.width > stage.height ? <br/> : " "}
                uma nova aplicação{stage.width > stage.height ? <br/> : " "}
                de uma pagina em branco,{stage.width > stage.height ? <br/> : " "}
                entre em contato
              </p>
              <button className="contactsDragButton"><span className="contactDragButtonArrowLeft">➜</span>Clique e arraste</button>
            </div>
            <div className="contactForms">
              <MyForm/>
            </div>
            <NavLink className="contactsToHomeButton" to="/">✖</NavLink>
          </div>
        </div>
      </Draggable>
    </div>
  );
}
