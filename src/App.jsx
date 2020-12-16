import React from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";
import Row from "./components/Row/Row";
import requests from "./requests";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Row
          title="NETFLIX ORIGINALS"
          fetchUrl={requests.fetchNetflixOriginals}
          isLargeRow
        id="net_0rig"/>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} id="trend__now"/>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} id="top__rate"/>
      <Row title="Crime" fetchUrl={requests.fetchCrime} id="crime"/>
      <Row title="Anime" fetchUrl={requests.fetchAnime} id="anime"/>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} id="action__movie"/>
      <Row title="Comedies" fetchUrl={requests.fetchComedyMovies} id="comedy"/>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} id="horror"/>
      <Row title="Romance" fetchUrl={requests.fetchRomance} id="romance"/>
      <Row title="Tv Movie" fetchUrl={requests.fetchTvMovie} id="tv__movie"/>
    </div>
  );
};

export default App;
