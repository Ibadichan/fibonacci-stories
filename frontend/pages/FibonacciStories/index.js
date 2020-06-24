import React from 'react';
import moment from 'moment';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Container,
  Typography,
} from '@material-ui/core';
import Navigation from 'components/Navigation/index';
import fetchAll from './API';
import useStyles from './useStyles';

function FibonacciStories() {
  const classes = useStyles();
  const [fibonacciStories, setFibonacciStories] = React.useState([]);

  React.useEffect(() => {
    fetchAll().then((response) => {
      setFibonacciStories(response.body);
    });
  }, []);

  return (
    <div>
      <Navigation />

      <Container>
        <Typography variant="h2" component="h1" gutterBottom>
          Fibonacci stories
        </Typography>

        <TableContainer component={Paper} className={classes.TableContainer}>
          <Table aria-label="Fibonacci stories table" className={classes.Table}>
            <TableHead>
              <TableRow>
                <TableCell>IP</TableCell>
                <TableCell>Sequence number</TableCell>
                <TableCell>Fibonacci number</TableCell>
                <TableCell align="center">Created at</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {fibonacciStories.map((fibonacciStory) => (
                <TableRow key={fibonacciStory.id}>
                  <TableCell>{fibonacciStory.IP}</TableCell>
                  <TableCell>{fibonacciStory.sequenceNumber}</TableCell>
                  <TableCell>{fibonacciStory.fibonacciNumber}</TableCell>
                  <TableCell align="center">
                    {moment(fibonacciStory.createdAt).format('DD/MM/YYYY')}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </div>
  );
}

export default FibonacciStories;
