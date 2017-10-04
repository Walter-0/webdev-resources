module.exports = function (sequelize, DataTypes) {
  var TaggedResource = sequelize.define('TaggedResource', {
    resource_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    tag_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });

  return TaggedResource;
};
