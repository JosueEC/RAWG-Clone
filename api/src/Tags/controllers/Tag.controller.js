const getTags = async (req, res) => {
  try {
    res.status(200).send('controller /tags')
  } catch (error) {
    res.status(404).send({ status: 'FAILED', error: error.message })
  }
}

module.exports = {
  getTags
}
