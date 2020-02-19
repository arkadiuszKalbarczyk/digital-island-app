import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import "./App.scss";

import Navbar from "./Utils/components/Navbar/Navbar";
import Footer from "./Utils/components/Footer/Footer";
import Homepage from "./Homepage/Homepage";
import MaternityHome from "./MaternityHome/MaternityHome";
import { NavElement } from "./Utils/models";
import { useTranslation } from "react-i18next";

const App = () => {
  const { i18n, t } = useTranslation();

  const navElements: NavElement[] = [
    {
      navLinks: [{ title: "linkCont", links: [{ title: "link", url: "/" }] }],
      title: "Start"
    },
    {
      navLinks: [
        {
          title: "linkCont2",
          links: [
            { title: "link2", url: "/" },
            { title: "link222", url: "/" },
            { title: "link3332", url: "/" }
          ]
        },
        {
          title: "linkCont2deep",
          links: [{ title: "link2", url: "/" }]
        },
        {
          title: "linkCont222deep",
          links: [{ title: "link2", url: "/" }, { title: "link222", url: "/" }]
        }
      ],
      title: "Public services"
    },
    {
      navLinks: [{ title: "linkCont3", links: [{ title: "link3", url: "/" }] }],
      title: "Health"
    },
    {
      navLinks: [{ title: "linkCont4", links: [{ title: "link4", url: "/" }] }],
      title: "Open data"
    },
    {
      navLinks: [{ title: "linkCont5", links: [{ title: "link5", url: "/" }] }],
      title: "E-petitions"
    }
  ];

  return (
    <React.Fragment>
      <Navbar navElements={navElements} i18n={i18n} />

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
