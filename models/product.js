'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.belongsTo(models.Category);
      Product.belongsTo(models.Brand);
    }
  }
  Product.init({
    name: DataTypes.STRING,
    imagePath: DataTypes.STRING,
    oldPrice: DataTypes.FLOAT,
    price: DataTypes.FLOAT,
    summary: DataTypes.STRING,
    description: DataTypes.STRING,
    specification: DataTypes.STRING,
    stars: DataTypes.DECIMAL,
    quantity: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};