import React, { Component } from "react";
import "./Dropdown.scss";

interface Props {}
class Dropdown extends Component<Props> {
  render() {
    return (
      <div className="Dropdown-test">
        <nav id="menu">
          <label htmlFor="tm" id="toggle-menu">
            Navigation <span className="drop-icon">▾</span>
          </label>
          <input type="checkbox" id="tm" />
          <ul className="main-menu cf">
            <li>
              <a href="#" className="title">
                Multiple Levels
                <span className="drop-icon">▾</span>
                <label
                  title="Toggle Drop-down"
                  className="drop-icon"
                  htmlFor="sm3"
                >
                  ▾
                </label>
              </a>
              <input type="checkbox" id="sm3" />
              <ul className="sub-menu">
                <li>
                  <a href="">
                    3.1
                    <span className="drop-icon">▸</span>
                    <label
                      title="Toggle Drop-down"
                      className="drop-icon"
                      htmlFor="sm4"
                    >
                      ▾
                    </label>
                  </a>
                  <input type="checkbox" id="sm4" />
                  <ul className="sub-menu">
                    <li>
                      <a href="">3.1.1</a>
                    </li>
                    <li>
                      <a href="">3.1.2</a>
                    </li>
                    <li>
                      <a href="">3.1.3</a>
                    </li>
                    <li>
                      <a href="">3.1.4</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="">
                    3.2
                    <span className="drop-icon">▸</span>
                    <label
                      title="Toggle Drop-down"
                      className="drop-icon"
                      htmlFor="sm5"
                    >
                      ▾
                    </label>
                  </a>
                  <input type="checkbox" id="sm5" />
                  <ul className="sub-menu">
                    <li>
                      <a href="">3.2.1</a>
                    </li>
                    <li>
                      <a href="">3.2.2</a>
                    </li>
                    <li>
                      <a href="">3.2.3</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="">
                    3.3
                    <span className="drop-icon">▸</span>
                    <label
                      title="Toggle Drop-down"
                      className="drop-icon"
                      htmlFor="sm6"
                    >
                      ▾
                    </label>
                  </a>
                  <input type="checkbox" name="sm6" id="sm6" />
                  <ul className="sub-menu">
                    <li>
                      <a href="">3.3.1</a>
                    </li>
                    <li>
                      <a href="">3.3.2</a>
                    </li>
                    <li>
                      <a href="">3.2.2</a>
                    </li>
                    <li>
                      <a href="">3.3.4</a>
                    </li>
                    <li>
                      <a href="">3.3.5</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Dropdown;
