import express from 'express'
import config from './config/index.js'
const { port } = config
const app = express()
app.listen(port, () => {
  console.log('Listening in port ' + port)
})
