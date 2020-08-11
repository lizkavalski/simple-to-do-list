'use strict';
const express = require('express');
// const addTaskToDo = require('./todo');
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


function getError(req, res) {
  console.error('From error handler: req.error', req.error);
  res.render('error');
  app.use(express.static('./error'));
}
