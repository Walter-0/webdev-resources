var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'projects'
    },
    port: process.env.PORT || 3000,
    db: 'mysql://localhost/projects-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'projects'
    },
    port: process.env.PORT || 3000,
    db: 'mysql://localhost/projects-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'projects'
    },
    port: process.env.PORT || 3000,
    db: 'mysql://localhost/projects-production'
  }
};

module.exports = config[env];
