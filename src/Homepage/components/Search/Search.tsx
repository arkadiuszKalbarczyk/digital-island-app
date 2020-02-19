import React, { Component } from "react";

import "./Search.scss";
import IslandLogo from "../../../assets/icons/iceland-map.png";
import SearchAutosuggest from "./SearchAutosuggest/SearchAutosuggest";
import { TFunction } from "i18next";

interface Props {
  t: TFunction;
}
class Search extends Component<Props> {
  render() {
    const { t } = this.props;
    return (
      <section className="Search">
        <figure className="Search-country">
          <img src={IslandLogo} alt="map" />
        </figure>

        <section className="Search-container">
          <label className="Search-container-label">
            <h1 className="Search-label">{t("search")}</h1>
            <SearchAutosuggest t={t} />
          </label>

          <h2
            className="Search-label-subheader"
            dangerouslySetInnerHTML={{ __html: t("officialServices") }}
          ></h2>
        </section>

        <h2
          className="Search-popular"
          dangerouslySetInnerHTML={{ __html: t("popular") }}
        ></h2>
      </section>
    );
  }
}

export default Search;
