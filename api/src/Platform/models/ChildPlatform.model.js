//! Datatypes module of sequelize
const { DataTypes } = require('sequelize')

//! Connection and define function
module.exports = (database) => {
  database.define('childPlatform', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      validate: {
        isNumeric: true,
        isInt: true
      }
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: [2, 50]
      }
    },
    slug: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: [2, 50]
      }
    },
    games_count: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      validate: {
        isNumeric: true,
        isInt: true
      }
    },
    image_background: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isUrl: true
      }
    }
  }, {
    timestamps: false
  })
}
