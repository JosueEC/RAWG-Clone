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
      ratings: formatArrayOfRatings(videogame.ratings),
      platforms: formatArrayOfPlatforms(videogame.platforms),
      genres: formatArrayOfGenres(videogame.genres),
      tags: formatArrayOfTags(videogame.tags)
    }
  })

  const newFormat = {
    next: arrayOfVideogames.next,
    previous: arrayOfVideogames.previous,
    results
  }

  return newFormat
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
      name: item.platform.name,
      slug: item.platform.slug,
      released_at: item.released_at
    }
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
  formatArrayOfVideogames,
  formatArrayOfRatings,
  formatArrayOfGenres,
  formatArrayOfTags
}
