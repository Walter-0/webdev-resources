const express = require('express'),
  router = express.Router(),
  db = require('../models'),
  path = require('path');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/', function (req, res, next) {
  console.log(__dirname);
  res.sendFile(path.join(__dirname, '../../../dist/index.html'));
});
