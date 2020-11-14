import React, { useEffect, useState } from "react";
import instance from "./axios"; // can be imported with the name from the file or as what you want
import "./Row.css";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";
import { FaLongArrowAltLeft } from "react-icons/fa";
// import { GrPrevious, GrNext } from "react-icons/gr";
// import { ReactPlayer} from "react-player"

const img_url = "https://image.tmdb.org/t/p/original/";

// var count = 0;
// const slide = document.getElementsByClassName("row__poster");

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  // slide Row --- work on this later
  // const slideRow = document.querySelector(".row__posters");
  // let isDown = false;
  // let startX;
  // let scrollLeft;
  // if (slideRow) {
  //   slideRow.addEventListener("mousedown", (e) => {
  //     isDown = true;
  //     slideRow.classList.add("active");
  //     scrollLeft = slideRow.scrollLeft;
  //     startX = e.pageX - slideRow.offsetLeft;
  //   });
  //   slideRow.addEventListener("mouseleave", () => {
  //     isDown = false;
  //     slideRow.classList.remove("active");
  //   });
  //   slideRow.addEventListener("mouseup", () => {
  //     isDown = false;
  //     slideRow.classList.remove("active");
  //   });
  //   slideRow.addEventListener("mousemove", (e) => {
  //     if (!isDown) return; // stop it from running
  //     e.preventDefault();
  //     const x = e.pageX - slideRow.offsetLeft;
  //     const slided = x - startX;
  //     slideRow.scrollLeft = scrollLeft - slided;
  //   });
  // }

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || movie?.title || movie?.original_title || "")
        .then((url) => {
          // console.log(movie?.id);
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((err) => {
          console.log(err);
          window.alert("Coming Soon . . . .");
        });
    }
  };

  const closeTrailer = () => {
    setTrailerUrl("");
  };

  const opts = {
    height: "85%",
    width: "100%",
    playerVars: { autoplay: 1 },
  };

  useEffect(() => {
    /*      [] to run once when the row loads but adding the movies variable
            tells it to run anytime the movies change       */
    async function fetchData() {
      const request = await instance.get(fetchUrl);
      setMovies(request.data.results);
      // console.log(request);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  // console.table(movies);

  return (
    <div className="row">
      {/* title */}
      <h2>{title}</h2>
      {/* <div className="go__right" onClick={rowScrollRight}><GrNext size="1.6rem" /></div>
      <div className="go__left" onClick={rowScrollLeft}><GrPrevious size="1.6rem" /></div> */}
      <div className={`row__posters`}>
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={() => handleClick(movie)}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`${img_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
            title={movie?.title || movie?.name || movie?.original_name}
          />
        ))}
      </div>
      {trailerUrl && (
        <div className="trailer">
          <span onClick={closeTrailer}> Go back
          </span>
          <Youtube videoId={trailerUrl} opts={opts} className="youtube" />
        </div>
      )}
    </div>
  );
};

// const rowScrollRight = () => {
//     if (count === 0) {
//       slide[5].scrollIntoView({behavior: "smooth"});
//     count++;
//   }
//   else if (count === 1) {
//     slide[7].scrollIntoView({behavior: "smooth"});
//     count++;
//   }
//   else if (count === 2) {
//     slide[9].scrollIntoView({behavior: "smooth"});
//     count++;
//   }
//   else if (count === 3) {
//     slide[11].scrollIntoView({behavior: "smooth"});
//     count++;
//   }
//   else if (count === 4) {
//     slide[13].scrollIntoView({behavior: "smooth"});
//     count++;
//   }
//   else if (count === 5) {
//     slide[15].scrollIntoView({behavior: "smooth"});
//     count++;
//   }
//   else if (count === 6) {
//     slide[17].scrollIntoView({behavior: "smooth"});
//     count++;
//   }
//   else if (count === 7) {
//     slide[19].scrollIntoView({behavior: "smooth"});
//   }

//     else { count = 7}
//   return count;

// }

// const rowScrollLeft = () => {
//   if (count === 7) {
//       slide[18].scrollIntoView({behavior: "smooth"});
//     count--;
//   }
//   else if (count === 6) {
//       slide[17].scrollIntoView({behavior: "smooth"});
//     count--;
//   }
//   else if (count === 5) {
//       slide[15].scrollIntoView({behavior: "smooth"});
//     count--;
//   }
//   else if (count === 4) {
//       slide[13].scrollIntoView({behavior: "smooth"});
//     count--;
//   }
//   else if (count === 3) {
//       slide[11].scrollIntoView({behavior: "smooth"});
//     count--;
//   }
//   else if (count === 2) {
//       slide[9].scrollIntoView({behavior: "smooth"});
//     count--;
//   }
//   else if (count === 1) {
//       slide[7].scrollIntoView({behavior: "smooth"});
//   }
//   else if (count === 0) {
//       slide[5].scrollIntoView({behavior: "smooth"});
//   }
// else {count = 0}

// }

export default Row;
