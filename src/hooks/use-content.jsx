import { useState, useEffect } from "react";
import { instance } from "../service/axios";
import requests from "./../lib/request";

export default function useContent(target, name) {
  const [content, setContent] = useState([]);

  useEffect(() => {
    async function fetchData() {
      await instance
        .get(`${requests.baseURL}${target}`)
        .then((res) => {
          setContent((content) => res.data.results);
        })
        .catch((err) => console.log(err.message));
    }

    fetchData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { [name]: content };
}
