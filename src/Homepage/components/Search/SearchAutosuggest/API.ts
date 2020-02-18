import axios from "../../../../Utils/API";
import { SearchComponentDto } from "./dto/SearchComponentDto";
import ComponentDto from "./dto/ComponentDto";

function searchComponentResults(
  searchComponentDto: SearchComponentDto
): Promise<ComponentDto[]> {
  return axios
    .post("/component/search", searchComponentDto)
    .then(res => res.data)
    .then(response => {
      if (response.length > 3) {
        // Get top 4 results and push 'show all'
        const filteredResults = response.filter((_, i) => i <= 3);
        filteredResults.push({
          title: `Show all (${response.length}) results`,
          component: `_search`
        });
        return filteredResults;
      }
      return response;
    });
}

/**
 * Looking for items containing phrase
 * @param {String} phrase
 */
export function quickSearch(phrase: string): Promise<ComponentDto[]> {
  return searchComponentResults({ phrase, noEnding: true });
}

/**
 * Looking for results with exact phrase
 * @param {String} phrase
 */
export function explicitSearch(phrase: string): Promise<ComponentDto[]> {
  return searchComponentResults({ phrase, noEnding: false });
}
