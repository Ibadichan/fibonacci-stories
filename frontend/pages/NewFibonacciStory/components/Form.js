import React from 'react';
import PropTypes from 'prop-types';
import { Button, TextField, Typography, Paper } from '@material-ui/core';
import useStyles from '../useStyles';

function Form(props) {
  const classes = useStyles();
  const { createFibonacciStory, fibonacciStory } = props;
  const [sequenceNumber, setSequenceNumber] = React.useState('');
  const [isFormInvalid, setIsFormInvalid] = React.useState(false);

  const sequenceNumberProps = {};

  function isSequenceNumberValid(number) {
    return number && !Number.isNaN(number) && number >= 0 && number <= 10000;
  }

  function handleInputChange(event) {
    setSequenceNumber(event.target.value);
  }

  function handleFormSubmit(event) {
    event.preventDefault();

    const canSubmitForm = isSequenceNumberValid(sequenceNumber);

    if (canSubmitForm) {
      setIsFormInvalid(false);
      createFibonacciStory({ sequenceNumber });
    } else {
      setIsFormInvalid(true);
    }
  }

  if (isFormInvalid) {
    sequenceNumberProps.error = true;
  }

  return (
    <Paper variant="outlined" className={classes.Paper}>
      <form noValidate autoComplete="off" onSubmit={handleFormSubmit}>
        <TextField
          type="number"
          id="sequence-number"
          label="Sequence number"
          name="sequenceNumber"
          value={sequenceNumber}
          onChange={handleInputChange}
          required
          fullWidth
          variant="outlined"
          inputProps={{
            min: 0,
            max: 10000,
          }}
          helperText="* Number must be from 0 to 10000"
          className={classes.TextField}
          InputLabelProps={{ shrink: true }}
          {...sequenceNumberProps}
        />

        <Button variant="contained" color="primary" type="submit">
          Get fibonacci number
        </Button>
      </form>

      {fibonacciStory.fibonacciNumber && (
        <Typography className={classes.FibonacciNumber}>
          The fibonacci number is:
          <br />
          {fibonacciStory.fibonacciNumber}
        </Typography>
      )}
    </Paper>
  );
}

Form.propTypes = {
  createFibonacciStory: PropTypes.func.isRequired,
  fibonacciStory: PropTypes.shape({
    fibonacciNumber: PropTypes.string,
  }).isRequired,
};

export default Form;
