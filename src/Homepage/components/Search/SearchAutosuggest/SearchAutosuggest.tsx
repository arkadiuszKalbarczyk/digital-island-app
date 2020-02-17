import React, { Component } from "react";
import Autosuggest from "react-autosuggest";
import AutosuggestHighlightMatch from "autosuggest-highlight/match";
import AutosuggestHighlightParse from "autosuggest-highlight/parse";

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
  constructor() {
    super({});

    this.state = {
      value: "",
      suggestions: []
    };
  }

  people = [
    {
      title: "Maternity",
      module: "aBrown"
    },
    {
      title: "Working permits",
      module: "aWhite",
      cta: "List of forms"
    },
    {
      title: "Taxes",
      module: "aJones"
    },
    {
      title: "Families",
      module: "aKing"
    }
  ];

  escapeRegexCharacters(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }

  getSuggestions(value) {
    const escapedValue = this.escapeRegexCharacters(value.trim());

    if (escapedValue === "") {
      return [];
    }

    const regex = new RegExp("\\b" + escapedValue, "i");

    return this.people.filter(person =>
      regex.test(this.getSuggestionValue(person))
    );
  }

  getSuggestionValue(suggestion) {
    return `${suggestion.title} ${suggestion.module}`;
  }

  renderSuggestion(suggestion, { query }) {
    const suggestionText = `${suggestion.title} ${suggestion.module}`;
    const matches = AutosuggestHighlightMatch(suggestionText, query);
    const parts = AutosuggestHighlightParse(suggestionText, matches);

    return (
      <span className="suggestion-content">
        <span className="name">
          {parts.map((part, index) => {
            const className = part.highlight ? "highlight" : undefined;

            return (
              <span className="suggestion">
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
    );
  }

  onChange = (event, { newValue, method }) => {
    this.setState({
      value: newValue
    });
  };

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: this.getSuggestions(value)
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
