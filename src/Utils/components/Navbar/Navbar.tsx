import React, { Component } from "react";
import { Link } from "react-router-dom";
import { i18n } from "i18next";

import LanguageSwitch from "../LanguageSwitch/LanguageSwitch";
import { RouteLink } from "../../models";
import "./Navbar.scss";
import Logo from "../../../assets/icons/logo.png";

interface Props {
  links: RouteLink[];
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
    const { i18n } = this.props;
    const LinkElements = this.getLinkElements();

    return (
      <header className="Navbar">
        <section className="Navbar-container">
          <img className="Navbar-icon" src={Logo} alt="Island logo" />

          <nav className="Navbar-links">
            <ul>{LinkElements}</ul>
          </nav>

          <section className="Navbar-actions">
            <div>aA</div>
            <LanguageSwitch i18n={i18n}></LanguageSwitch>
            <div>My Pages</div>
          </section>
        </section>
      </header>
    );
  }
}
export default Navigation;
