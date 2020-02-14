import React from "react";
import "./Homepage.scss";

import Jumbotron from "./components/Jumbotron/Jumbotron";

const Homepage = () => {
  return (
    <article className="Homepage">
      <section>search</section>

      <section>
        <Jumbotron />
      </section>

      <section>info</section>
    </article>
  );
};

export default Homepage;
