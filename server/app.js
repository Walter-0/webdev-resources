require('dotenv').config();
const express = require('express');
const config = require('./config/config');
const db = require('./app/models');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, '../client/dist')));

module.exports = require('./config/express')(app, config);
db.sequelize
  .sync({
    force: false
  })
  .then(function () {
    if (!module.parent) {
      app.listen(config.port, function () {
        console.log('Express server listening on port ' + config.port);
      });
    }
  }).catch(function (e) {
    throw new Error(e);
  });
