import gql from "graphql-tag";
export const GET_SEARCH_RESULTS = gql`
  query($lang: String!, $phrase: String!) {
    search(lang: $lang, phrase: $phrase, noEnding: true) {
      title
      component
    }
  }
`;
