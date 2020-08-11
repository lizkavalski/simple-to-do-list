'use strict';
const express = require('express');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 3030;

app.use(express.static('./index'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
  app.use(express.static('./public'));
});

app.get('*', getError);

app.listen(port,() => console.log(`listening on port: ${port}`));


function getError(request, response) {
  console.error('From error handler: request.error', request.error);
  response.render('error');
}
