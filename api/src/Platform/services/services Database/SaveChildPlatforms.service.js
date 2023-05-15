//! Models
const { childPlatform } = require('../../../database/database')

//! Service
const serviceSaveChildPlatformsInDatabase = async (arrayOfChildPlatforms) => {
  await childPlatform.bulkCreate(arrayOfChildPlatforms)
}

module.exports = {
  serviceSaveChildPlatformsInDatabase
}
