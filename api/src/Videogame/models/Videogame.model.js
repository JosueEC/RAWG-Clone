//! Datatypes module of sequelize
const { DataTypes } = require('sequelize')

//! Connection and define function
module.exports = (database) => {
  database.define('videogame', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      allowNull: false,
      primaryKey: true,
      validate: {
        notEmpty: {
          msg: 'videogame ID cannot be empty'
        }
      }
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: {
          msg: 'videogame name cannot be empty'
        },
        isLowercase: {
          msg: 'videogame name must be lowercase'
        },
        len: {
          args: [2, 50],
          msg: 'videogame name must be betweeen 2 and 50 characters'
        }
      }
    },
    slug: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: {
          msg: 'vidoegame slug cannot be empty'
        },
        isLowercase: {
          msg: 'videogame slug must be lowercase'
        },
        len: {
          args: [2, 50],
          msg: 'videogame slug must be between 2 and 50 characters'
        }
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
