const server = require('./src/server')
const { database } = require('./src/database/database')
const { SERVER_CONST } = require('./consts')

database.sync({ force: true })
  .then(() => {
    server.listen(SERVER_CONST.SERVER_PORT, () => {
      console.log('Server listening on port: ', SERVER_CONST.SERVER_PORT)
    })
  }).catch((error) => {
    console.log(error.message)
  })
