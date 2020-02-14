import React, { Component } from "react";

import "./AdditionalInfo.scss";

interface Props {}

class AdditionalInfo extends Component<Props> {
  createSection() {
    return <section className="AdditionalInfo-tile">tiles</section>;
  }
  render() {
    return (
      <article className="AdditionalInfo">
        {this.createSection()}
        {this.createSection()}
        {this.createSection()}
      </article>
    );
  }
}
export default AdditionalInfo;
