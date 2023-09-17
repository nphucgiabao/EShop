'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Order.belongsTo(models.User, {foreignKey: 'userId'});
      Order.belongsToMany(model.Product, {through: models.OrderDetails, foreignKey: 'orderId', otherKey: 'ProductId'});
    }
  }
  Order.init({
    quantity: DataTypes.INTEGER,
    total: DataTypes.FLOAT,
    subtotal: DataTypes.FLOAT,
    shipping: DataTypes.FLOAT,
    discount: DataTypes.FLOAT,
    couponCode: DataTypes.STRING,
    shippingAddress: DataTypes.STRING,
    paymentMethod: DataTypes.STRING,
    paymentDetails: DataTypes.STRING,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};