import React, { useEffect, useState } from "react";
import axios from "./axios";
import requests from "./requests";
import "./banner.css";
import { FaPlay } from "react-icons/fa";
import { GoInfo } from "react-icons/go";
import { BiPlusMedical } from "react-icons/bi";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchActionMovies);
      setMovie(
        request.data.results[
          Math.ceil(Math.random() * request.data.results.length - 1)
        ]
      );
      //console.log(Math.ceil(Math.random() * (request.data.results.length - 1)));
      return request;
    }
    fetchData();
  }, []);

  //console.log(movie);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + " . . . " : str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      {" "}
      {/* -------------- background styles */}
      
      {/* title */}
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>

        {/* description */}
        <h1 className="banner__overview">{truncate(movie?.overview, 100)}</h1>

        {/* div containing two btns */}
        <div className="banner__btns">
    <button className="banner_btn"><FaPlay size="0.8rem"/>{" "}Play</button>
    <button className="banner_btn"><BiPlusMedical size="0.8rem"/>{" "}My List</button>
          <button className="banner_btn"><GoInfo size="1rem"/>{" "}More info</button>
        </div>

        
      </div>
      <div className="banner__fadeBottom"></div>
    </header>
  );
}

export default Banner;
