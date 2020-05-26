function index(request, response) {
  response.render('home/index', { content: 'Homepage' });
}

module.exports = {
  index,
};
