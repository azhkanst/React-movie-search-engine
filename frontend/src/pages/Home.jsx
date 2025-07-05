import MovieCard from "../components/MovieCard"
import {useState} from "react"

function Home() {

    const [searchQuery, setSearchQuery] = useState("");

    const movies = [
        {id: 1, title: "Atonement", release_date: "2007"},
        {id: 2, title: "Movie2", release_date: "2024"},
        {id: 3, title: "Movie3", release_date: "2004"},
    ];

    function handleSearch() {
        e.preventDefault()
        alert(searchQuery);
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
            {movies.map((movie) => (
                <MovieCard movie={movie} key={movie.id}/>
            ))}
        </div>
    </div>
}

export default Home;