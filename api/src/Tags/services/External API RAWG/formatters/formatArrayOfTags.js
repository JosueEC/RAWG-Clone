function formatArrayOfTags (arrayOgTags) {
  const tags = arrayOgTags.results.map((tag) => {
    return {
      id: tag.id,
      name: tag.name,
      slug: tag.slug,
      games_count: tag.games_count,
      image_background: tag.image_background
    }
  })
  return tags
}

module.exports = {
  formatArrayOfTags
}
