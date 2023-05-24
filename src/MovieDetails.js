import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchMovie = async () => {
      const res = await axios.get(`/api/movies/${id}`);
      setMovie(res.data);
    }

    fetchMovie();
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={movie.image} />
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text>
            Description: {movie.description} <br />
            Director: {movie.director} <br />
            Actors: {movie.actors.join(', ')}
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default MovieDetails;
