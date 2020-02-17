import React, { Component } from "react";

import "./Jumbotron.scss";
import JumboTile from "../JumboTile/JumboTile";
import { Tile } from "../../models";

import progressVector from "../../../assets/icons/progress-vector.png";
import finances from "../../../assets/icons/finances.png";
import family from "../../../assets/icons/family.png";

interface Props {}
class Jumbotron extends Component<Props> {
  tiles: Tile[] = [
    {
      isFilled: true,
      industry: "business & industry",
      icon: progressVector,
      themeColor: "#00E4CA",
      title:
        "I want to <span style='color: #00E4CA'>start trading</span> with my business partners",
      links: [
        { url: "", title: "aax1" },
        { url: "", title: "aax2" },
        { url: "", title: "aax3" }
      ],
      actionLink: "/"
    },
    {
      isFilled: false
    },
    {
      isFilled: true,
      industry: "family",
      icon: family,
      title:
        "I want to move to Iceland with my <span style='color: #FFB5CC'>children</span>",
      themeColor: "#FFB5CC",
      links: [
        { url: "", title: "wax1" },
        { url: "", title: "wax2" },
        { url: "", title: "wax3" }
      ],
      actionLink: "/"
    },
    {
      isFilled: false
    },
    {
      isFilled: true,
      industry: "finances",
      icon: finances,
      themeColor: "#FFF066",
      title:
        "I have to <span style='color: #FFF066'>pay annual taxes</span> and I don’t know how to calculate them",
      links: [
        { url: "", title: "tax1" },
        { url: "", title: "tax2" },
        { url: "", title: "tax3" }
      ],
      actionLink: "/"
    },
    {
      isFilled: false
    }
  ];

  get renderTiles() {
    return this.tiles.map((tile, i) => {
      return (
        <JumboTile
          key={i}
          isFilled={tile.isFilled}
          industry={tile.industry}
          icon={tile.icon}
          title={tile.title}
          links={tile.links}
          actionLink={tile.actionLink}
          themeColor={tile.themeColor}
        />
      );
    });
  }

  render() {
    return (
      <section className="Jumbotron">
        <section className="Jumbotron-scrollable">
          {this.renderTiles}
          <div className="break"></div>
        </section>
      </section>
    );
  }
}

export default Jumbotron;
