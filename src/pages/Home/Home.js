import React, { useState, useRef, useLayoutEffect } from "react";
import { NavLink } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import { useSelector, useDispatch } from "react-redux";

import { homeCoverUnMount, selectHomeCoverStatus } from "./homeSlice";

import useMousePosition from "../../assets/hook/useMousePosition";

import StandardCanvas from "../../assets/components/StandardCanvas";

import github_icon from "../../assets/img/github_icon.png";
import arrow_clean from "../../assets/img/arrow_clean.png";

import "./Home.css";



const animationForce = {
  move: 5,
  rotateX: 8,
  rotateY: 6
}

export default function Home() {  
  const homeCoverStatus = useSelector(selectHomeCoverStatus);
  const dispatch = useDispatch();

  const [stage, setStage] = useState({width: 0, height: 0});
  const stageRef = useRef(null);

  const mousePosition = useMousePosition();

  useLayoutEffect(() => {
    if (stageRef.current) {
      setStage({
        width: stageRef.current.offsetWidth,
        height: stageRef.current.offsetHeight
      });
    }
  }, []);

  const lookAtMe = function(x, y) {
    let stageX = stage.width;
    let stageY = stage.height;

    let mouseX = x;
    let mouseY = y;

    let moveX = (mouseX - stageX/2) / (stageX/2) * animationForce.move;
    let moveY = (mouseY - stageY/2) / (stageY/2) * animationForce.move;
  
    let rotateY = (mouseX / stageX * animationForce.rotateX*2) - animationForce.rotateX;
    let rotateX = -((mouseY / stageY * animationForce.rotateY*2) - animationForce.rotateY);

    return {left: `${moveX}px`, top: `${moveY}px`, transform: `translate(35%,10%)rotateX(${rotateX}deg)rotateY(${rotateY}deg)`};
  }

return (
    <div className="home" ref={stageRef}>
      <StandardCanvas />
      <div className="homeContainerWrapper" >
        <div className="homeContainer">
          <div className="homeContent">
            <h1 className="homeTitle">Conheça mais sobre mim!</h1>
            <div className="homeLinksContainer">
            <NavLink className="homeLinkProjects" to="/projects"><span className="homeLinkArrowLeft">➜</span>Projetos</NavLink>
            <NavLink className="homeLinkContacts" to="/contacts">Contatos<span className="homeLinkArrowRight">➜</span></NavLink>
            </div>
            <a className="homeMyCodeContainer" href="https://github.com/ifaithfrost/">
              <div className="homeMyCodeFace">
                <div className="homeMyCodeEyeBallLeft" >
                  <div className="homeMyCodeEyePupilLeft" style={lookAtMe(mousePosition.x, mousePosition.y)}/>
                </div>
                <div className="homeMyCodeEyeBlushLeft"/>
                <div className="homeMyCodeEyeBallRight" >
                  <div className="homeMyCodeEyePupilRight" style={lookAtMe(mousePosition.x, mousePosition.y)}/>
                </div>
                <div className="homeMyCodeEyeBlushRight"/>
                <img className="homeMyCodeFaceImg" src={github_icon} alt="cute github"/>
              </div>
                <h1 className="homeMyCodeText">Meu Código</h1>
            </a>
          </div>
          <CSSTransition classNames="homeCoverContent" timeout={800} in={homeCoverStatus} unmountOnExit>
            <div className="homeCoverContent">
              <h1 className="homeCoverTitle">Eu sou Ítalo!</h1>
              <p className="homeCoverTextTop">Um desenvolvedor,<br /> criativo, apaixonado com uma história incrível!</p>
              <span className="homeCoverTextBottom">Que você pode fazer parte!</span>
              <img className="homeCoverArrowUp" onClick={() => dispatch(homeCoverUnMount())} src={arrow_clean} alt="simple arrow up"/>
            </div>
          </CSSTransition>
        </div>
      </div>
    </div>
  )
}
