import React from "react";
import SlideRoutes from "react-slide-routes";
import { Route, Switch, useLocation } from "react-router-dom";

import "./global.css";

import Home from "./pages/Home/Home";
import Contacts from "./pages/Contact/Contacts";
import Projects from "./pages/Projects/Projects";

const App = () => {
  const location = useLocation();
  return (
    <>
      <SlideRoutes
        location={location}
        duration={500}
        pathList={["/", "/contacts"]}
      >
        <Route path="/" component={Home} exact />
        <Route path="/projects" component={Projects} />
        <Route path="/contacts" component={Contacts} />
      </SlideRoutes>
    </>
  );
};

export default App;
