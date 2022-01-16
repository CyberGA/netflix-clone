import { useState, useEffect } from "react";
import requests from "./../lib/request";

export default function useContent(target, name) {
  const [content, setContent] = useState([]);

  useEffect(() => {
    const fetchData = async () =>
      await fetch(`${requests.baseURL}${target}`)
        .then((res) => res.json())
        .then(({ results }) => {
          setContent((content) => results);
        })
        .catch((err) => console.log(err.message));

    fetchData();
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { [name]: content };
}
