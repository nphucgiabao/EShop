'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class address extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      address.belongsTo(models.User, {foreignKey: 'userId'});
    }
  }
  address.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    mobile: DataTypes.STRING,
    address: DataTypes.STRING,
    country: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    zipCode: DataTypes.STRING,
    isDefault: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'address',
  });
  return address;
};