import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import debounce from 'lodash.debounce';
import '../css/Pencarianfilm.css';

const Pencarianfilm = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const API_KEY = '114cc087e8f2cc4dfe60930a0409197f';

  const fetchMovies = (searchQuery) => {
    setLoading(true);
    setError(null);
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchQuery}`)
      .then(response => response.json())
      .then(data => {
        setResults(data.results);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
        setError(error);
        setLoading(false);
      });
  };

  useEffect(() => {
    const debouncedFetchMovies = debounce((searchQuery) => {
      if (searchQuery) {
        fetchMovies(searchQuery);
      } else {
        setResults([]);
      }
    }, 300);

    debouncedFetchMovies(query);

    return () => {
      debouncedFetchMovies.cancel();
    };
  }, [query]);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="search-container">
      <form className="search-form" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Search for a movie..."
          value={query}
          onChange={handleInputChange}
          className="search-input"
        />
      </form>
      {loading && <div className="loading">Loading...</div>}
      {error && <div className="error">Error loading data. Please try again later.</div>}
      <div className="search-results">
        {results && results.map(movie => (
          <div className="search-result" key={movie.id}>
            <Link to={`/movie/${movie.id}`} className="search-link">
              <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="search-image" />
              <h3 className="search-title">{movie.title}</h3>
            </Link>
            <p className="search-rating">Rating: {movie.vote_average}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pencarianfilm;
