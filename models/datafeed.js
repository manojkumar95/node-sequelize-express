'use strict';
module.exports = (sequelize, DataTypes) => {
  const DataFeed = sequelize.define('DataFeed', {
    latitude: DataTypes.INTEGER,
    longitude: DataTypes.INTEGER,
    moisture: DataTypes.STRING,
    color: DataTypes.STRING,
    gateway: DataTypes.STRING,
    infoId: DataTypes.INTEGER
  });

  return DataFeed;
};
