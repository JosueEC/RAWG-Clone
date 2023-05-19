//! Models
const { tag } = require('../../../database/database')

//! Service
const serviceSaveTagsInDatabase = async (arrayOfTags) => {
  await tag.bulkCreate(arrayOfTags)
}

module.exports = {
  serviceSaveTagsInDatabase
}
