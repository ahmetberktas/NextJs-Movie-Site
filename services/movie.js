import { options } from "@/constant/constant";

const API_URL = "https://api.themoviedb.org/3";

export const fetchMovieAPI = async (pathname, query = "") => {
  try {
    const url = `${API_URL}/${pathname}${query}`;
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching data from ${pathname}:`, error);
  }
};

// Top Rated Movies
export const getTopRatedMovies = () =>
  fetchMovieAPI("movie/top_rated", "?page=1");

// Popular Movies
export const getPopularMovies = () => fetchMovieAPI("movie/popular", "?page=1");

// Movie Categories
export const getCategories = () => fetchMovieAPI("genre/movie/list");

// Movies by Category
export const getSingleCategory = (genreId) =>
  fetchMovieAPI("discover/movie", `?with_genres=${genreId}`);

// Get Movie
export const getMovie = (movieId) => fetchMovieAPI(`movie/${movieId}`);
