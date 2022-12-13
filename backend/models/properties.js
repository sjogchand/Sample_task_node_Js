'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class properties extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  properties.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      description: {
        type: DataTypes.STRING,
      },
      property_image: {
        type: DataTypes.STRING,
      },
      price: {
        type: DataTypes.STRING,
      },
      area: {
        type: DataTypes.STRING,
      },
      configuration: {
        type: DataTypes.STRING,
      },
      year_built: {
        type: DataTypes.STRING,
      },
      security: {
        type: DataTypes.STRING,
      },
      kid_safe: {
        type: DataTypes.STRING,
      },
      parking: {
        type: DataTypes.STRING,
      },
      top_amenities: {
        type: DataTypes.STRING,
      },
      amenities: {
        type: DataTypes.STRING,
      },
      address: {
        type: DataTypes.STRING,
      },
      city: {
        type: DataTypes.STRING,
      },
      country: {
        type: DataTypes.STRING,
      },
      status: {
        type: DataTypes.INTEGER, // 0 - inactive user, 1 - active user,
        //2 - hard delete (we might put status 2 instead of delete query. when any employee will be permanently deleted)
      },
    },
    {
      sequelize,
      modelName: 'properties',
      underscored: true,
    },
  )
  return properties
}
