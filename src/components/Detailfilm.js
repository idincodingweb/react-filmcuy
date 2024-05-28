import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Spinner, Alert, Button } from 'react-bootstrap';
import '../css/Detailfilm.css';

const Detailfilm = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const API_KEY = '114cc087e8f2cc4dfe60930a0409197f';

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`)
      .then(response => response.json())
      .then(data => {
        setMovie(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
        setError(error);
        setLoading(false);
      });
  }, [id, API_KEY]);

  if (loading) return <div className="text-center my-5"><Spinner animation="border" variant="primary" /></div>;
  if (error) return <Alert variant="danger" className="text-center my-5">Error loading data. Please try again later.</Alert>;

  return (
    <Container className="my-5">
      {movie && (
        <Row>
          <Col md={4}>
            <img className="img-fluid" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
          </Col>
          <Col md={8}>
            <h1 className="mb-3">{movie.title}</h1>
            <p>{movie.overview}</p>
            <p><strong>Genre:</strong> {movie.genres.map(genre => genre.name).join(', ')}</p>
            <p><strong>Rating:</strong> {movie.vote_average}</p>
            <Button variant="primary">Add to Favorites</Button>
          </Col>
        </Row>
      )}
    </Container>
  );
}

export default Detailfilm;
