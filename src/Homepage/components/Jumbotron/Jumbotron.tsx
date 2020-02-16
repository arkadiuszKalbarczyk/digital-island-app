import React, { Component } from "react";

import "./Jumbotron.scss";
import JumboTile from "../JumboTile/JumboTile";
import { Tile } from "../../models";

import progressVector from "../../../assets/icons/progress-vector.png";

interface Props {}
class Jumbotron extends Component<Props> {
  tiles: Tile[] = [
    {
      isFilled: true,
      industry: "industry",
      icon: progressVector,
      title: "test"
    },
    {
      isFilled: false
    },
    {
      isFilled: true,
      industry: "industry",
      icon: progressVector,
      title: "test"
    },
    {
      isFilled: false
    },
    {
      isFilled: true,
      industry: "industry",
      icon: progressVector,
      title: "test"
    },
    {
      isFilled: false
    }
  ];

  get renderTiles() {
    return this.tiles.map(tile => {
      return (
        <JumboTile
          isFilled={tile.isFilled}
          industry={tile.industry}
          icon={tile.icon}
          title={tile.title}
        />
      );
    });
  }

  render() {
    return <section className="Jumbotron">{this.renderTiles}</section>;
  }
}

export default Jumbotron;
