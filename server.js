'use strict';
const express = require('express');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 3030;

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.render('/public');
  app.use(express.static('./public'));
});

app.listen(port,() => console.log(`listening on port: ${port}`));

