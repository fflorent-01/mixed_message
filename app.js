const express = require('express')
const app = express()
const port = process.env.PORT || 8081;

app.use(express.static('static'))
// app.use(express.static('static/js'))


app.listen(port, () => {
    console.log(`Server started listening on port: ${port}`)
  })
