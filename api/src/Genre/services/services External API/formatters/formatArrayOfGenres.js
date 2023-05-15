const formatArrayOfGenres = (arrayOfGenres) => {
  const genres = arrayOfGenres.results.map((genre) => {
    return {
      id: genre.id,
      name: genre.name,
      slug: genre.slug,
      games_count: genre.games_count,
      image_background: genre.image_background
    }
  })
  return genres
}

module.exports = {
  formatArrayOfGenres
}
