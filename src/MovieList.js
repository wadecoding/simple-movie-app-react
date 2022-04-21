import React, {useEffect, useState} from "react";
import MovieItem from "./MovieItem";
import {useNavigate} from "react-router-dom"
import axois from 'axios'

function MovieList(props) {
  const [movieList, setMovieList] = useState([])
  const navigate = useNavigate()


  useEffect(() => {
    axois.get('./db.json')
      .then(res => {
        setMovieList(res.data)
      })
  }, []);

  const movieListElms = movieList.map((movie, i) => {
    return (
      <MovieItem name={movie.name} year={movie.year} key={movie.id}
                 onClick={() => navigate(`movieDetail/${movie.id}`, {state: movie})}
      />
    )
  })

  return (
    <>
      {movieListElms}
    </>
  );
}

export default MovieList;