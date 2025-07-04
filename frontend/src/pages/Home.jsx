import MovieCard from "../components/MovieCard"

function Home() {
    const movies = [
        {id: 1, title: "Atonement", release_date: "2007"},
        {id: 2, title: "Movie2", release_date: "2024"},
        {id: 3, title: "Movie3", release_date: "2004"},
    ];

    function onSubmit() {
        
    }

    return <div className="home">
        <form onSubmit={onSubmit} className="search-form">
            <input type="text" placeholder="search for movies.." className="search-input"/>
        </form>

        <div className="movie-grid">
            {movies.map((movie) => (
                <MovieCard movie={movie} key={movie.id}/>
            ))}
        </div>
    </div>
}

export default Home;