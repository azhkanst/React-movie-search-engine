import './App.css';
import MovieCard from "./components/MovieCard";

function App() {

  const movieNumer = 2;

  const movie_1 = {title: "Movie Epic", release_date: "20 June 1923"};
  const movie_2 = {title: "DEAD SOULS", release_date: "1 January 2004"};

  return (
    <>
      {movieNumer === 1 && <MovieCard movie={movie_1}/> };
      {movieNumer === 1 ? (<MovieCard movie={movie_1}/>) : (<MovieCard movie={movie_2}/>)}


      
    </>
  );
}


export default App;
