//! Services
const { serviceGetChildPlatfromsFromAPI } = require('../services/services External API/GetChildPlatforms.service')

//! Handlers
const getChildPlatforms = async (req, res) => {
  try {
    const childPlatformsFromDatabase = serviceGetChildPlatformsFromDatabase()
    const childPlatforms = await serviceGetChildPlatfromsFromAPI()
    res.status(302).send({ status: 'FOUND', data: childPlatforms })
  } catch (error) {
    res.status(404).send({ status: 'FAILED', error: error.message })
  }
}

module.exports = {
  getChildPlatforms
}
