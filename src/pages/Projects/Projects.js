import React from "react";
import { NavLink } from "react-router-dom";
import { CSSTransition } from "react-transition-group"
import { useSelector, useDispatch } from "react-redux";

import { projectsLiStatusReducer, projectsLiIndexReducer, selectProjectsLiIndex, selectProjectsLiStatus } from "./projectsSlice";

import ProjectsCanvasLine from "../../assets/components/ProjectsCanvas"

import ProjectImg0 from "../../assets/img/projectImg0.png"
import ProjectImg1 from "../../assets/img/projectImg1.png"
import ProjectImg2 from "../../assets/img/projectImg2.png"
import ProjectImg3 from "../../assets/img/projectImg3.png"

import "./Projects.css";

const projects = [
  {color: "#000"},
  {img: ProjectImg0, title: "Esse Site!", color: "#000"},
  {img: ProjectImg1, title: "Happy", color: "linear-gradient(329.54deg, #29B6D1 0%, #00C7C7 100%)"},
  {img: ProjectImg2, title: "Instagram Clone", color: "linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)"},
  {img: ProjectImg3, title: "Amazon Clone", color: "#232f3e"}
]

export default function Projects() {
  const projectsLiStatus = useSelector(selectProjectsLiStatus);
  const projectsLiIndex = useSelector(selectProjectsLiIndex);
  const dispatch = useDispatch();

  const liUpdate = function(liIndex) {
    if ( projectsLiStatus === true) {
      dispatch(projectsLiStatusReducer({status: false}))
    } else {
        dispatch(projectsLiStatusReducer({status: true}))
      }
    setTimeout(() => {
      dispatch(projectsLiIndexReducer({index: liIndex}))
    }, 300);
  }
  const liRender = function(liIndex) {
    switch (liIndex) {
      case 1:
        return <div className="projectsOnHoverContainer">
        <img className="projectsOnHoverImg" src={projects[1].img} alt={projects[1].title} />
        <h1 className="projectsOnHoverTitle" > Site de portifólio pessoal </h1>
        <p className="projectsOnHoverText" >
          Esse é o meu projeto pessoal de portifólio, as principais tecnologias usadas na sua criação foram React, Redux, Custom Hooks e Amazon AWS.
          <br className="projectsOnHoverBr" /> <br className="projectsOnHoverBr" />
          Ele surgiu como uma maneira divertida e elegante de nos conectar enquanto te mostra implementações visuais de diversos tipos.
          Também foi pensado em todos os níveis de abstração para se manter um código simples, legível e com um bom range de tecnologias
          que possam agregar na sua empresa! 
          <br className="projectsOnHoverBr" /> <br className="projectsOnHoverBr" />
          E todo seu código se encontra abaixo:
        </p>
        <a className="projectsOnHoverGitLink" href="https://github.com/ifaithfrost/personal-website" style={{background: projects[1].color}} > Codigo</a>
      </div>
      case 2:
        return <div className="projectsOnHoverContainer">
        <img className="projectsOnHoverImg" src={projects[2].img} alt={projects[2].title} />
        <h1 className="projectsOnHoverTitle" > Happy! - RocketSeat NLW#3 </h1>
        <p className="projectsOnHoverText" >
          Esse foi o projeto que me introduziu a programação.
          Suas principais tecnologias são, TypeScript, React.Js, React Native, Expo, Node.Js, Express.Js e TypeORM. 
          Nele criei aplicações web e mobile (Android, iOS) que consumiam uma API REST.
          <br className="projectsOnHoverBR" />
          Sua principal utilidade foi me guiar por conceitos básicos e direcionar meus estudos.
          Através desse começo eu consegui abstrair diversas noções sobre o estado do mercado de programação e
          experiencia desenvolvimento Full-Stack, para desenvolver minhas próprias aplicações.      
   
          <br className="projectsOnHoverBR" />
          Todo seu código se encontra abaixo:
        </p>
        <a className="projectsOnHoverGitLink" href="https://github.com/ifaithfrost/first-project-happy" style={{background: projects[2].color}} > Codigo</a>
      </div>
      case 3:
        return <div className="projectsOnHoverContainer">
        <img className="projectsOnHoverImg" src={projects[3].img} alt={projects[3].title} />
        <h1 className="projectsOnHoverTitle" > Clone Instagram - FreeCodeCamp </h1>
        <p className="projectsOnHoverText" >
        Esse é um de dois projetos clone, a ideia por trás desses projetos é aumentar meu portifólio de forma dinâmica, enquanto produzo projetos individuais. 
        O Instagram Clone foi produzido utilizando React Native, Firebase, Redux, Expo, entre outros pacotes e tecnologias.                
          <br className="projectsOnHoverBR" /> 
          Seu intuito é demonstrar para recrutadores o estudo contínuo na área de desenvolvimento e interesse em não só aprender novas tecnologias, 
          como também em consolidar meus conhecimentos em tecnologias que já fazem parte do meu dia-a-dia.
          <br className="projectsOnHoverBR" />
          Todo seu código se encontra abaixo:
        </p>
        <a className="projectsOnHoverGitLink" href="https://github.com/ifaithfrost/clone-instagram" style={{background: projects[3].color}} > Codigo</a>
      </div>
      case 4:
        return <div className="projectsOnHoverContainer">
        <img className="projectsOnHoverImg" src={projects[4].img} alt={projects[4].title} />
        <h1 className="projectsOnHoverTitle" > Clone Amazon - Clever Programmer </h1>
        <p className="projectsOnHoverText" >
        Esse é um de dois projetos clone, a ideia por trás desses projetos é aumentar meu portifólio de forma dinâmica, enquanto produzo projetos individuais. 
        O Amazon Clone foi produzido utilizando React, Firebase entre outros pacotes e tecnologias.                
          <br className="projectsOnHoverBR" /> 
          Seu intuito é demonstrar para recrutadores o estudo contínuo na área de desenvolvimento e interesse em não só aprender novas tecnologias, 
          como também em consolidar meus conhecimentos em tecnologias que já fazem parte do meu dia-a-dia.
          <br className="projectsOnHoverBR" />
          Todo seu código se encontra abaixo:
        </p>
        <a className="projectsOnHoverGitLink" href="https://github.com/ifaithfrost/clone-amazon" style={{background: projects[4].color}} > Codigo</a>
      </div>
      default:
        return <div/>
    }
  }
  return (
    <div className="projects">
      <ProjectsCanvasLine />
      <div className="projectsWrapper">
        <div className="projectsContainer">
          <NavLink className="projectsToHomeButton" to="/"><i className="fa fa-close" /></NavLink>
          <div className="projectsContent">
            <ul className="projectsList">
              <li className="projectsListItem" onClick={() => liUpdate(1)}>
                <img className="projectsListItemImg" src={projects[1].img} alt={projects[1].title} />
                <span className="projectsListArrowRight">➜</span>
                <h1 className="projectsListItemText">{projects[1].title}</h1>
              </li>
              <li className="projectsListItem" onClick={() => liUpdate(2)}>
                <img className="projectsListItemImg" src={projects[2].img} alt={projects[2].title} />
                <span className="projectsListArrowRight" >➜</span>
                <h1 className="projectsListItemText">{projects[2].title}</h1>
              </li>
              <li className="projectsListItem" onClick={() => liUpdate(3)}>
                <img className="projectsListItemImg" src={projects[3].img} alt={projects[3].title} />
                <span className="projectsListArrowRight" >➜</span>
                <h1 className="projectsListItemText">{projects[3].title}</h1>
              </li>
              <li className="projectsListItem" onClick={() => liUpdate(4)}>
                <img className="projectsListItemImg" src={projects[4].img} alt={projects[4].title} />
                <span className="projectsListArrowRight" >➜</span>
                <h1 className="projectsListItemText">{projects[4].title}</h1>
              </li>
            </ul>
          </div>
        </div>
        <div className="projectsOnHover">
          { projectsLiIndex !== 0 &&
          <button className="projectsOnHoverButton" onClick={() => liUpdate(0)}>
            ➜
          </button >}
          <CSSTransition classNames="projectsOnHoverContainer" timeout={300} in={projectsLiStatus}>
            {liRender(projectsLiIndex)}
          </CSSTransition>
        </div>
      </div>      
    </div>
  );  
}
