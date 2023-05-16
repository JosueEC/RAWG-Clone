//! Models
const { tag } = require('../../../../consts')

//! Service
const serviceGetTagsFromDatabase = async () => {
  const tags = await tag.findAll()
  return tags
}

module.exports = {
  serviceGetTagsFromDatabase
}
