function formatArrayOfVideogames (arrayOfVideogames) {
  const results = arrayOfVideogames.results.map((videogame) => {
    return {
      id: videogame.id,
      slug: videogame.slug,
      name: videogame.name,
      released: videogame.released,
      background_image: videogame.background_image,
      rating: videogame.rating,
      rating_top: videogame.rating_top,
      ratings: videogame.ratings,
      ratings_count: videogame.ratings_count,
      platforms: videogame.platforms,
      genres: videogame.genres,
      tags: videogame.tags,
      short_screenshots: videogame.short_screenshots
    }
  })

  const newFormat = {
    next: arrayOfVideogames.next,
    previous: arrayOfVideogames.previous,
    results
  }

  return newFormat
}

module.exports = {
  formatArrayOfVideogames
}
