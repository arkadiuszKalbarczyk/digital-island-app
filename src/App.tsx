import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import "./App.css";

import Navbar from "./Utils/components/Navbar/Navbar";
import Homepage from "./Homepage/Homepage";
import MaternityHome from "./MaternityHome/MaternityHome";
import { RouteLink } from "./Utils/models";
import { useTranslation } from "react-i18next";

const App = () => {
  const links: RouteLink[] = [
    { url: "/", title: "home" },
    { url: "/maternity", title: "maternity" }
  ];

  const { t, i18n } = useTranslation();

  return (
    <React.Fragment>
      <Navbar links={links} t={t} i18n={i18n} />

      <main className="App">
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/maternity" component={MaternityHome} />
          <Route render={() => <Redirect to={{ pathname: "/" }} />} />
        </Switch>
      </main>
    </React.Fragment>
  );
};

export default App;
