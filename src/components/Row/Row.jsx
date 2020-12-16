import React, { useState, useEffect } from "react";
import requests from "../../requests";
import { GrPrevious, GrNext } from "react-icons/gr";
import "./row.css";

function Row({ title, fetchUrl, isLargeRow, id }) {
  const [movies, setMovies] = useState([]);

  // var count = 0;
  // const slide = document.getElementById(`${id}`);

  // const rowScrollRight = () => {
  //   console.log(count);
  //   if (count === 0) {
  //     slide[5].scrollIntoView({ behavior: "smooth" });
  //     count++;
  //   } else if (count === 1) {
  //     slide[7].scrollIntoView({ behavior: "smooth" });
  //     count++;
  //   } else if (count === 2) {
  //     slide[9].scrollIntoView({ behavior: "smooth" });
  //     count++;
  //   } else if (count === 3) {
  //     slide[11].scrollIntoView({ behavior: "smooth" });
  //     count++;
  //   } else if (count === 4) {
  //     slide[13].scrollIntoView({ behavior: "smooth" });
  //     count++;
  //   } else if (count === 5) {
  //     slide[15].scrollIntoView({ behavior: "smooth" });
  //     count++;
  //   } else if (count === 6) {
  //     slide[17].scrollIntoView({ behavior: "smooth" });
  //     count++;
  //   } else if (count === 7) {
  //     slide[19].scrollIntoView({ behavior: "smooth" });
  //     count = 7;
  //   }
  //   return count;
  // };

  // const rowScrollLeft = () => {
  //   console.log(count);
  //   if (count === 7) {
  //     slide[17].scrollIntoView({ behavior: "smooth" });
  //     count--;
  //   } else if (count === 6) {
  //     slide[15].scrollIntoView({ behavior: "smooth" });
  //     count--;
  //   } else if (count === 5) {
  //     slide[13].scrollIntoView({ behavior: "smooth" });
  //     count--;
  //   } else if (count === 4) {
  //     slide[11].scrollIntoView({ behavior: "smooth" });
  //     count--;
  //   } else if (count === 3) {
  //     slide[9].scrollIntoView({ behavior: "smooth" });
  //     count--;
  //   } else if (count === 2) {
  //     slide[7].scrollIntoView({ behavior: "smooth" });
  //     count--;
  //   } else if (count === 1) {
  //     slide[5].scrollIntoView({ behavior: "smooth" });
  //     count--;
  //   } else if (count === 0) {
  //     slide[0].scrollIntoView({ behavior: "smooth" });
  //     count = 0;
  //   }
  //   return count;
  // };

  useEffect(() => {
    async function fetchData() {
      const request = await fetch(
        `${requests.baseURL}${fetchUrl}`
      ).then((res) => res.json());

      setMovies(request.results);

      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      {/* title */}
      <h2>{title}</h2>
      {/* <div className="dir dir__left" onClick={() => rowScrollLeft()}>
        <GrPrevious size="1.6rem" />
      </div> */}
      <div className={`row__posters`}>
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            // id={id}
            src={`${requests.img_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
            title={movie?.title || movie?.name || movie?.original_name}
          />
        ))}
      </div>
      {/* <div className="dir dir__right" onClick={() => rowScrollRight()}>
        <GrNext size="1.6rem" />
      </div> */}
    </div>
  );
}

export default Row;
