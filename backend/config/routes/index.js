const home = require('./home');
const fibonacciStories = require('./fibonacciStories');

function routes(app) {
  app.use('/', home);
  app.use('/fibonacci-stories', fibonacciStories);
}

module.exports = routes;
