import React, { Component } from "react";
import { Link } from "react-router-dom";
import { RouteLink } from "../../models";
// TODO: check if supports dynamic lang change
import i18n from "../../../i18n";

interface Props {
  links: RouteLink[];
}
class Navigation extends Component<Props> {
  render() {
    const Links = this.props.links.map((link, index) => (
      <li key={index}>
        <Link to={link.url}>{link.title}</Link>
      </li>
    ));

    return (
      <nav>
        <ul>{Links}</ul>
        {i18n.t("hi")}
      </nav>
    );
  }
}

export default Navigation;
