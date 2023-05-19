const { ORIGIN_CONST } = require('../../../../../consts')

function formatArrayOfVideogames (arrayOfVideogames) {
  const results = arrayOfVideogames.results.map((videogame) => {
    return {
      id: videogame.id,
      slug: videogame.slug,
      name: videogame.name,
      origin: ORIGIN_CONST.RAWG,
      released: videogame.released,
      background_image: videogame.background_image,
      rating: videogame.rating,
      rating_top: videogame.rating_top,
      platforms: videogame.platforms.map((itemPlatform) => itemPlatform.platform.slug),
      genres: videogame.genres.map((genre) => genre.slug),
      tags: videogame.tags.map((tag) => tag.slug)
    }
  })

  return results
}

module.exports = {
  formatArrayOfVideogames
}
