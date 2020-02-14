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
      <React.Fragment>
        <button onClick={() => i18n.changeLanguage("is")}>is</button>

        <button onClick={() => i18n.changeLanguage("en")}>en</button>

        <button onClick={() => i18n.changeLanguage("pl")}>pl</button>
      </React.Fragment>
    );
  }
}

export default LanguageSwitch;
