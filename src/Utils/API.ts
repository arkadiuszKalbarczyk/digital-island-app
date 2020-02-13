import axios from "axios";
const url = "temp/url";

export default axios.create({
  baseURL: url,
  responseType: "json"
});
