import React, { Component } from "react";

import "./Search.scss";
import IslandLogo from "../../../assets/icons/iceland-map.png";
import SearchAutosuggest from "./SearchAutosuggest/SearchAutosuggest";
interface Props {}
class Search extends Component<Props> {
  render() {
    return (
      <section className="Search">
        <figure className="Search-country">
          <img src={IslandLogo} alt="map" />
        </figure>

        <section className="Search-container">
          <label className="Search-container-label">
            <h1 className="Search-label">Search for</h1>
            <SearchAutosuggest />
          </label>

          <h2 className="Search-label-subheader">
            offical Iceland’s government <br /> services and information
          </h2>
        </section>

        <h3 className="Search-popular">Popular on island.is</h3>
      </section>
    );
  }
}

export default Search;
