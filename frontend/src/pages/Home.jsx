import MovieCard from "../components/MovieCard"
import {useState} from "react"
import "../css/Home.css"

function Home() {

    const [searchQuery, setSearchQuery] = useState("");

    const movies = [
        {id: 1, title: "Atonement", release_date: "2007"},
        {id: 2, title: "Geisha", release_date: "2005"},
        {id: 3, title: "Openheimer", release_date: "2023"},
    ];

    function handleSearch() {
        e.preventDefault();
        alert(searchQuery);
        setSearchQuery("");
    }

    return <div className="home">
        <form onSubmit={handleSearch} className="search-form">
            <input 
                type="text" 
                placeholder="search for movies.." 
                className="search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="search-button">Search</button>
        </form>

        <div className="movie-grid">
            {movies.map(movie => ( <MovieCard movie={movie} key={movie.id}/> ))}
        </div>
    </div>
}

export default Home;