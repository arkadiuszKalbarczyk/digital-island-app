import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./AdditionalInfo.scss";
import { AdditionalInformation } from "../../models";
interface Props {}

class AdditionalInfo extends Component<Props> {
  infoTiles: AdditionalInformation[] = [
    {
      title: "e-petitions",
      description:
        "Island.is has released an interface for petitions. This means that people can set up petitions and sign them electronically and securely. ",
      linkText:
        "Regulation about signature collection for requests for citizens referendums in the municipalities ",
      url: "/"
    },
    {
      title: "Did you know",
      description:
        "The Icelandic Naming committee maintains an official register of approved Icelandic given names and is the governing body of introduction of new given names into the culture of Iceland. Search for Icelandic names",
      linkText: "Search for Icelandic names",
      url: "/"
    },
    {
      title: "Weather",
      description: "3 / 3",
      linkText: "weather",
      url: "/"
    }
  ];

  createSection(infoTile: AdditionalInformation, index: number) {
    const { title, description, linkText, url } = infoTile;
    return (
      <section className="AdditionalInfo-tile" key={index}>
        <h3>{title}</h3>
        <p>{description}</p>
        <Link to={url}>{linkText}</Link>
      </section>
    );
  }
  render() {
    return (
      <article className="AdditionalInfo">
        {this.infoTiles.map((tile, i) => this.createSection(tile, i))}
      </article>
    );
  }
}
export default AdditionalInfo;
