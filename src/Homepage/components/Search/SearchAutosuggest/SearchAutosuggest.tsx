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
    },
    {
      title: "Families",
      module: "aKing"
    },
    {
      title: "Families",
      module: "aKsing"
    },
    {
      title: "Families",
      module: "aKifng"
    },
    {
      title: "Families",
      module: "aKiacng"
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

    let results = this.people.filter(person =>
      regex.test(this.getSuggestionValue(person))
    );

    if (results.length > 3) {
      // Get top 5 results and push 'show all'
      const filteredResults = results.filter((_, i) => i <= 3);
      filteredResults.push({
        title: `Show all (${results.length}) results`,
        module: `search`
      });
      return filteredResults;
    }
    return results;
  }

  getSuggestionValue(suggestion) {
    return `${suggestion.title} ${suggestion.module}`;
  }

  renderSuggestion(suggestion, { query }) {
    const suggestionText = `${suggestion.title} ${suggestion.module}`;
    const matches = AutosuggestHighlightMatch(suggestionText, query);
    const parts = AutosuggestHighlightParse(suggestionText, matches);

    return suggestion.module !== "search" ? (
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
