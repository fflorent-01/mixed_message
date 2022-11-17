const express = require('express')
const app = express()
const port = process.env.PORT || 8081;

app.use(express.static('static'))

app.listen(port, () => {
    console.log(`Server started listening on port: ${port}`)
  })
