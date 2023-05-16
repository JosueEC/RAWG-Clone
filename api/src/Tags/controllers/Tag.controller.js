//! Services
const { serviceGetTagsFromAPI } = require('../services/External API RAWG/GetTags.service')
const { serviceGetTagsFromDatabase } = require('../services/Local Database/GetTags.service')
const { serviceSaveTagsInDatabase } = require('../services/Local Database/SaveTags.service')

//! Handlers
const getTags = async (req, res) => {
  try {
    const tagsFromDatabase = await serviceGetTagsFromDatabase()

    if (tagsFromDatabase.length !== 0) {
      res.status(302).send({ status: 'FOUND', data: tagsFromDatabase })
    } else {
      const tags = await serviceGetTagsFromAPI()
      serviceSaveTagsInDatabase(tags)

      res.status(201).send({ status: 'CREATED', data: tags })
    }
  } catch (error) {
    res.status(404).send({ status: 'FAILED', error: error.message })
  }
}

module.exports = {
  getTags
}
