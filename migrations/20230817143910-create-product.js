'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      imagePath: {
        type: Sequelize.STRING
      },
      oldPrice: {
        type: Sequelize.FLOAT
      },
      price: {
        type: Sequelize.FLOAT
      },
      summary: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      specification: {
        type: Sequelize.STRING
      },
      stars: {
        type: Sequelize.DECIMAL
      },
      quantity: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      brandId: {
        type: Sequelize.INTEGER,
        references:{
          model: 'Brands',
          key: 'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      },
      categoryId: {
        type: Sequelize.INTEGER,
        references:{
          model: 'Categories',
          key: 'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Products');
  }
};