'use strict';

const architectModel = (sequelize, DataTypes) => sequelize.define('architect', {
  name: { type: DataTypes.STRING, required: true },
  category: { type: DataTypes.STRING, required: true },
  description: { type: DataTypes.STRING, required: true },
  inStock: { type: DataTypes.INTEGER},
});

module.exports = architectModel;