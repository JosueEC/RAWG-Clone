//! Datatypes model from sequelize
const { DataTypes } = require('sequelize')

//! Connection and define function
module.exports = (database) => {
  database.define('tag', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'tag ID cannot be empty'
        },
        isNumeric: {
          msg: 'tag ID must be a numerical value'
        },
        isInt: {
          msg: 'tag ID must be a valid integer'
        }
      }
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: {
          msg: 'tag name cannot be empty'
        },
        isLowercase: {
          msg: 'tag name must be lowercase'
        },
        len: {
          args: [2, 50],
          msg: 'tag name must be between 2 and 50 characters in lenght'
        }
      }
    },
    slug: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: {
          msg: 'tag slug cannot be empty'
        },
        isLowercase: {
          msg: 'tag slug must be lowercase'
        },
        len: {
          args: [2, 50],
          msg: 'tag slug must be between 2 and 50 characters in lenght'
        }
      }
    },
    games_count: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      validate: {
        notEmpty: {
          msg: 'tag games count cannot be empty'
        },
        isNumeric: {
          msg: 'tag games count must be a numerical value'
        },
        isInt: {
          msg: 'tag games count must be a valid integer'
        }
      }
    },
    image_background: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: {
          msg: 'tag image cannot be empty'
        },
        isUrl: {
          msg: 'tag image must be a valid image URL'
        }
      }
    }
  }, {
    timestamps: false,
    freezeTableName: true
  })
}
