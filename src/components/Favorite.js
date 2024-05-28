import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/Favorite.css';

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(savedFavorites);
  }, []);

  return (
    <div className="favorites-container">
      <h1>My Favorite Movies</h1>
      {favorites.length > 0 ? (
        <div className="movie-grid">
          {favorites.map((movie) => (
            <div className="movie-card" key={movie.id}>
              <Link to={`/movie/${movie.id}`}>
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                <h2>{movie.title}</h2>
              </Link>
              <p>Rating: {movie.vote_average}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No favorite movies added yet.</p>
      )}
    </div>
  );
}

export default Favorites;
