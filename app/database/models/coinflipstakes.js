'use strict';
module.exports = (sequelize, DataTypes) => {
  const CoinflipStakes = sequelize.define('CoinflipStakes', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    user: DataTypes.BIGINT,
    total: DataTypes.INTEGER,
    stake: DataTypes.JSON,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {});
  CoinflipStakes.associate = function(models) {
    // associations can be defined here
  };
  return CoinflipStakes;
};