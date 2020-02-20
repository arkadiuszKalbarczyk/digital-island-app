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
  const { i18n } = useTranslation();

  const navElements: NavElement[] = [
    {
      navLinks: [{ title: "linkCont", links: [{ title: "link", url: "/" }] }],
      title: "Start"
    },
    {
      navLinks: [
        {
          title: "Business & industry",
          links: [
            { title: "link2", url: "/" },
            { title: "link222", url: "/" },
            { title: "link3332", url: "/" }
          ]
        },
        {
          title: "Consumer issues",
          links: [{ title: "link2", url: "/" }]
        },
        {
          title: "Disabled",
          links: [{ title: "link2", url: "/" }, { title: "link222", url: "/" }]
        },
        {
          title: "Education & Society",
          links: [{ title: "link2", url: "/" }, { title: "link222", url: "/" }]
        },
        {
          title: "Family",
          links: [
            { title: "All types of families", url: "/" },
            { title: "Children and youth", url: "/" },
            { title: "Day-care Centres", url: "/" },
            { title: "End of life", url: "/" },
            { title: "Having a baby", url: "/" },
            { title: "Adoption", url: "/" },
            { title: "Child benefits", url: "/" },
            { title: "Considerations during pregnancy", url: "/" },
            { title: "Infertility/artificial insemination", url: "/" },
            {
              title: "Maternity/paternity leave and parental leave",
              url: "/maternity"
            },
            { title: "Name giving", url: "/" },
            { title: "Paternity", url: "/" },
            { title: "Pregnancy and childbirth", url: "/" },
            { title: "Students with children", url: "/" },
            { title: "Marriage and partners", url: "/" }
          ]
        },
        {
          title: "Finance",
          links: [{ title: "link2", url: "/" }, { title: "link222", url: "/" }]
        },
        {
          title: "Health",
          links: [{ title: "link2", url: "/" }, { title: "link222", url: "/" }]
        },
        {
          title: "Finance",
          links: [{ title: "link2", url: "/" }, { title: "link222", url: "/" }]
        },
        {
          title: "Health",
          links: [{ title: "link2", url: "/" }, { title: "link222", url: "/" }]
        },
        {
          title: "Homes & housing",
          links: [{ title: "link2", url: "/" }, { title: "link222", url: "/" }]
        },
        {
          title: "Immigrants",
          links: [{ title: "link2", url: "/" }, { title: "link222", url: "/" }]
        },
        {
          title: "Senior years",
          links: [{ title: "link2", url: "/" }, { title: "link222", url: "/" }]
        },
        {
          title: "Travel & transport",
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
