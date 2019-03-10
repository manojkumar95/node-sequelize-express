'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sensor = sequelize.define('Sensor', {
    sensorId: DataTypes.DOUBLE,
    id: {
      type: DataTypes.DOUBLE,
      autoIncrement: false,
      allowNull: false,
      primaryKey: true
    },
  });

  Sensor.associate = models => {
    models.Sensor.hasMany(models.DataFeed, {
      onDelete: "CASCADE",
      foreignKey: {
        type: DataTypes.DOUBLE,
        autoIncrement: false,
        allowNull: false
      }
    });
  };

  return Sensor;
};
