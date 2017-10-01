const express = require('express'),
  config = require('./config/config'),
  db = require('./app/models');

const path = require('path');

var app = express();
app.use(express.static(path.join(__dirname, '../client/dist')));

module.exports = require('./config/express')(app, config);
db.sequelize
  .sync()
  .then(function () {
    if (!module.parent) {
      app.listen(config.port, function () {
        console.log('Express server listening on port ' + config.port);
      });
    }
  }).catch(function (e) {
    throw new Error(e);
  });
