import { fibonacciStoriesPath } from 'helpers/routes';
import Page from 'pages/FibonacciStories';

const Route = {
  exact: true,
  path: fibonacciStoriesPath(),
  component: Page,
};

export default Route;
