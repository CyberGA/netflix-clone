import { useState, useEffect } from "react";
import requests from "./../lib/request";

export default function useContent(target, name) {
  const [content, setContent] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await fetch(`${requests.baseURL}${target}`)
        .then((res) => res.json())
        .catch((err) => console.log(err.message));

      setContent(request.results);

      return request;
    }
    fetchData();
  }, [target]);

  return { [name]: content };
}
