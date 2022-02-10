//& films or series
/**
 *
 * @param {Function} SelectionFIlter
 * @returns series or films
 */
export default function SelectionFilter({ Action, Anime, Trending, Comedy, NetflixOriginals, TopRated, Crime, Horror, Romance, Documentaries }) {
  return {
    series: [
      {
        title: "Netflix Originals",
        data: NetflixOriginals,
      },
      {
        title: "Crime",
        data: Crime,
      },
      {
        title: "Comedies",
        data: Comedy,
      },
      {
        title: "Action",
        data: Action,
      },
      {
        title: "Documentaries",
        data: Documentaries,
      },
    ],
    films: [
      {
        title: "Top Rated",
        data: TopRated,
      },
      {
        title: "Trending",
        data: Trending,
      },
      {
        title: "Horror",
        data: Horror,
      },
      {
        title: "Anime",
        data: Anime,
      },
      {
        title: "Romance",
        data: Romance,
      },
    ],
  };
}
