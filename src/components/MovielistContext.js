import React, { useState, createContext } from "react";

export const MovieContext = createContext();

export const MovieProvider = (props) => {
  const [movies, setMovies] = useState([
    {
      name: "Harry Potter",
      price: "$10",
      id: 23124,
    },
    {
      name: "Game of Thrones",
      price: "$10",
      id: 46739,
    },
    {
      name: "Inception",
      price: "$10",
      id: 25378,
    },
  ]);
  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  );
};
