import React, { Component } from "react";
import { i18n } from "i18next";

interface Props {
  i18n: i18n;
}
class LanguageSwitch extends Component<Props> {
  render() {
    const { i18n } = this.props;
    // TODO: refactor to map over langs
    return (
      <select onChange={event => i18n.changeLanguage(event.target.value)}>
        <option value="is">IS</option>
        <option value="en">EN</option>
        <option value="pl">PL</option>
      </select>
    );
  }
}

export default LanguageSwitch;
