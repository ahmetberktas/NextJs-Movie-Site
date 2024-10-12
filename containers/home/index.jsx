import React from "react";

import FeaturedMovie from "@/components/featured-movie";
import Categories from "@/components/categories";
import MoviesSection from "@/components/movies-section";

function HomeContainer({
  topMovies = [],
  populerMovies = [],
  selectedCategory,
  categories = [],
}) {
  return (
    <div>
      <FeaturedMovie movie={topMovies?.[0]} />
      <Categories categories={categories} />
      {selectedCategory.movies.length > 0 && (
        <MoviesSection
          title={(() => {
            const genre = categories.find(
              (genre) => `${genre.id}` === selectedCategory.id
            );
            return genre ? genre.name : "Unknown Genre";
          })()}
          movies={selectedCategory.movies}
        />
      )}

      <MoviesSection title="Populer Films" movies={topMovies.slice(1, 11)} />
      <MoviesSection
        title="Your Favorites"
        movies={populerMovies.slice(7, 17)}
      />
    </div>
  );
}

export default HomeContainer;
