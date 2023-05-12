function formatSingleVideogame (objVideogame) {
  const videogame = {
    id: objVideogame.id,
    name: objVideogame.name,
    released: objVideogame.released,
    background_image: objVideogame.background_image,
    website: objVideogame.website,
    rating: objVideogame.rating,
    rating_top: objVideogame.rating_top,
    ratings: objVideogame.ratings,
    movies_count: objVideogame.movies_count,
    ratings_count: objVideogame.movies_count,
    platforms: objVideogame.platforms,
    genres: objVideogame.genres,
    tags: objVideogame.tags,
    description_raw: objVideogame.description_raw
  }
  return videogame
}

module.exports = {
  formatSingleVideogame
}
