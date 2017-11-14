module.exports = function (sequelize, DataTypes) {
  const Resource = sequelize.define('Resource', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    link: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  return Resource;
};
