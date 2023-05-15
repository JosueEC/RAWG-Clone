const getChildPlatforms = async (req, res) => {
  try {
    res.status(200).send('handler controller /child-platforms')
  } catch (error) {
    res.status(404).send({ status: 'FAILED', error: error.message })
  }
}

module.exports = {
  getChildPlatforms
}
