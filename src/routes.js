import React from "react";
import { Home, About, Contact, Work } from "./pages";
import { BrowserRouter as Router, Redirect, Switch } from "react-router-dom";
import { Routes } from "./helpers/routes";
import * as ROUTES from "./constant/route";

export default function PageRoutes() {
  return (
    <Router>
      <Switch>
        <Routes exact path={ROUTES.HOME}>
          <Home />
        </Routes>
        <Routes path={ROUTES.ABOUT}>
          <About />
        </Routes>
        <Routes path={ROUTES.WORK}>
          <Work />
        </Routes>
        <Routes path={ROUTES.CONTACT}>
          <Contact />
        </Routes>
        <Redirect from="/home" to={ROUTES.HOME} />
      </Switch>
    </Router>
  );
}
