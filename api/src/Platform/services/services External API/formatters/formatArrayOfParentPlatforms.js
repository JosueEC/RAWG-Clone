function formatArrayOfParentPlatforms (arrayOfParentPlatforms) {
  const parentPlatforms = arrayOfParentPlatforms.results.map((parentPlatform) => {
    return {
      id: parentPlatform.id,
      name: parentPlatform.name,
      slug: parentPlatform.slug
    }
  })
  return parentPlatforms
}

module.exports = {
  formatArrayOfParentPlatforms
}
