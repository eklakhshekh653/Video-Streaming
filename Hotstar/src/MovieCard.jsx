import React, { useState } from "react";

const MovieCard = ({ movie, onWatchNow }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="movie">
            <div>
                <p>{movie.Year}</p>
            </div>
            <div
                className="post"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <img
                    src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/400"}
                    alt={movie.Title}
                />
                {isHovered && (
                    <div className="overlay">
                        <button onClick={() => onWatchNow(movie)}>
                            <b>Watch Now</b>
                        </button>
                    </div>
                )}
            </div>
            
            <div>
                <span>{movie.Type}</span>
                <h3>{movie.Title}</h3>
            </div>
        </div>
    );
};

export default MovieCard;
