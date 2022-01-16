import React from "react";
import BrowseContainer from "../containers/browse";
import useContent from "../hooks/use-content";
import requests from "../lib/request";

export default function Browse() {
  // const { Action } = useContent(`${requests.fetchActionMovies}`, "Action");

  return (
    <>
      <BrowseContainer filter={"Action"} />
    </>
  );
}
