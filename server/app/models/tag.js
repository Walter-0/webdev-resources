module.exports = function (sequelize, DataTypes) {
  const Tag = sequelize.define('Tag', {
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
    }
  }, {
    classMethods: {
      associate: function (models) {
        Tag.belongsTo(models.Resource);
      }
    }
  });
  return Tag;
};
