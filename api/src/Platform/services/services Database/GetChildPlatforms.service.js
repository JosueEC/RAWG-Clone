const { childPlatform } = require('../../../database/database')

const serviceGetChildPlatformsFromDatabase = async () => {
  const childPlatforms = await childPlatform.findAll()
  return childPlatforms
}

module.exports = {
  serviceGetChildPlatformsFromDatabase
}
