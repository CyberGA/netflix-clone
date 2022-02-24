import React from "react";
import BrowseContainer from "../containers/browse";
import useContent from "../hooks/use-content";
import requests from "../lib/request";
import SelectionFilter from "../lib/selection-filter";
import { positions, Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import Trailer from "../context/trailer";

export default function Browse() {
  const options = {
    timeout: 5000,
    position: positions.BOTTOM_CENTER,
  };

  //& Variety of movies page
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

  const slides = SelectionFilter({ Action, Anime, Trending, Comedy, NetflixOriginals, TopRated, Crime, Horror, Romance, Documentaries });

  return (
    <Provider template={AlertTemplate} {...options}>
      <Trailer>
        <BrowseContainer slides={slides} />
      </Trailer>
    </Provider>
  );
}
