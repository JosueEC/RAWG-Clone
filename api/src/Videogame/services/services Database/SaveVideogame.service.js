//! Models
const { videogame } = require('../../../database/database')

//! Service
/* eslint-disable camelcase */
const serviceSaveVideogameInDatabase = async ({ id, name, released, background_image, website, rating, rating_top, ratings, movies_count, ratings_count, platforms, genres, tags, description_raw }) => {
  const newVideogame = await videogame.create({
    id,
    name,
    released,
    background_image,
    website,
    rating,
    rating_top,
    ratings,
    movies_count,
    ratings_count,
    genres,
    tags,
    description_raw
  })

  newVideogame.addChildPlatforms(platforms)
  return newVideogame
}

module.exports = {
  serviceSaveVideogameInDatabase
}
