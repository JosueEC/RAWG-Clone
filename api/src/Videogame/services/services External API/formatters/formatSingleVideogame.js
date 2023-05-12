function formatSingleVideogame (objVideogame) {
  const videogame = {
    id: objVideogame.id,
    name: objVideogame.name,
    released: objVideogame.released,
    background_image: objVideogame.background_image,
    website: objVideogame.website,
    rating: objVideogame.rating,
    rating_top: objVideogame.rating_top,
    ratings: formatArrayOfRatings(objVideogame.ratings),
    movies_count: objVideogame.movies_count,
    ratings_count: objVideogame.movies_count,
    platforms: formatArrayOfPlatforms(objVideogame.platforms),
    genres: objVideogame.genres,
    tags: objVideogame.tags,
    description_raw: objVideogame.description_raw
  }
  return videogame
}

function formatArrayOfRatings (arrayOfRatings) {
  const ratings = arrayOfRatings.map((rating) => {
    return {
      id: rating.id,
      title: rating.title,
      count: rating.count
    }
  })
  return ratings
}

function formatArrayOfPlatforms (arrayOfPlatforms) {
  const platforms = arrayOfPlatforms.map((item) => {
    return {
      id: item.platform.id,
      name: item.platform.name,
      image_background: item.platform.image_background,
      released_at: item.released_at,
      requirements: item.requirements
    }
  })

  return platforms
}

module.exports = {
  formatSingleVideogame
}
