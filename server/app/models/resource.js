module.exports = function (sequelize, DataTypes) {
  var Resource = sequelize.define('Resource', {
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
  }, {
    classMethods: {
      associate: function (models) {
        Resource.belongsTo(models.User);
        Resource.hasMany(models.Tag);
      }
    }
  });

  return Resource;
};
