import React, { useEffect, useState } from "react";
import "./banner.css";
import { FaPlay } from "react-icons/fa";
import { GoInfo } from "react-icons/go";
import { BiPlusMedical } from "react-icons/bi";
import requests from "../../requests";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await fetch(
        `${requests.baseURL}${requests.fetchActionMovies}`
      ).then((res) => res.json());

      setMovie(
        request.results[Math.ceil(Math.random() * request.results.length - 1)]
      );

      return request;
    }
    fetchData();
  }, []);

  function shortened(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + " . . . " : str;
  }

  return (
    <div
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      {/* banner content */}
      <div className="banner__contents">
        {/* title */}
        <h1 className="banner__title">
          {movie?.title ||
            movie?.name ||
            movie?.original_name ||
            movie?.original_title}
        </h1>
        {/* description */}
        <h1 className="banner__overview">{shortened(movie?.overview, 100)}</h1>

        {/* div containing btns */}
        <div className="banner__btns">
          <button className="banner_btn">
            <FaPlay size="0.8rem" /> Play
          </button>
          <button className="banner_btn">
            <BiPlusMedical size="0.8rem" /> My List
          </button>
          <button className="banner_btn">
            <GoInfo size="1rem" /> More info
          </button>
        </div>
      </div>
      <div className="banner__fadeBottom"></div>
    </div>
  );
}

export default Banner;
