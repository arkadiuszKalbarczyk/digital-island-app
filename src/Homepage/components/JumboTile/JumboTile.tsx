import React, { Component } from "react";

import "./JumboTile.scss";
import { Tile } from "../../models";

class JumboTile extends Component<Tile> {
  isFilled() {
    return this.props.isFilled ? "JumboTile--filled" : "";
  }

  get iconElement() {
    const { icon } = this.props;
    return icon ? <img src={icon} alt="progress icon" /> : "";
  }

  get titleElement() {
    const { title } = this.props;
    return title ? <h3>{title}</h3> : "";
  }

  get industry() {
    const { industry } = this.props;
    return industry ? <span>{industry}</span> : "";
  }

  render() {
    return (
      <section
        className={`
          JumboTile ${this.isFilled()}
        `}
      >
        {this.industry}

        {this.iconElement}

        {this.titleElement}
      </section>
    );
  }
}

export default JumboTile;
