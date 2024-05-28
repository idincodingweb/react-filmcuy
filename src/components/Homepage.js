import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Pencarianfilm from './Pencarianfilm';
import { Container, Row, Col, Card, Spinner, Alert } from 'react-bootstrap';

const Homepage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const API_KEY = '114cc087e8f2cc4dfe60930a0409197f';

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
      .then(response => response.json())
      .then(data => {
        setMovies(data.results);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
        setError(error);
        setLoading(false);
      });
  }, [API_KEY]);

  if (loading) return <div className="text-center"><Spinner animation="border" variant="primary" /></div>;
  if (error) return <Alert variant="danger">Error loading data. Please try again later.</Alert>;

  return (
    <Container fluid className="home" id="homepage">
      <Pencarianfilm />
      <h1 className="text-center my-4">Popular Movies</h1>
      <Row>
        {movies && movies.map(movie => (
          <Col key={movie.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
            <Card className="h-100">
              <Link to={`/movie/${movie.id}`}>
                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
              </Link>
              <Card.Body className="d-flex flex-column">
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text>Rating: {movie.vote_average}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Homepage;
