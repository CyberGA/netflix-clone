//& films or series
/**
 *
 * @param {Function} SelectionFIlter
 * @returns series or films
 */
export default function SelectionFIlter({ Action, Anime, Trending, Comedy, NetflixOriginals, TopRated, Crime, Horror, Romance, Documentaries }) {
  return {
    series: [
      {
        title: "Netflix Originals",
        data: NetflixOriginals,
      },
      {
        title: "Comedies",
        data: Comedy,
      },
      {
        title: "Documentaries",
        data: Documentaries,
      },
      {
        title: "Crime",
        data: Crime,
      },
      {
        title: "Action",
        data: Action,
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
