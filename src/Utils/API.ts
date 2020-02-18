import axios from "axios";
import i18n from "./../i18n";

const baseURL = process.env.REACT_APP_BASE_URL;
if (!baseURL) {
  console.warn("env var missing!");
}

export default axios.create({
  baseURL,
  responseType: "json",
  headers: {
    lang: i18n.language
  }
});
