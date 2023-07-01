//! Datatypes module of sequelize
const { DataTypes } = require('sequelize')

//! Connection and define function
module.exports = (database) => {
  database.define('parent_platform', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      allowNull: false,
      primaryKey: true,
      validate: {
        notEmpty: {
          msg: 'parentPlaform ID cannot be empty'
        },
        isUUid: {
          msg: 'parentPlatform ID must be a valid UUID'
        }
      }
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: {
          msg: 'parentPlatform name cannot be empty'
        },
        isLowercase: {
          msg: 'parentPaltform name must be lowercase'
        },
        len: {
          args: [2, 50],
          msg: 'parentPlatform name must be between 2 and 50 characters in length'
        }
      }
    },
    slug: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: {
          msg: 'parentPlatform slug cannot be empty'
        },
        isLowercase: {
          msg: 'parentPlatform slug must be lowercase'
        },
        len: {
          args: [2, 50],
          msg: 'parentPlatform slug must be between 2 and 50 characters in length'
        }
      }
    }
  }, {
    timestamps: false,
    freezeTableName: true
  })
}
