const fs = require('fs')
const exif = require('./../modules/exif')
require('./../config')

fs.readdir("public/images", (err, files) => {
  for (let file of files) {
    exif.writeExif(`${imagesRoot}/${file}`)
  }
})
