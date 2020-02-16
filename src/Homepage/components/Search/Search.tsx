import React, { Component } from "react";

import "./Search.scss";

interface Props {}
class Search extends Component<Props> {
  render() {
    return (
      <section className="Search">
        <section className="Search-container">
          <label>
            <h3 className="Search-label">Search for</h3>
            <input type="text" />
          </label>
          <p>offical Iceland’s government services and information</p>
        </section>

        <p className="Search-popular">Popular on island.is</p>
      </section>
    );
  }
}

export default Search;
