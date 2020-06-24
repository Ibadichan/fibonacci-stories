const path = require('path');
const express = require('express');

const app = express();
const port = 8080;

app.use(express.static(path.resolve(__dirname, 'public')));

app.use('/assets', express.static(path.resolve(__dirname, 'public/assets')));

app.get('*', (request, response) => {
  response.sendFile(path.resolve(__dirname, 'public/assets/index.html'));
});

app.listen(port, () => {
  console.log(`Web Server is listening on ${port}`); // eslint-disable-line
});
