import axios from "axios";
import requests from "../lib/request";

//& axios instance for consuming api
export const instance = axios.create({
  baseURL: requests.baseURL,
});
