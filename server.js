const _ = require('lodash')
const express = require('express')

let app = express()
app.use('/public', express.static(__dirname + '/public'))
app.set('views', __dirname + '/views')
app.set('view engine', 'twig');
app.set('twig options', {
  strict_variables: false
});

app.get('/', (req, res) => {
  res.render('index', {})
})

app.get('/detail/:id', (req, res) => {
  res.render('detail', {})
})

app.get('/upload', (req, res) => {
  res.render('upload', {})
})

app.get('/documentation', (req, res) => {
  res.render('documentation', {})
})


app.listen(3000, () => {
  console.log(`Starting on 3000`)
})
