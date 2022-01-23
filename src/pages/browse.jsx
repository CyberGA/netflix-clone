import React from "react";
import BrowseContainer from "../containers/browse";
import useContent from "../hooks/use-content";
import requests from "../lib/request";
import SelectionFIlter from "../lib/selection-filter";

export default function Browse() {
  const { Action } = useContent(`${requests.fetchActionMovies}`, "Action");
  const { Anime } = useContent(`${requests.fetchAnime}`, "Anime");
  const { Trending } = useContent(`${requests.fetchTrending}`, "Trending");
  const { Comedy } = useContent(`${requests.fetchComedyMovies}`, "Comedy");
  const { NetflixOriginals } = useContent(`${requests.fetchNetflixOriginals}`, "NetflixOriginals");
  const { TopRated } = useContent(`${requests.fetchTopRated}`, "TopRated");
  const { Crime } = useContent(`${requests.fetchCrime}`, "Crime");
  const { Horror } = useContent(`${requests.fetchHorrorMovies}`, "Horror");
  const { Romance } = useContent(`${requests.fetchRomance}`, "Romance");
  const { Documentaries } = useContent(`${requests.fetchDocumentaries}`, "Documentaries");

  const slides = SelectionFIlter({ Action, Anime, Trending, Comedy, NetflixOriginals, TopRated, Crime, Horror, Romance, Documentaries });

  return (
    <>
      <BrowseContainer slides={slides} />
    </>
  );
}
