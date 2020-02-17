import React, { Component } from "react";
import CoatOfArm from "../../../../../assets/icons/emblem.png";
import "./ColumnCoatOfArms.scss";

interface Props {
  className: string;
}

class ColumnCoatOfArms extends Component<Props> {
  render() {
    return (
      <figure className={this.props.className}>
        <img
          className="ColumnCoatOfArms-logo"
          src={CoatOfArm}
          alt="coat of arms"
        />
      </figure>
    );
  }
}

export default ColumnCoatOfArms;
