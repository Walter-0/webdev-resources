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
  
  db.Resource.create({
    title: req.body.title,
    description: req.body.description,
    link: req.body.description
  }).then(function(result) {
    res.sendStatus(201);
    res.end();
  });

});

router.get('/api/resources/:page?', function (req, res, next) {
  let limit = 10;
  let offset = 0;
  let page = 1;

  db.Resource.findAndCountAll({
    include: [db.Tag],
  }).then(function (data) {

    if (req.params.page) {
      page = req.params.page;
    }

    let pages = Math.ceil(data.count / limit);
    offset = limit * (page - 1);

    db.Resource.findAll({
        limit: limit,
        offset: offset,
        $sort: {
          id: 1
        }
      })
      .then((resources) => {
        res.status(200).json({
          'result': resources,
          'count': data.count,
          'pages': pages
        });
      }).catch(function (error) {
        res.status(500).send('Internal Server Error');
      });
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

router.get('/api/resources/search/:term', function (req, res, next) {
  db.Resource.findAll({
    where: {
      title: {
        $like: '%' + req.params.term + '%'
      }
    }
  }).then(function (dbResource) {
    res.json(dbResource);
  });
});

