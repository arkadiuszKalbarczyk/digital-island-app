import React, { Component } from "react";
import InfoAccordion from "../../../InfoAccordion/InfoAccordion";
import { FooterSection } from "../../../../models";
interface Props {
  sections: FooterSection[];
}

class ColumnSectionSlider extends Component<Props> {
  render() {
    const { sections } = this.props;

    return (
      <article>
        <InfoAccordion sections={sections} />
      </article>
    );
  }
}

export default ColumnSectionSlider;
