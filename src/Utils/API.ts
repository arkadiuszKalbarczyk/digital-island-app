import axios from "axios";

const baseURL = process.env.REACT_APP_BASE_URL;
if (!baseURL) {
  console.warn("env var missing!");
}

export default axios.create({
  baseURL,
  responseType: "json"
  // headers: { Authorization: '//' }
});
