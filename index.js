const express = require('express')
const path = require('path')
const app = new express()
const port = 1337

app.use(express.static('/public'))

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/index.html'))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

