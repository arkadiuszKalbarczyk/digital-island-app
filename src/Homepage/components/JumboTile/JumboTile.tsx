import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./JumboTile.scss";
import { Tile } from "../../models";

class JumboTile extends Component<Tile> {
  isFilled() {
    return this.props.isFilled ? "JumboTile--filled" : "";
  }

  get iconElement() {
    const { icon } = this.props;
    return icon ? (
      <img className="JumboTile-icon" src={icon} alt="progress icon" />
    ) : (
      ""
    );
  }

  get titleElement() {
    const { title } = this.props;
    return title ? <h3>{title}</h3> : "";
  }

  get industry() {
    const { industry } = this.props;
    return industry ? (
      <span className="JumboTile-industry">{industry}</span>
    ) : (
      ""
    );
  }

  get links() {
    const { links } = this.props;
    const renderLinks = links =>
      links.map((link, index) => (
        <li key={index}>
          <Link to={link.url}>
            {link.title}
            {index}
          </Link>
        </li>
      ));

    return links && links.length ? <ul>{renderLinks(links)}</ul> : "";
  }

  get actionElement() {
    const { actionLink } = this.props;
    return actionLink ? <button>btn</button> : "";
  }

  render() {
    return (
      <section
        className={`
          JumboTile ${this.isFilled()}
        `}
      >
        {this.industry}

        {this.iconElement}

        {this.titleElement}

        {this.links}

        {this.actionElement}
      </section>
    );
  }
}

export default JumboTile;

/*
    const renderLinks = links =>
      links.map((link,i) => <li key={i}><Link to={link.url}>{link.title}</Link></li>);
*/
