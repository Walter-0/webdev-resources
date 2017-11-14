const path = require('path');
const rootPath = path.normalize(__dirname + '/..');
const env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'projects'
    },
    port: process.env.PORT || 3000,
    db: `mysql://${process.env.DB_USER}:${process.env.DB_PASS}@localhost:3306/webdev_db`
  },

  test: {
    root: rootPath,
    app: {
      name: 'projects'
    },
    port: process.env.PORT || 3000,
    db: 'mysql://root@localhost/projects-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'projects'
    },
    port: process.env.PORT || 3000,
    db: `${process.env.JAWSDB_URL}`
  }
};

module.exports = config[env];
