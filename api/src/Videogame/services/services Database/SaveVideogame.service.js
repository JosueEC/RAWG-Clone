//! Models
const { videogame } = require('../../../database/database')

//! Service
/* eslint-disable camelcase */
const serviceSaveVideogameInDatabase = async ({ name, slug, released, background_image, website, rating, rating_top, movies_count, ratings_count, platforms, genres, tags, description_raw }) => {
  const newVideogame = await videogame.create({
    name,
    slug,
    released,
    background_image,
    website,
    rating,
    rating_top,
    movies_count,
    ratings_count,
    description_raw
  })

  newVideogame.addChildPlatforms(platforms)
  newVideogame.addGenres(genres)
  newVideogame.addTags(tags)
  return newVideogame
}

module.exports = {
  serviceSaveVideogameInDatabase
}
