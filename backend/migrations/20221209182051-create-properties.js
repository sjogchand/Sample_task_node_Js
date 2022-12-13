'use strict'
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('properties', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      description: {
        type: Sequelize.STRING,
      },
      property_image: {
        type: Sequelize.STRING,
      },
      price: {
        type: Sequelize.STRING,
      },
      area: {
        type: Sequelize.STRING,
      },
      configuration: {
        type: Sequelize.STRING,
      },
      year_built: {
        type: Sequelize.STRING,
      },
      security: {
        type: Sequelize.STRING,
      },
      kid_safe: {
        type: Sequelize.STRING,
      },
      parking: {
        type: Sequelize.STRING,
      },
      top_amenities: {
        type: Sequelize.STRING,
      },
      amenities: {
        type: Sequelize.STRING,
      },
      address: {
        type: Sequelize.STRING,
      },
      city: {
        type: Sequelize.STRING,
      },
      country: {
        type: Sequelize.STRING,
      },
      status: {
        type: Sequelize.INTEGER, // 0 - inactive user, 1 - active user,
        //2 - hard delete (we might put status 2 instead of delete query. when any employee will be permanently deleted)
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('properties')
  },
}
