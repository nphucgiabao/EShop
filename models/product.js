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
      Product.belongsTo(models.Category, {foreignKey: 'categoryId'});
      Product.belongsTo(models.Brand, {foreignKey: 'brandId'});
      Product.belongsToMany(models.Order, {through: models.OrderDetails, foreignKey: 'productId', otherKey: 'orderId'});
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
    stars: DataTypes.SMALLINT,
    quantity: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};