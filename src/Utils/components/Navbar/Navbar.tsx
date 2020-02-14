import React, { Component } from "react";
import { Link } from "react-router-dom";
import { TFunction, i18n } from "i18next";

import LanguageSwitch from "../LanguageSwitch/LanguageSwitch";
import { RouteLink } from "../../models";
import "./Navbar.scss";

interface Props {
  links: RouteLink[];
  t: TFunction;
  i18n: i18n;
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
    const { t, i18n } = this.props;
    const LinkElements = this.getLinkElements();

    return (
      <header className="Navbar">
        <section className="Navbar-container">
          <nav>
            <LanguageSwitch i18n={i18n}></LanguageSwitch>

            <ul>{LinkElements}</ul>
            {t("hi")}
          </nav>
        </section>
      </header>
    );
  }
}
export default Navigation;
