const fibonacciStories = require('./fibonacci-stories');

function routes(app) {
  app.use('/api/fibonacci-stories', fibonacciStories);
}

module.exports = routes;
