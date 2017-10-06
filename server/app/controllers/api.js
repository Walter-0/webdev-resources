const express = require('express');
const router = express.Router();
const db = require('../models');
const path = require('path');
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

router.get('/auth', function (req, res, next) {
  // pass the github tokens to the client
  console.log(authorizationUri);
  res.redirect(authorizationUri);
});

router.get('/callback', function (req, res, next) {
  const code = req.query.code;
  const options = {
    code
  };

  oauth2.authorizationCode.getToken(options, (error, result) => {
    if (error) {
      console.error('Access Token Error', error.message);
      return res.json('Authentication failed');
    }

    result.expires_at = Date.now() * 100;
    const token = oauth2.accessToken.create(result);
  });
});

router.get('/login', (req, res) => {
  res.send('Hello<br><a href="/auth">Log in with Github</a>');
});

router.get('/api/', function (req, res, next) {
  res.sendFile(path.join(__dirname, '../../public/api.html'));
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
