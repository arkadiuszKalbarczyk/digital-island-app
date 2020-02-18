import React, { Component } from "react";
import Autosuggest from "react-autosuggest";
import AutosuggestHighlightMatch from "autosuggest-highlight/match";
import AutosuggestHighlightParse from "autosuggest-highlight/parse";

import ComponentDto from "./dto/ComponentDto";

import { quickSearch } from "./API";

import "./SearchAutosuggest.scss";
interface SearchAutosuggestProps {}
interface SearchAutosuggestState {
  value;
  suggestions;
}

class SearchAutosuggest extends Component<
  SearchAutosuggestProps,
  SearchAutosuggestState
> {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
      suggestions: []
    };
  }

  results: ComponentDto[] = [];

  escapeRegexCharacters(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }

  getSuggestionValue(suggestion) {
    return `${suggestion.title} ${suggestion.component}`;
  }

  renderSuggestion(suggestion, { query }) {
    const suggestionText = suggestion.title;
    const matches = AutosuggestHighlightMatch(suggestionText, query);
    const parts = AutosuggestHighlightParse(suggestionText, matches);

    return suggestion.component !== "_search" ? (
      <span className="suggestion-content">
        <span className="name">
          {parts.map((part, index) => {
            const className = part.highlight ? "highlight" : undefined;

            return (
              <span className="suggestion" key={index}>
                <span className={className} key={index}>
                  {part.text}
                </span>
              </span>
            );
          })}
        </span>
        {suggestion.cta ? (
          <span className="suggestion-content__cta">{suggestion.cta}</span>
        ) : (
          ""
        )}
      </span>
    ) : (
      <span className="suggestion-content suggestion-content__show_more">
        <span className="name">
          <span className="suggestion link-color">
            <span>{suggestion.title}</span>
          </span>
        </span>
      </span>
    );
  }

  onChange = (event, { newValue, method }) => {
    this.setState({
      value: newValue
    });
  };

  onSuggestionsFetchRequested = ({ value }) => {
    const escapedValue = this.escapeRegexCharacters(value.trim());

    if (escapedValue === "" || escapedValue.length < 3) {
      this.setState({
        suggestions: []
      });
      return;
    }
    return quickSearch(value).then(response => {
      this.setState({
        suggestions: response
      });
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  render() {
    const { value, suggestions } = this.state;
    const inputProps = {
      placeholder: "f.i. families, working permits, taxes",
      value,
      onChange: this.onChange
    };

    return (
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={this.getSuggestionValue}
        renderSuggestion={this.renderSuggestion}
        inputProps={inputProps}
      />
    );
  }
}

export default SearchAutosuggest;
