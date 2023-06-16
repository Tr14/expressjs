const express = require('express')
const app = express()
const port = 1337

app.use(express.static('public'))

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/home_page.html'));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

