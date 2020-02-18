import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./ColumnSection.scss";
import { FooterSection, RouteLink } from "../../../../models";

interface Props {
  section: FooterSection;
}

class ColumnSection extends Component<Props> {
  createLinks(links: RouteLink[]) {
    return links.map((link, index) => {
      return (
        <li key={index}>
          {link.url ? (
            <Link to={link.url} className="ColumnSection-link">
              {link.title}
            </Link>
          ) : (
            link.title
          )}
        </li>
      );
    });
  }

  render() {
    const { section } = this.props;

    return (
      <section className="ColumnSection">
        <h3>{section.title}</h3>
        <ul className="ColumnSection-container">
          {this.createLinks(section.links)}
        </ul>
      </section>
    );
  }
}

export default ColumnSection;
