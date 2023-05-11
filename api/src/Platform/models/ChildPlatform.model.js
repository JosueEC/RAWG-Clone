const { DataTypes } = require('sequelize')

module.exports = (database) => {
  database.define('child_platform', {
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
    },
    description: {
      type: DataTypes.STRING,
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
