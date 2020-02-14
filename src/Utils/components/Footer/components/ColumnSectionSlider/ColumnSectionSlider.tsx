import React, { Component } from "react";

interface Props {
  title: string;
}

class ColumnSectionSlider extends Component<Props> {
  render() {
    const { title } = this.props;

    return (
      <section className="ColumnSection">
        <h3>{title} \/</h3>
      </section>
    );
  }
}

export default ColumnSectionSlider;
