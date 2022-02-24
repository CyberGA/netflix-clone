import { TMDB_KEY } from "./secret";

const API_KEY = TMDB_KEY;

//& Getting different movie types
const requests = {
  baseURL: "https://api.themoviedb.org/3",
  img_url: "https://image.tmdb.org/t/p/original/",
  fetchTrending: `/trending/all/day?api_key=${API_KEY}`,
  fetchNetflixOriginals: `/discover/movie?api_key=${API_KEY}&language=en-US`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}`,
  fetchCrime: `/discover/movie?api_key=${API_KEY}&with_genres=80`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchAnime: `/discover/movie?api_key=${API_KEY}&with_genres=16&sort_by=popularity.desc`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35&sort_by=popularity.desc`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27&page=2`,
  fetchRomance: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=10751`,
  fetchTvMovie: `/discover/movie?api_key=${API_KEY}&with_genres=10770`,
};

export default requests;
