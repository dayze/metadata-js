const _ = require('lodash')
const express = require('express')

let app = express()

app.set('views', __dirname + '/views')
app.set('view engine', 'twig');
app.set('twig options', {
  strict_variables: false
});

app.get('/', (req, res) => {
  res.render('index', {})
})

app.listen(3000, () => {
  console.log(`Starting on 3000`)
})
