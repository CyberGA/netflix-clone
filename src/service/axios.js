import axios from "axios";
import requests from "../lib/request";

export const instance = axios.create({
  baseURL: requests.baseURL,
});
