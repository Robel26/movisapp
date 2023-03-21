import React, { useContext } from "react";
import { MovieContext } from "./MovielistContext";
const Nave = () => {
  const [movies, setMovies] = useContext(MovieContext);
  return (
    <div className="nav">
      <h3>Robel</h3>
      <p>List of Movies:{movies.length}</p>
    </div>
  );
};

export default Nave;
