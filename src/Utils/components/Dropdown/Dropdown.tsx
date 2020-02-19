import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Dropdown.scss";
import { NavElement, NavLink, RouteLink } from "../../models";

interface Props {
  navElements: NavElement[];
}
class Dropdown extends Component<Props> {
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
          <a href="#">
            {subLink.title}
            <label title="Toggle Drop-down" className="drop-icon" htmlFor="sm4">
              ▾
            </label>
          </a>
          <input type="checkbox" id="sm4" />
          <ul className="sub-menu">{this.renderLinks(subLink.links)}</ul>
        </li>
      );
    });
  }
  renderLinkHeaders() {
    return this.props.navElements.map((el, i) => {
      return (
        <li key={i}>
          <a href="#" className="title">
            {el.title}
            <label title="Toggle Drop-down" className="drop-icon" htmlFor="sm3">
              ▾
            </label>
          </a>
          <input type="checkbox" id="sm3" />
          <ul className="sub-menu">{this.renderSubLinks(el.navLinks)}</ul>
        </li>
      );
    });
  }
  render() {
    return (
      <div className="Dropdown">
        <nav id="menu">
          <label htmlFor="tm" id="toggle-menu">
            <div>
              <div className="ham-bar"></div>  
              <div className="ham-bar"></div>  
              <div className="ham-bar"></div>  
            </div>
          </label>
          <input type="checkbox" id="tm" />
          <ul className="main-menu cf">{this.renderLinkHeaders()}</ul>
        </nav>
      </div>
    );
  }
}

export default Dropdown;
