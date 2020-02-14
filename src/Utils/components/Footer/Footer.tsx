import React, { Component } from "react";
import "./Footer.scss";

import ColumnSection from "./components/ColumnSection/ColumnSection";
import ColumnCoatOfArms from "./components/ColumnCoatOfArms/ColumnCoatOfArms";

interface Props {}

class Footer extends Component<Props> {
  render() {
    return (
      <footer className="Footer">
        <ColumnCoatOfArms />

        <nav>
          <ColumnSection title="title" />

          <ColumnSection title="title2" />

          <ColumnSection title="title3" />
        </nav>
      </footer>
    );
  }
}

export default Footer;
