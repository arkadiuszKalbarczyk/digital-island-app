import React from "react";
import "./Homepage.scss";

import Jumbotron from "./components/Jumbotron/Jumbotron";
import Search from "./components/Search/Search";
import AdditionalInfo from "../Utils/components/AdditionalInfo/AdditionalInfo";

const Homepage = () => {
  return (
    <article className="Homepage">
      <section>
        <Search />
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
