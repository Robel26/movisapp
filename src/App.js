import React from "react";
import "./App.css";
import Movies from "./components/Movieslist";
import Nav from "./components/Nave";
import { MovieProvider } from "./components/MovielistContext";
import AddMovies from "./components/AddMovies";
function App() {
  return (
    <MovieProvider>
      <div className="App">
        <Nav />
        <AddMovies />
        <Movies />
      </div>
    </MovieProvider>
  );
}

export default App;
