const express = require('express');
const router = express.Router();
const db = require('../models');
const path = require('path');
const passport = require('passport');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/login', function (req, res) {
  res.render('login', {
    user: req.user
  });
});

// GET /auth/github
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  The first step in GitHub authentication will involve redirecting
//   the user to github.com.  After authorization, GitHub will redirect the user
//   back to this application at /auth/github/callback
router.get('/auth/github',
  passport.authenticate('github', { scope: [ 'user:email' ] }),
  function (req, res) {
    // The request will be redirected to GitHub for authentication, so this
    // function will not be called.
  }
);

// GET /auth/github/callback
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  If authentication fails, the user will be redirected back to the
//   login page.  Otherwise, the primary route function will be called,
//   which, in this example, will redirect the user to the home page.
router.get('/auth/github/callback',
  passport.authenticate('github', { failureRedirect: '/login' }),
  function (req, res) {
    res.send(req.user);
  }
);

router.get('/api/', function (req, res) {
  res.sendFile(path.join(__dirname, '../../public/api.html'));
});

router.post('/api/resources', ensureAuthenticated, function (req, res) {
  db.Resource.create({
    title: req.body.title,
    description: req.body.description,
    link: req.body.description
  }).then(function (result) {
    res.sendStatus(201);
    res.end();
  });
});

router.get('/api/resources/:page?', function (req, res) {
  let limit = 10;
  let offset = 0;
  let page = 1;

  db.Resource.findAndCountAll().then(function (data) {
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
    }).then((resources) => {
      res.status(200).json({
        'result': resources,
        'count': data.count,
        'pages': pages,
        'user': req.user
      });
    }).catch(function (error) {
      if (error) throw error;
      res.status(500).send('Internal Server Error');
    });
  });
});

router.get('/api/resources/:id', function (req, res) {
  db.Resource.findOne({
    where: {
      id: req.params.id
    }
  }).then(function (dbResource) {
    res.json(dbResource);
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

// Simple route middleware to ensure user is authenticated.
//   Use this route middleware on any resource that needs to be protected.  If
//   the request is authenticated (typically via a persistent login session),
//   the request will proceed.  Otherwise, the user will be redirected to the
//   login page.
function ensureAuthenticated (req, res, next) {
  if (req.isAuthenticated()) { return next(); }
  res.redirect('/login');
}

router.get('*', function (req, res, next) {
  res.sendFile(path.join(__dirname, '../../../client/dist/index.html'));
});
