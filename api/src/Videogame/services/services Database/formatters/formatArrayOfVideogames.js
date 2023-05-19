function formatArrayOfVideogames (arrayOfVideogames) {
  const videogames = arrayOfVideogames.map((videogame) => {
    return {
      id: videogame.id,
      slug: videogame.slug,
      name: videogame.name,
      released: videogame.released,
      background_image: videogame.background_image,
      rating: videogame.rating,
      rating_top: videogame.rating_top,
      platforms: formatArrayOfPlatforms(videogame.childPlatforms),
      genres: formatArrayOfGenres(videogame.genres),
      tags: formatArrayOfTags(videogame.tags)
    }
  })
  return videogames
}

function formatArrayOfPlatforms (arrayOfPlatforms) {
  const platforms = []
  arrayOfPlatforms.forEach((platform) => {
    platforms.push(platform.slug)
  })
  return platforms
}

function formatArrayOfGenres (arrayOfGenres) {
  const genres = []
  arrayOfGenres.forEach((genre) => {
    genres.push(genre.slug)
  })
  return genres
}

function formatArrayOfTags (arrayOfTags) {
  const tags = []
  arrayOfTags.forEach((tag) => {
    tags.push(tag.slug)
  })
  return tags
}

module.exports = {
  formatArrayOfVideogames
}
