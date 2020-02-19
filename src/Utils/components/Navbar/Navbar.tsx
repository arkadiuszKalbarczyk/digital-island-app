import React, { Component } from "react";
import { i18n } from "i18next";
import { Link } from "react-router-dom";

import LanguageSwitch from "../LanguageSwitch/LanguageSwitch";
import { NavElement } from "../../models";
import "./Navbar.scss";
import Logo from "../../../assets/icons/logo.png";
import Eye from "../../../assets/icons/eye.png";
import Lock from "../../../assets/icons/lock.png";
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
          <Link to={"/"}>
            <img className="Navbar-icon" src={Logo} alt="Island logo" />
          </Link>
          <nav className="Navbar-links">
            <Dropdown navElements={this.props.navElements} />
          </nav>

          <section className="Navbar-actions">
            <div>
              <img src={Eye} alt="Font size change eye" />
              <span className="Navbar--small-font">A</span>A
            </div>
            <LanguageSwitch i18n={i18n}></LanguageSwitch>
            <div>
              <img src={Lock} alt="My pages lock" />
              My Pages
            </div>
          </section>
        </section>
      </header>
    );
  }
}
export default Navigation;
