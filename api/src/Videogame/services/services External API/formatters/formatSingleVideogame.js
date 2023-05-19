const formatter = require('./formatArrayOfVideogames')

function formatSingleVideogame (objVideogame) {
  const videogame = {
    id: objVideogame.id,
    name: objVideogame.name,
    released: objVideogame.released,
    background_image: objVideogame.background_image,
    website: objVideogame.website,
    rating: objVideogame.rating,
    rating_top: objVideogame.rating_top,
    // ratings: formatter.formatArrayOfRatings(objVideogame.ratings),
    movies_count: objVideogame.movies_count,
    ratings_count: objVideogame.movies_count,
    platforms: formatter.formatArrayOfPlatforms(objVideogame.platforms),
    genres: formatter.formatArrayOfGenres(objVideogame.genres),
    tags: formatter.formatArrayOfTags(objVideogame.tags),
    description_raw: objVideogame.description_raw
  }
  return videogame
}

// function formatArrayOfPlatforms (arrayOfPlatforms) {
//   const platforms = arrayOfPlatforms.map((item) => {
//     return {
//       id: item.platform.id,
//       name: item.platform.name,
//       image_background: item.platform.image_background
//       released_at: item.released_at,
//       requirements: item.requirements
//     }
//   })

//   return platforms
// }

module.exports = {
  formatSingleVideogame
}
