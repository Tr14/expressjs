const express = require('express')
const path = require('path')
const app = express()
const router = express.Router();
const port = 1337

router.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/home_page.html'))
})

router.get('/login',function(req,res){
  res.sendFile(path.join(__dirname +'/login_page.html'));
});

app.use('/', router);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

