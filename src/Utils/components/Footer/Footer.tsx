import React, { Component } from "react";
import "./Footer.scss";

import ColumnSection from "./components/ColumnSection/ColumnSection";
import ColumnCoatOfArms from "./components/ColumnCoatOfArms/ColumnCoatOfArms";
import ColumnSectionSlider from "./components/ColumnSectionSlider/ColumnSectionSlider";
import { FooterSection } from "../../models";

interface Props {}

class Footer extends Component<Props> {
  sections: FooterSection[] = [
    {
      title: "Public services",
      links: [
        { title: "Business & industry", url: "/" },
        { title: "Consumer issues", url: "/" },
        { title: "Disabled", url: "/" },
        { title: "Education & Society", url: "/" },
        { title: "Family", url: "/" },
        { title: "Finance", url: "/" },
        { title: "Health", url: "/" },
        { title: "Homes & housing", url: "/" },
        { title: "Immigrants", url: "/" },
        { title: "Senior years", url: "/" },
        { title: "Travel & transport", url: "/" }
      ]
    },
    {
      title: "Governments",
      links: [
        { title: "Consultations", url: "/" },
        { title: "Open data", url: "/" },
        { title: "E-petitions", url: "/" },
        { title: "Healthcare", url: "/" },
        { title: "Indentification services", url: "/" },
        { title: "Citizens e-Referendum", url: "/" },
        { title: "Domains", url: "/" }
      ]
    },
    {
      title: "Contact",
      links: [
        { title: "Borgartun 21 104 Reykjavik" },
        { title: "+354 515-5300" },
        { title: "island@island.is", url: "/" },
        { title: "facebook", url: "/" }
      ]
    }
  ];
  render() {
    return (
      <footer className="Footer">
        <article className="Footer-container">
          <ColumnCoatOfArms className="Footer-coat" />

          <nav className="Footer-links Footer-not-mobile">
            {this.sections.map((section, index) => (
              <ColumnSection key={index} section={section} />
            ))}
          </nav>

          <nav className="Footer-mobile">
            <ColumnSectionSlider sections={this.sections} />
          </nav>
        </article>
      </footer>
    );
  }
}

export default Footer;
