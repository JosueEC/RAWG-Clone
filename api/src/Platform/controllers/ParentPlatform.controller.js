//! Services
const { serviceGetParentPlatformsFromAPI } = require('../services/services External API/GetParentPlatforms.service')

//! Handlers
const getParentPlatforms = async (req, res) => {
  try {
    const platforms = await serviceGetParentPlatformsFromAPI()
    res.status(302).send({ status: 'FOUND', data: platforms })
  } catch (error) {
    res.status(404).send({ status: 'FAILED', error: error.message })
  }
}

module.exports = {
  getParentPlatforms
}
