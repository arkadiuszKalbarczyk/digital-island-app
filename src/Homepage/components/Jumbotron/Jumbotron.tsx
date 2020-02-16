import React, { Component } from "react";

import "./Jumbotron.scss";
import JumboTile from "../JumboTile/JumboTile";

interface Props {}
class Jumbotron extends Component<Props> {
  render() {
    return (
      <section className="Jumbotron">
        <JumboTile isFilled={true} />
        <JumboTile isFilled={false} />
        <JumboTile isFilled={true} />
        <JumboTile isFilled={false} />
        <JumboTile isFilled={true} />
        <JumboTile isFilled={false} />
      </section>
    );
  }
}

export default Jumbotron;
