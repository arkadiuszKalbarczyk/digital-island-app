import React, { Component } from "react";
import "./Footer.scss";

import ColumnSection from "./components/ColumnSection/ColumnSection";
import ColumnCoatOfArms from "./components/ColumnCoatOfArms/ColumnCoatOfArms";
import ColumnSectionSlider from "./components/ColumnSectionSlider/ColumnSectionSlider";
import InfoAccordion from "../InfoAccordion/InfoAccordion";

interface Props {}

class Footer extends Component<Props> {
  render() {
    return (
      <footer className="Footer">
        <article className="Footer-container">
          <ColumnCoatOfArms className="Footer-coat" />

          <nav className="Footer-links Footer-not-mobile">
            <ColumnSection title="Public services" />

            <ColumnSection title="Governments" />

            <ColumnSection title="Contact" />
          </nav>

          <nav className="Footer-mobile">
            <ColumnSectionSlider title="Public services" />
            <ColumnSectionSlider title="Governments" />
            <ColumnSectionSlider title="Contact" />
          </nav>
        </article>
      </footer>
    );
  }
}

export default Footer;

/**
 * 
        <article>
          <InfoAccordion />
        </article>
 */
