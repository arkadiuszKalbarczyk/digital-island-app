import React, { Component } from "react";

import "./Search.scss";

interface Props {}
class Search extends Component<Props> {
  render() {
    return (
      <section className="Search">
        <label>
          search
          <input type="text" />
        </label>

        <p>some additional text</p>
      </section>
    );
  }
}

export default Search;
