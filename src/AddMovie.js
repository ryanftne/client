import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';

const AddMovie = () => {
  const [movie, setMovie] = useState({
    title: '',
    description: '',
    actors: [],
    director: '',
    image: ''
  });

  const handleChange = (event) => {
    setMovie({...movie, [event.target.name]: event.target.value});
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.post('/api/movies', movie);
      setMovie({
        title: '',
        description: '',
        actors: [],
        director: '',
        image: ''
      });
      window.location.reload();
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" name="title" onChange={handleChange} />
      </Form.Group>
      {/* Repeat the above Form.Group for description, actors, director, and image */}
      <Button type="submit">Add Movie</Button>
    </Form>
  );
};

export default AddMovie;
