function formatVideogame (videogame) {
  const game = {
    id: videogame.id,
    name: videogame.name,
    slug: videogame.slug,
    released: videogame.released,
    background_image: videogame.background_image,
    website: videogame.website,
    rating: videogame.rating,
    rating_top: videogame.rating_top,
    movies_count: videogame.movies_count,
    ratings_count: videogame.ratings_count,
    platforms: videogame.childPlatforms.map((platform) => platform.name),
    genres: videogame.genres.map((genre) => genre.name),
    tags: videogame.tags.map((tag) => tag.name),
    description_raw: videogame.description_raw
  }
  return game
}

module.exports = {
  formatVideogame
}
