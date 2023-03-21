import React, { useContext, useState } from "react";
import Price from "./Price";
import { MovieContext } from "./MovielistContext";

const MoviesList = () => {
  const [movies, setMovies] = useContext(MovieContext);
  return (
    <div>
      {movies.map((movie) => (
        <Price
          title={movie.name}
          price={movie.price}
          key={movie.id}
          id={movie.id}
        />
      ))}
    </div>
  );
};

export default MoviesList;
