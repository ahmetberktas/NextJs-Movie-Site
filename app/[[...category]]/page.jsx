import React from "react";
import HomeContainer from "@/containers/home";
import {
  getTopRatedMovies,
  getPopularMovies,
  getCategories,
  getSingleCategory,
} from "../../services/movie";

export default async function Home({ params }) {
  let selectedCategory;

  const [topMoviesData, popularMoviesData, categoriesData] = await Promise.all([
    getTopRatedMovies(),
    getPopularMovies(),
    getCategories(),
  ]);

  const topMovies = topMoviesData?.results ?? [];
  const popularMovies = popularMoviesData?.results ?? [];
  const categories = categoriesData?.genres ?? [];

  if (params.category?.length > 0) {
    const { results } = await getSingleCategory(params.category[0]);
    selectedCategory = results;
  }

  return (
    <HomeContainer
      topMovies={topMovies}
      popularMovies={popularMovies}
      categories={categories}
      selectedCategory={{
        id: params.category?.[0] ?? "",
        movies: selectedCategory ? selectedCategory.slice(0, 11) : [],
      }}
    />
  );
}
