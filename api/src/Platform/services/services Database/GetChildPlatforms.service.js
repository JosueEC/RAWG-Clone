//! Models
const { childPlatform } = require('../../../database/database')

//! Service
const serviceGetChildPlatformsFromDatabase = async () => {
  const childPlatforms = await childPlatform.findAll()
  return childPlatforms
}

module.exports = {
  serviceGetChildPlatformsFromDatabase
}
