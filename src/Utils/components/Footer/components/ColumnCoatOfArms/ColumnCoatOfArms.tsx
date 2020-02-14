import React, { Component } from "react";

interface Props {
  className: string;
}

class ColumnCoatOfArms extends Component<Props> {
  render() {
    return (
      <figure className={this.props.className}>
        <p>text</p>
        <p> img </p>
      </figure>
    );
  }
}

export default ColumnCoatOfArms;
