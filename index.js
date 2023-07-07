const express = require('express')
const path = require('path')
const app = express()
const port = 1337


app.use(express.static( __dirname + '/public' ));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'public', '/index.html'))
})

app.get('/shop', function(req, res) {
  res.sendFile(path.join(__dirname, 'public', '/shop.html'))
})

app.get('/detail', function(req, res) {
  res.sendFile(path.join(__dirname, 'public', '/detail.html'))
})

app.get('/cart', function(req, res) {
  res.sendFile(path.join(__dirname, 'public', '/cart.html'))
})

app.get('/checkout', function(req, res) {
  res.sendFile(path.join(__dirname, 'public', '/checkout.html'))
})

app.get('/contact', function(req, res) {
  res.sendFile(path.join(__dirname, 'public', '/contact.html'))
})

app.get('/signup', function(req, res) {
  res.sendFile(path.join(__dirname, 'public', '/signup.html'))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

