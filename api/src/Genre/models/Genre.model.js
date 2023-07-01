//! Datatypes module of sequelize
const { DataTypes } = require('sequelize')

//! Connection and define function
module.exports = (database) => {
  database.define('genre', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: {
          msg: 'genre ID cannot be empty'
        },
        isNumeric: {
          msg: 'genre ID must be a valid numerical value'
        },
        isInt: {
          msg: 'genre ID must be a valid integer'
        }
      }
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: {
          msg: 'genre name cannot be empty'
        },
        len: {
          args: [2, 50],
          msg: 'genre name must be between 2 and 50 characters in length'
        }
      }
    },
    slug: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: {
          msg: 'genre slug cannot be empty'
        },
        isLowercase: {
          msg: 'genre slug must be lowercase'
        },
        len: {
          args: [2, 50],
          msg: 'genre slug muste be between 2 and 50 characters in length'
        }
      }
    },
    games_count: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      validate: {
        notEmpty: {
          msg: 'genre games_count cannot be empty'
        },
        isNumeric: {
          msg: 'genre games_count must be numerical value'
        },
        isInt: {
          msg: 'genre games_count must be a valid integer'
        }
      }
    },
    image_background: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'genre image_background cannot be empty'
        },
        isUrl: {
          msg: 'genre image_background must be an valid URL image'
        }
      }
    }
  }, {
    timestamps: false,
    freezeTableName: true
  })
}
