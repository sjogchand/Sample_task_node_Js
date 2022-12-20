'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class contact_us extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  contact_us.init(
    {
      full_name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      email: {
        type: DataTypes.STRING,
      },
      phone: {
        type: DataTypes.STRING,
      },
      area: {
        type: DataTypes.STRING,
      },
      status: {
        type: DataTypes.INTEGER, // 0 - inactive user, 1 - active user,
        //2 - hard delete (we might put status 2 instead of delete query. when any employee will be permanently deleted)
      },
    },
    {
      sequelize,
      modelName: 'contact_us',
      underscored: true,
    },
  )
  return contact_us
}
