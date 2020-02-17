import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import "./App.scss";

import Navbar from "./Utils/components/Navbar/Navbar";
import Footer from "./Utils/components/Footer/Footer";
import Homepage from "./Homepage/Homepage";
import MaternityHome from "./MaternityHome/MaternityHome";
import { RouteLink } from "./Utils/models";
import { useTranslation } from "react-i18next";

const App = () => {
  const links: RouteLink[] = [
    { url: "/", title: "Start" },
    { url: "/maternity", title: "Public services" },
    { url: "/", title: "Health" },
    { url: "/", title: "Open data" },
    { url: "/", title: "E-petitions" }
  ];

  const { i18n } = useTranslation();

  return (
    <React.Fragment>
      <Navbar links={links} i18n={i18n} />

      <main className="App">
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/maternity" component={MaternityHome} />
          <Route render={() => <Redirect to={{ pathname: "/" }} />} />
        </Switch>
      </main>

      <Footer />
    </React.Fragment>
  );
};

export default App;
