const express = require('express')
const path = require('path')
const app = express()
const port = 1337


app.use(express.static( __dirname + '/public' ));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'public', '/index.html'))
})

app.get('/login', function(req, res) {
  res.sendFile(path.join(__dirname, 'public', '/login.html'))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

