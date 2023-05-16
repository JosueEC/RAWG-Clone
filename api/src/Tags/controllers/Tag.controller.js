//! Services
const { serviceGetTagsFromAPI } = require('../services/External API RAWG/GetTags.service')

//! Handlers
const getTags = async (req, res) => {
  try {
    const tags = await serviceGetTagsFromAPI()
    res.status(302).send({ status: 'FOUND', data: tags })
  } catch (error) {
    res.status(404).send({ status: 'FAILED', error: error.message })
  }
}

module.exports = {
  getTags
}
