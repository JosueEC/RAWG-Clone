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
      platforms: videogame.childPlatforms.map((platform) => platform.slug),
      genres: videogame.genres.map((genre) => genre.slug),
      tags: videogame.tags.map((tag) => tag.slug)
    }
  })
  return videogames
}

module.exports = {
  formatArrayOfVideogames
}
