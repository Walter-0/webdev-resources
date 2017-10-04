const path = require('path');
const rootPath = path.normalize(path.join(__dirname, '/..'));
const env = process.env.NODE_ENV || 'development';

const config = {
  development: {
    root: rootPath,
    app: {
      name: 'projects'
    },
    port: process.env.PORT || 3000,
    db: `mysql://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:3306/webdev_db`
  },

  test: {
    root: rootPath,
    app: {
      name: 'projects'
    },
    port: process.env.PORT || 3000,
    db: `mysql://${process.env.DB_USER}@${process.env.DB_HOST}/webdev-test`
  },

  production: {
    root: rootPath,
    app: {
      name: 'projects'
    },
    port: process.env.PORT || 3000,
    db: `mysql://${process.env.DB_USER}@${process.env.DB_HOST}/webdev-production`
  }
};

module.exports = config[env];
