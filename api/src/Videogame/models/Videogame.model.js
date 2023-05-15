//! Datatypes module of sequelize
const { DataTypes } = require('sequelize')

//! Connection and define function
module.exports = (database) => {
  database.define('videogame', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true,
      validate: {
        isUUid: true
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
    released: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: /^\\d{4}-\\d{2}-\\d{2}$/i
      }
    },
    background_image: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isUrl: true
      }
    },
    website: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isUrl: true
      }
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      validate: {
        isNumeric: true,
        isInt: true
      }
    },
    rating_top: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      validate: {
        isNumeric: true,
        isInt: true
      }
    },
    movies_count: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      validate: {
        isNumeric: true,
        isInt: true
      }
    },
    ratings_count: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      validate: {
        isNumeric: true,
        isInt: true
      }
    },
    description_raw: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: 'No Description',
      validate: {
        len: [10, 1600]
      }
    }
  }, {
    timestamps: false
  })
}
