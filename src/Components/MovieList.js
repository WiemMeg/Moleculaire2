import React from "react";
import MovieCard from "./MovieCard";
import { Routes, Route, Link } from "react-router-dom";
import DataMovie from ".//DataMovie";
function MovieList() {


  return (
    <div className="items-movie">
      {DataMovie.map((el) => (
        <MovieCard props={el} />
      ))}
    </div>
  );
}

export default MovieList;
