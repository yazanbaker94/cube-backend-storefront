'use strict';

const mechanicModel = (sequelize, DataTypes) => sequelize.define('mechanic', {
  name: { type: DataTypes.STRING, required: true },
  category: { type: DataTypes.STRING, required: true },
  description: { type: DataTypes.STRING, required: true },
  inStock: { type: DataTypes.INTEGER},
  image: { type: DataTypes.STRING, required: true },

});

module.exports = mechanicModel;