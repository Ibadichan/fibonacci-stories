import { fibonacciStoriesPath } from 'helpers/routes';
import Page from 'pages/SomeStories';

const Route = {
  exact: true,
  path: fibonacciStoriesPath(),
  component: Page,
};

export default Route;
