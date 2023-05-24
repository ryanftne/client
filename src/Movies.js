import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Container, Row, Col } from 'react-bootstrap';

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const res = await axios.get('http://localhost:3001/api/movies');
      setMovies(res.data);
    }

    fetchMovies();
  }, []);

  return (
    <Container>
      <Row>
        {movies.map((movie) => (
          <Col key={movie._id}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={movie.poster} /> {/* Utilisez le champ approprié pour l'image */}
              <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text>
                  {movie.fullplot}
                  <br />
                  <strong>Genre: </strong> {movie.genres.join(', ')}
                  <br />
                  <strong>Director: </strong> {movie.directors.join(', ')}
                  <br />
                  <strong>Cast: </strong> {movie.cast.join(', ')}
                  <br />
                  <strong>Runtime: </strong> {movie.runtime} minutes
                  <br />
                  <strong>Released: </strong> {new Date(movie.released).toLocaleDateString()}
                  <br />
                  <strong>IMDB Rating: </strong> {movie.imdb.rating}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Movies;
