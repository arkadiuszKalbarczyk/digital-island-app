import React, { Component } from "react";
import "./Footer.scss";

import ColumnSection from "./components/ColumnSection/ColumnSection";
import ColumnCoatOfArms from "./components/ColumnCoatOfArms/ColumnCoatOfArms";

interface Props {}

class Footer extends Component<Props> {
  render() {
    return (
      <footer className="Footer">
        <article className="Footer-container">
          <ColumnCoatOfArms className="Footer-coat" />

          <nav className="Footer-links">
            <ColumnSection title="title" />

            <ColumnSection title="title2" />

            <ColumnSection title="title3" />
          </nav>
        </article>
      </footer>
    );
  }
}

export default Footer;
