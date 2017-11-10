const express = require('express');
const router = express.Router();
const db = require('../models');
const path = require('path');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/api/', function (req, res, next) {
  res.sendFile(path.join(__dirname, '../../public/api.html'));
});

router.post('/api/resources', function (req, res, next) {
  console.log(req.body);
});

// Resource
router.get('/api/resources', function (req, res, next) {
  db.Resource.findAll({
    include: [db.Tag]
  }).then(function (dbResources) {
    res.json(dbResources);
  });
});

router.get('/api/resources/:id', function (req, res, next) {
  db.Resource.findOne({
    where: {
      id: req.params.id
    },
    include: [db.Tag]
  }).then(function (dbResource) {
    res.json(dbResource);
  });
});

// Tag
router.get('/api/tags', function (req, res, next) {
  db.Tag.findAll({}).then(function (dbTags) {
    res.json(dbTags);
  });
});

router.get('/api/tags/:id', function (req, res, next) {
  db.Tag.findOne({
    where: {
      id: req.params.id
    }
  }).then(function (dbdbTag) {
    res.json(dbdbTag);
  });
});

// User
router.get('/api/users', function (req, res, next) {
  db.User.findAll({}).then(function (dbUser) {
    res.json(dbUser);
  });
});

router.get('/api/users/:id', function (req, res, next) {
  db.User.findOne({
    where: {
      id: req.params.id
    }
  }).then(function (dbUsers) {
    res.json(dbUsers);
  });
});
