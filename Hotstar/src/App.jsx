import { useEffect, useState } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";
import HomeSlider from './HomeSlider';
import Footer from "./Footer";
import ak from './assets/ak.png'

// Sample default movies
const defaultMovies = [
    {
        Title: "Inception",
        Year: "2010",
        imdbID: "tt1375666",
        Poster: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
        video:"https://www.youtube.com/embed/YoHD9XEInc0?si=7sYJz_VcAddqqxBf",
    },
    {
        Title: "Interstellar",
        Year: "2014",
        imdbID: "tt0816692",
        Poster: "https://m.media-amazon.com/images/M/MV5BZDU5NTJkMjQtNGYyZC00NjYwLWJlNWMtODk5NDI5MDE3NDJiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        video:"https://www.youtube.com/embed/60h6lpnSgck?si=gWBFTsymz2Wi2VJO",
    },
    {
        Title: "The Dark Knight",
        Year: "2008",
        imdbID: "tt0468569",
        Poster: "https://images.moviesanywhere.com/bd47f9b7d090170d79b3085804075d41/c6140695-a35f-46e2-adb7-45ed829fc0c0.jpg",
        video:"https://www.youtube.com/embed/aC6QEwMmI0w?si=sklH-kXL6TBzz1vl",
    },
    {
        Title: "Iron Man",
        Year: "2008",
        imdbID: "tt0468562323",
        Poster: "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_FMjpg_UX1000_.jpg",
        video:"https://www.youtube.com/embed/5lT00HXQeBg?si=0E3VryxYEmL9V0kA",
    },
    {
        Title: "Parasite",
        Year: "2008",
        imdbID: "tt0468569121",
        Poster: "https://m.media-amazon.com/images/M/MV5BYjk1Y2U4MjQtY2ZiNS00OWQyLWI3MmYtZWUwNmRjYWRiNWNhXkEyXkFqcGc@._V1_.jpg",
        video:"https://www.youtube.com/embed/hkbDDrhVw80?si=8TDrArureSRuYR2c",
    },
    {
        Title: "The Conjuring",
        Year: "2008",
        imdbID: "tt0468569455",
        Poster: "https://m.media-amazon.com/images/M/MV5BOTRkMDlmZWEtMzQyYy00YzgyLTgwM2QtNzgxYmIwNGVlYmJlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        video:"https://www.youtube.com/embed/_M1__yTczT0?si=r_jtY2oaTrsZNa90",
    },
    {
        Title: "End-Game",
        Year: "2019",
        imdbID: "tt04685695666",
        Poster: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg",
        video:"https://www.youtube.com/embed/72eQ0seOP1k?si=QfJGPVso4Eq5UzxP",
    },
    {
        Title: "KGF",
        Year: "2021",
        imdbID: "tt04685696777",
        Poster: "https://m.media-amazon.com/images/M/MV5BM2M0YmIxNzItOWI4My00MmQzLWE0NGYtZTM3NjllNjIwZjc5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        video:"https://www.youtube.com/embed/gKizDojsdvs?si=ozub6rQLImQhaAdD",
    },
    {
        Title: "3 idiots",
        Year: "2021",
        imdbID: "tt046856909876",
        Poster: "https://m.media-amazon.com/images/M/MV5BNzc4ZWQ3NmYtODE0Ny00YTQ4LTlkZWItNTBkMGQ0MmUwMmJlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        video:"https://go.jc.fm/fRhd/4g8e3ah2",
    },
];

    
const API_URL = "https://www.omdbapi.com/?apikey=5baa7886";

const App = () => {
    const [movies, setMovies] = useState(defaultMovies);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [fullscreen, setFullscreen] = useState(false);

    const moviesSlider = [
        { url: 'https://www.youtube.com/embed/GqBsBTQ-Fh0?si=HmSWtEoFuMS_7VN9' },
        { url: 'https://www.youtube.com/embed/3JZ_D3ELwOQ' },
        // Add more movie URLs here
      ];
    useEffect(() => {
        if (searchTerm) {
            searchMovies(searchTerm);
        } else {
            setMovies(defaultMovies);
        }
    }, [searchTerm]);

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        if (data.Search) {
            setMovies(data.Search);
        } else {
            setMovies([]);
        }
    };

    const handleKeyDown = (e) => {
        if (e.keyCode === 13) {
            searchMovies(searchTerm);
        }
    };

    const handleWatchNow = (movie) => {
        setSelectedMovie(movie);
        setFullscreen(true);
    };

    const closeFullscreen = () => {
        setFullscreen(false);
        setSelectedMovie(null);
    };

    return (
        <>
        <div className={`app ${fullscreen ? "fullscreen" : ""}`}>
            {!fullscreen && (
                <>
                    <div className="navbar">
                        <div className="logo"><img src={ak} alt="" height={100} /></div>
                    <div className="search">
        
                        <input
                            placeholder="Search for a movie"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            onKeyDown={handleKeyDown}
                        />
                        <img src={SearchIcon} alt="search" onClick={() => searchMovies(searchTerm)} />
                    </div>
                    </div>
                    <HomeSlider moviesSlider={moviesSlider} />

                    {movies.length > 0 ? (
                        <div className="container">
                            {movies.map((movie) => (
                                <MovieCard
                                    movie={movie}
                                    key={movie.imdbID}
                                    onWatchNow={handleWatchNow}
                                />
                            ))}
                        </div>
                    ) : (
                        <div className="empty">
                            <h2>No movies found</h2>
                        </div>
                    )}
                </>
            )}

            {/* Display fullscreen video if fullscreen is enabled */}
            {fullscreen && selectedMovie && (
                <div className="video-fullscreen">
                    <iframe
                        src={selectedMovie.video}
                        title="Movie Trailer"
                        frameBorder="0"
                        allow="autoplay; fullscreen"
                        allowFullScreen
                    ></iframe>
                    <button onClick={closeFullscreen} className="close-button">Close</button>
                </div>
            )}
            
        </div>
        <div className="App">
            <Footer/>
        </div>
        </>
    );
};

export default App;