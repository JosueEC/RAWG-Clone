function formatSingleVideogame (objVideogame) {
  const videogame = {
    id: objVideogame.id,
    name: objVideogame.name,
    released: objVideogame.released,
    background_image: objVideogame.background_image,
    website: objVideogame.website,
    rating: objVideogame.rating,
    rating_top: objVideogame.rating_top,
    movies_count: objVideogame.movies_count,
    ratings_count: objVideogame.movies_count,
    platforms: objVideogame.platforms.map((itemPlatform) => itemPlatform.platform.name),
    genres: objVideogame.genres.map((genre) => genre.name),
    tags: objVideogame.tags.map((tag) => tag.name),
    description_raw: objVideogame.description_raw
  }
  return videogame
}

module.exports = {
  formatSingleVideogame
}
