import React from "react";
import "./css/MovieItem.css"

function MovieItem(props) {
  return (
    <div className={"movie-item"} onClick={props.onClick}>
      <p className={"movie-name"}>{props.name}</p>
      <p className={"movie-year"}>{props.year}</p>
    </div>
  );
}

export default MovieItem