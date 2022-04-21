import React from "react";
import {useLocation} from "react-router-dom";

function MovieDetail() {
  const location = useLocation()

  return (
    <div>
      <ul style={{listStyle: 'none'}}>
        <li style={{fontSize: '1.6rem'}}>{location.state.name}</li>
        <li style={{fontSize: '1.4rem'}}>{location.state.year}</li>
      </ul>
    </div>
  )
}


export default MovieDetail;