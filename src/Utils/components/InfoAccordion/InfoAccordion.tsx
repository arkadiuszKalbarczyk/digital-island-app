import React, { Component } from "react";
import "./InfoAccordion.scss";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel
} from "react-accessible-accordion";
import { FooterSection, RouteLink } from "../../models";

interface Props {
  sections: FooterSection[];
}

class InfoAccordion extends Component<Props> {
  createAccordionItemPanels(links: RouteLink[]) {
    return links.map((link, index) => {
      return (
        <AccordionItemPanel key={index}>
          <p>{link.title}</p>
        </AccordionItemPanel>
      );
    });
  }
  createAccordionItem() {
    const { sections } = this.props;

    return sections.map((section, index) => {
      return (
        <AccordionItem key={index}>
          <AccordionItemHeading>
            <AccordionItemButton>{section.title}</AccordionItemButton>
          </AccordionItemHeading>

          {this.createAccordionItemPanels(section.links)}
        </AccordionItem>
      );
    });
  }

  render() {
    return <Accordion>{this.createAccordionItem()}</Accordion>;
  }
}

export default InfoAccordion;
