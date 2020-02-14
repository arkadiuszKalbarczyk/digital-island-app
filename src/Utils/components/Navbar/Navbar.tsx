import React, { Component } from "react";
import { Link } from "react-router-dom";
import { TFunction } from "i18next";

import { RouteLink } from "../../models";
// TODO: check if supports dynamic lang change

interface Props {
  links: RouteLink[];
  t: TFunction;
}

class Navigation extends Component<Props> {
  getLinkElements() {
    return this.props.links.map((link, index) => (
      <li key={index}>
        <Link to={link.url}>{link.title}</Link>
      </li>
    ));
  }

  render() {
    const t = this.props.t;
    const Links = this.getLinkElements();

    return (
      <nav>
        <ul>{Links}</ul>
        {t("hi")}
      </nav>
    );
  }
}
export default Navigation;
