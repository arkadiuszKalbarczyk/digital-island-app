import React from "react";
import "./Homepage.scss";

import Jumbotron from "./components/Jumbotron/Jumbotron";
import Search from "./components/Search/Search";
import AdditionalInfo from "../Utils/components/AdditionalInfo/AdditionalInfo";
import { useTranslation } from "react-i18next";

const Homepage = () => {
  return (
    <article className="Homepage">
      <section>
        <Search t={useTranslation().t} />
      </section>

      <section>
        <Jumbotron />
      </section>

      <section>
        <AdditionalInfo />
      </section>
    </article>
  );
};

export default Homepage;
