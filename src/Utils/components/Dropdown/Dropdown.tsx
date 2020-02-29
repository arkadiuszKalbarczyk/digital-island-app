import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Dropdown.scss";
import { NavElement, NavLink, RouteLink } from "../../models";

interface Props {
  navElements: NavElement[];
}
class Dropdown extends Component<Props> {
  collapsed = false;
  renderLinks(links: RouteLink[]) {
    return links.map((l, i) => {
      return (
        <Link key={i} to={l.url}>
          {l.title}
        </Link>
      );
    });
  }
  renderSubLinks(navLinks: NavLink[]) {
    return navLinks.map((subLink, i) => {
      return (
        <li key={i}>
          <Link to={"/"}>
            {subLink.title}{" "}
            <label
              title="Toggle Drop-down"
              className="drop-icon"
              htmlFor={"sm" + i}
            >
              ▾
            </label>
          </Link>
          <input type="checkbox" id={"sm" + i} />
          <ul className="sub-menu">{this.renderLinks(subLink.links)}</ul>
        </li>
      );
    });
  }
  renderLinkHeaders() {
    return this.props.navElements.map((el, i) => {
      return (
        <li key={i}>
          <Link className="title" to={"/"}>
            {el.title}
            <label
              title="Toggle Drop-down"
              className="drop-icon"
              htmlFor={"lh" + i}
            >
              ▾
            </label>
          </Link>
          <input type="checkbox" id={"lh" + i} />
          <ul className="sub-menu">{this.renderSubLinks(el.navLinks)}</ul>
        </li>
      );
    });
  }
  changeActiveStatus(e) {
    e.preventDefault();
    document.getElementsByClassName("Dropdown")[0].className =
      document
        .getElementsByClassName("Dropdown")[0]
        .className.indexOf("collapsed") > -1
        ? "Dropdown"
        : "Dropdown collapsed";
  }
  prevent(e) {
    e.preventDefault();
    e.stopPropagation();
  }
  render() {
    return (
      <div className="Dropdown" onClick={this.changeActiveStatus}>
        <nav id="menu">
          <label htmlFor="tm" id="toggle-menu">
            <div>
              <div className="ham-bar"></div>
              <div className="ham-bar"></div>
              <div className="ham-bar"></div>
            </div>
          </label>
          <input type="checkbox" id="tm" />
          <ul className="main-menu cf" onClick={this.prevent}>
            {this.renderLinkHeaders()}
          </ul>
        </nav>
      </div>
    );
  }
}

export default Dropdown;
