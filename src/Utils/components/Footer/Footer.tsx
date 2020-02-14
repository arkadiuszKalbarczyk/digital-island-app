import React, { Component } from "react";
import "./Footer.scss";

import ColumnSection from "./components/ColumnSection/ColumnSection";
interface Props {}

class Footer extends Component<Props> {
  render() {
    return (
      <footer className="Footer">
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
