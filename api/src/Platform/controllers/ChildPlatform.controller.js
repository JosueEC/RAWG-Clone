//! Services
const { serviceGetChildPlatfromsFromAPI } = require('../services/services External API/GetChildPlatforms.service')
const { serviceGetChildPlatformsFromDatabase } = require('../services/services Database/GetChildPlatforms.service')
const { serviceSaveChildPlatformsInDatabase } = require('../services/services Database/SaveChildPlatforms.service')

//! Handlers
const getChildPlatforms = async (req, res) => {
  try {
    const childPlatformsFromDatabase = await serviceGetChildPlatformsFromDatabase()

    if (childPlatformsFromDatabase.length !== 0) {
      res.status(302).send({ status: 'FOUND', data: childPlatformsFromDatabase })
    } else {
      const childPlatforms = await serviceGetChildPlatfromsFromAPI()
      serviceSaveChildPlatformsInDatabase(childPlatforms)

      res.status(201).send({ status: 'CREATED', data: childPlatforms })
    }
  } catch (error) {
    res.status(404).send({ status: 'FAILED', error: error.message })
  }
}

module.exports = {
  getChildPlatforms
}
