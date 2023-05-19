//! Envoironment variables and Sequelize module
require('dotenv').config()
const { Sequelize } = require('sequelize')

//! Connection variables
const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME } = process.env

//! .define() functions
const defineModelVideogame = require('../Videogame/models/Videogame.model')
const defineModelGenre = require('../Genre/models/Genre.model')
const defineModelParentPlatform = require('../Platform/models/ParentPlatform.model')
const defineModelChildPlatform = require('../Platform/models/ChildPlatform.model')
const defineModelTag = require('../Tags/models/Tag.model')

//! Database connection
const database = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`, {
  logging: false,
  native: false
})

//! Models/Tables creation
defineModelVideogame(database)
defineModelGenre(database)
defineModelParentPlatform(database)
defineModelChildPlatform(database)
defineModelTag(database)

//! Models import
const { videogame, genre, childPlatform, tag } = database.models

//! Relationships establishment

//! Many-To-Many
videogame.belongsToMany(genre, { through: 'game-genre' })
genre.belongsToMany(videogame, { through: 'game-genre' })

//! Many-To-Many
videogame.belongsToMany(childPlatform, { through: 'game-childPlatform' })
childPlatform.belongsToMany(videogame, { through: 'game-childPlatform' })

//! Many-To-Many
videogame.belongsToMany(tag, { through: 'game-tag' })
tag.belongsToMany(videogame, { through: 'game-tag' })

module.exports = {
  database,
  ...database.models
}
