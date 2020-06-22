import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Tabs, Tab } from '@material-ui/core';
import { Link, useLocation } from 'react-router-dom';
import { newFibonacciStoryPath, fibonacciStoriesPath } from 'helpers/routes';

const useStyles = makeStyles({
  AppBar: {
    marginBottom: '3rem',
  },
});

function Navigation() {
  const location = useLocation();
  const classes = useStyles();
  const [currentTab, setCurrentTab] = React.useState(location.pathname);

  function handleTabChange(event, newValue) {
    setCurrentTab(newValue);
  }

  return (
    <AppBar position="static" className={classes.AppBar}>
      <Tabs value={currentTab} onChange={handleTabChange}>
        <Tab
          component={Link}
          to={fibonacciStoriesPath()}
          value={fibonacciStoriesPath()}
          label="Fibonacci stories"
        />
        <Tab
          component={Link}
          to={newFibonacciStoryPath()}
          value={newFibonacciStoryPath()}
          label="Create a story"
        />
      </Tabs>
    </AppBar>
  );
}

export default Navigation;
