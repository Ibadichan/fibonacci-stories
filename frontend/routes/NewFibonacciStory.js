import { newFibonacciStoryPath } from 'helpers/routes';
import Page from 'pages/NewFibonacciStory';

const Route = {
  exact: true,
  path: newFibonacciStoryPath(),
  component: Page,
};

export default Route;
