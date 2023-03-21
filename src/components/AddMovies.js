import React, { useState, useContext } from "react";
import { MovieContext } from "./MovielistContext";

function AddMovies() {
  const [name, setName] = useState("");
  const [price, setprice] = useState("");
  const [id, setid] = useState("");
  const [movie, setMovies] = useContext(MovieContext);

  const updateName = (e) => {
    setName(e.target.value);
  };
  const updatePrice = (e) => {
    setprice(e.target.value);
  };
  const updateid = (e) => {
    setid(e.target.value);
  };
  const addMovie = (e) => {
    e.preventDefault();
    setMovies((prevMovies) => [
      ...prevMovies,
      { name: name, price: price, id: id },
    ]);
  };

  return (
    <form className="input" onSubmit={addMovie}>
      <input type="text" name="name" value={name} onChange={updateName} />
      <input type="text" name="price" value={price} onChange={updatePrice} />
      <input type="text" name="id" value={id} onChange={updateid} />
      <button>Submit</button>
    </form>
  );
}

export default AddMovies;
