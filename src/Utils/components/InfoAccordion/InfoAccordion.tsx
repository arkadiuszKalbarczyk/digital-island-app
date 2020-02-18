import React, { Component } from "react";
import "./InfoAccordion.scss";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel
} from "react-accessible-accordion";

interface Props {}

class InfoAccordion extends Component<Props> {
  createAccordionItem() {
    return (
      <Accordion>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              What harsh truths do you prefer to ignore?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat
              occaecat ut occaecat consequat est minim minim esse tempor laborum
              consequat esse adipisicing eu reprehenderit enim.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    );
  }

  render() {
    return <div>{this.createAccordionItem()}</div>;
  }
}

export default InfoAccordion;
