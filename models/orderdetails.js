'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OrderDetails extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      OrderDetails.belongsTo(models.Product, {foreignKey: 'productId'});
    }
  }
  OrderDetails.init({
    quantity: DataTypes.INTEGER,
    price: DataTypes.FLOAT,
    total: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'OrderDetails',
  });
  return OrderDetails;
};