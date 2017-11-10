const express = require('express');
const router = express.Router();
const db = require('../models');
const path = require('path');
const request = require('request');
const simpleOauthModule = require('simple-oauth2');

module.exports = function (app) {
  app.use('/', router);
};

// Initialize the OAuth2 Library
const oauth2 = simpleOauthModule.create({
  client: {
    id: process.env.GH_CLIENT_ID,
    secret: process.env.GH_SECRET
  },
  auth: {
    tokenHost: 'https://github.com',
    tokenPath: '/login/oauth/access_token',
    authorizePath: '/login/oauth/authorize'
  }
});

// Authorization oauth2 URI
const authorizationUri = oauth2.authorizationCode.authorizeURL({
  redirect_uri: 'http://localhost:3000/callback',
  scope: 'user:email'
});

router.get('/auth', function (req, res) {
  res.redirect(authorizationUri);
});

router.get('/callback', function (req, res, next) {
  let endpoint;
  const code = req.query.code;
  const options = {
    code
  };

  oauth2.authorizationCode.getToken(options)
    .then((result) => {
      result.expires_at = Date.now() * 100;
      return oauth2.accessToken.create(result);
    })
    .then((token) => {
      const options = {
        'url': `https://api.github.com/user?access_token=${token.token.access_token}`,
        'json': true,
        'headers': {
          'Authorization': `Bearer ${token.token.access_token}`,
          'User-Agent': 'webdev-resources',
          'Accept': 'application/vnd.github.v3+json'
        }
      };
      request
        .get(options)
        .on('response', function (githubResponse) {
          endpoint = githubResponse.request.uri.href;
          // we need to make a GET request to this endpoint and get user data
        });
      console.log(endpoint);
    })
    .catch((error) => {
      console.log('Access Token Error', error.message);
    });
});

router.get('/hello', function (req, res) {
  res.render('hello', {
    name: 'bilbo',
    token: 'your token here',
    email: 'your github email'
  });
});

router.get('/login', function (req, res) {
  res.send('Hello<br><a href="/auth">Log in with Github</a>');
});

router.get('/api/', function (req, res) {
  res.sendFile(path.join(__dirname, '../../public/api.html'));
});

router.post('/api/resources', function (req, res, next) {
  console.log(req.body);
});

// Resource
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

router.get('/api/resources/:id', function (req, res) {
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
router.get('/api/tags', function (req, res) {
  db.Tag.findAll({}).then(function (dbTags) {
    res.json(dbTags);
  });
});

router.get('/api/tags/:id', function (req, res) {
  db.Tag.findOne({
    where: {
      id: req.params.id
    }
  }).then(function (dbdbTag) {
    res.json(dbdbTag);
  });
});

// User
router.get('/api/users', function (req, res) {
  db.User.findAll({}).then(function (dbUser) {
    res.json(dbUser);
  });
});

router.get('/api/users/:id', function (req, res) {
  db.User.findOne({
    where: {
      id: req.params.id
    }
  }).then(function (dbUsers) {
    res.json(dbUsers);
  });
});
