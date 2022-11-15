const express = require('express')
const app = express()
const port = process.env.PORT || 8081;

// const cors = require('cors');
// const routes = require('./routes')
// app.use(cors());
// app.use(routes);



app.use(express.static(__dirname))
console.log(__dirname)


app.listen(8000, () => {
    console.log(`Server started listening on port: ${port}`)
  })
  