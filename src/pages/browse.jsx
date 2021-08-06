import React from "react";
import useContent from "../hooks/use-content";
import requests from "../lib/request";

export default function Browse() {
  const { Action } = useContent(`${requests.fetchActionMovies}`, "Action");
  const { Trending } = useContent(`${requests.fetchTrending}`, "Trending");
  console.log("Action:", Action);
  console.log("Trending:", Trending);

  return <p>Thi is is the browse page</p>;
}
