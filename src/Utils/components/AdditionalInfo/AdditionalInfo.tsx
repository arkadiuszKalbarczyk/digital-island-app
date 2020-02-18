import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./AdditionalInfo.scss";
import { AdditionalInformation } from "../../models";
import WeatherInfo from "../WeatherInfo/WeatherInfo";

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
        "The Icelandic Naming committee maintains an official register of approved Icelandic given names and is the governing body of introduction of new given names into the culture of Iceland.",
      linkText: "SEARCH FOR ICELANDING NAMES",
      url: "/"
    }
  ];

  createSection(infoTile: AdditionalInformation, index: number) {
    const { title, description, linkText, url } = infoTile;

    return (
      <section className="AdditionalInfo-tile" key={index}>
        <h2>{title}</h2>
        <p className="AdditionalInfo-text">{description}</p>
        <Link to={url}>{linkText}</Link>
      </section>
    );
  }

  render() {
    return (
      <article className="AdditionalInfo">
        {this.infoTiles.map((tile, i) => this.createSection(tile, i))}

        {/* <div className="break-flex "></div> */}
        <section className="AdditionalInfo-tile weather-tile">
          <WeatherInfo />
        </section>
      </article>
    );
  }
}
export default AdditionalInfo;
