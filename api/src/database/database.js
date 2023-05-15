require('dotenv').config()
const { Sequelize } = require('sequelize')

const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME } = process.env

const defineModelVideogame = require('../Videogame/models/Videogame.model')
const defineModelGenre = require('../Genre/models/Genre.model')
const defineModelParentPlatform = require('../Platform/models/ParentPlatform.model')
const defineModelChildPlatform = require('../Platform/models/ChildPlatform.model')

const database = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`, {
  logging: false,
  native: false
})

defineModelVideogame(database)
defineModelGenre(database)
defineModelParentPlatform(database)
defineModelChildPlatform(database)

const { videogame, genre, childPlatform } = database.models

videogame.belongsToMany(genre, { through: 'videogame-genre' })
genre.belongsToMany(videogame, { through: 'videogame-genre' })

videogame.belongsToMany(childPlatform, { through: 'videogame-childPlatform' })
childPlatform.belongsToMany(videogame, { through: 'videogame-childPlatform' })

module.exports = {
  database,
  ...database.models
}
