import React from 'react';
import { Container, Typography } from '@material-ui/core';
import Navigation from 'components/Navigation/index';
import Form from './components/Form';
import create from './API';

function NewFibonacciStory() {
  const [fibonacciStory, setFibonacciStory] = React.useState({});

  function createFibonacciStory(payload) {
    create(payload).then((response) => {
      setFibonacciStory(response.body);
    });
  }

  return (
    <div>
      <Navigation />

      <Container maxWidth="sm">
        <Typography variant="h2" component="h1" gutterBottom>
          Create a story
        </Typography>

        <Form
          fibonacciStory={fibonacciStory}
          createFibonacciStory={createFibonacciStory}
        />
      </Container>
    </div>
  );
}

export default NewFibonacciStory;
