import React, { Component } from "react";

import "./Search.scss";
import IslandLogo from "../../../assets/icons/iceland-map.png";
interface Props {}
class Search extends Component<Props> {
  render() {
    return (
      <section className="Search">
        <figure className="Search-country">
          <img src={IslandLogo} alt="map" />
        </figure>

        <section className="Search-container">
          <label>
            <h1 className="Search-label">Search for</h1>
            <input type="text" />
          </label>

          <h2 className="Search-label-subheader">
            offical Iceland’s government <br /> services and information
          </h2>
        </section>

        <h2 className="Search-popular">
          <span>Popular</span> on island.is
        </h2>
      </section>
    );
  }
}

export default Search;
