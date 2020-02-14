import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./ColumnSection.scss";

interface Props {
  title: string;
}

class ColumnSection extends Component<Props> {
  render() {
    const { title } = this.props;

    return (
      <section className="ColumnSection">
        <h3>{title}</h3>
        <ul className="ColumnSection-container">
          <li>
            <Link to="/" className="ColumnSection-link">
              temp
            </Link>
          </li>
        </ul>
      </section>
    );
  }
}

export default ColumnSection;
