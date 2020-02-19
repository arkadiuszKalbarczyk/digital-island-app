import React, { Component } from "react";
import { i18n } from "i18next";

import LanguageSwitch from "../LanguageSwitch/LanguageSwitch";
import { NavElement } from "../../models";
import "./Navbar.scss";
import Logo from "../../../assets/icons/logo.png";
import Dropdown from "../Dropdown/Dropdown";
interface Props {
  navElements: NavElement[];
  i18n: i18n;
}

class Navigation extends Component<Props> {
  render() {
    const { i18n } = this.props;

    return (
      <header className="Navbar">
        <section className="Navbar-container">
          <img className="Navbar-icon" src={Logo} alt="Island logo" />

          <nav className="Navbar-links">
            <Dropdown navElements={this.props.navElements} />
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
