//! Datatypes module of sequelize
const { DataTypes } = require('sequelize')

//! Connection and define function
module.exports = (database) => {
  database.define('childPlatform', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'child platform ID cannot be empty'
        },
        isNumeric: {
          msg: 'child platform ID must be a numerical value'
        },
        isInt: {
          msg: 'child platform ID must be a valid integer'
        }
      }
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: {
          msg: 'child platform name cannot be empty'
        },
        isLowercase: {
          msg: 'child platform name must be lowercase'
        },
        len: {
          args: [2, 50],
          msg: 'child platform name must be between 2 and 50 characters'
        }
      }
    },
    slug: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: {
          msg: 'child platform slug cannot be empty'
        },
        isLowercase: {
          msg: 'child platform slug must be lowercase'
        },
        len: {
          args: [2, 50],
          msg: 'child platform slug must be between 2 and 50 characters in length'
        }
      }
    },
    games_count: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      validate: {
        notEmpty: {
          msg: 'child platform games count cannot be empty'
        },
        isNumeric: {
          msg: 'child platform games count must be a numerical value'
        },
        isInt: {
          msg: 'child platform games count muste be a valid integer'
        }
      }
    },
    image_background: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'child platform image cannot be empty'
        },
        isUrl: {
          msg: 'child platform image must be a valida image URL'
        }
      }
    }
  }, {
    timestamps: false,
    freezeTableName: true
  })
}
