require('dotenv').config();

const path = require('path');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const requestIp = require('request-ip');

const routes = require('./config/routes/index');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.use(requestIp.mw());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

routes(app);

app.listen(port, () => {
  console.log(`Backend Server is listening on ${port}`); // eslint-disable-line
});
