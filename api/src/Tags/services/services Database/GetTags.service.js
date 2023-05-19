//! Models
const { tag } = require('../../../database/database')

//! Service
const serviceGetTagsFromDatabase = async () => {
  const tags = await tag.findAll()
  return tags
}

module.exports = {
  serviceGetTagsFromDatabase
}
