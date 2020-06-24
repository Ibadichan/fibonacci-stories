const path = require('path');
const express = require('express');
const compression = require('compression');
const cors = require('cors');
const bodyParser = require('body-parser');
const requestIp = require('request-ip');

const routes = require('./config/routes/index');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.resolve(__dirname, '../frontend/public')));
app.use(
  '/assets',
  express.static(path.resolve(__dirname, '../frontend/public/assets'))
);

app.use(compression());
app.use(cors());
app.use(requestIp.mw());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

routes(app);

app.get('*', (request, response) => {
  response.sendFile(
    path.resolve(__dirname, '../frontend/public/assets/index.html')
  );
});

app.listen(port, () => {
  console.log(`Backend Server is listening on ${port}`); // eslint-disable-line
});
