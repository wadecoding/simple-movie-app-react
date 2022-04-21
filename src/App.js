import './css/App.css';
import {Route, Routes} from "react-router-dom";
import MovieList from "./MovieList";
import MovieDetail from "./MovieDetail";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MovieList/>}/>
        <Route path="movieDetail/:id" element={<MovieDetail/>}/>
      </Routes>
    </div>
  );
}

export default App;
