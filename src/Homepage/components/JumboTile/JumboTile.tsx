import React, { Component } from "react";

import "./JumboTile.scss";

interface Props {
  isFilled: boolean;
}
class JumboTile extends Component<Props> {
  isFilled() {
    return this.props.isFilled ? "JumboTile--filled" : "";
  }
  render() {
    return (
      <section
        className={`
          JumboTile ${this.isFilled()}
        `}
      ></section>
    );
  }
}

export default JumboTile;
