const fs = require('fs')
const exif = require('./../modules/exif')
require('./../config')

fs.readdir(`${imagesRoot}`, (err, files) => {
  for (let file of files) {
    exif.write(`${file}`)
  }
})
