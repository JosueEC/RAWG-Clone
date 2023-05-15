function formatArrayOfChildPlatforms (arrayOfChildPlatforms) {
  const childPlatforms = arrayOfChildPlatforms.results.map((childPlatform) => {
    return {
      id: childPlatform.id,
      name: childPlatform.name,
      slug: childPlatform.slug,
      games_count: childPlatform.games_count,
      image_background: childPlatform.image_background
    }
  })
  return childPlatforms
}

module.exports = {
  formatArrayOfChildPlatforms
}
