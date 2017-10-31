const exiftool = require('node-exiftool')
const fs = require('fs')
const fileExtension = require('file-extension')
const path = require('path')
const ep = new exiftool.ExiftoolProcess()

require('../config')

/*
ep
  .open()
  .then(() => ep.writeMetadata('public/images/Chicago_lighthouse.jpg', {
    all: '', // remove existing tags
    comment: 'Exiftool rules!',
    'Keywords+': [ 'keywordA', 'keywordB' ],
  }, ['overwrite_original']))
  .then(console.log, console.error)
  .then(() => ep.close())
  .catch(console.error)
*/

module.exports.writeExif = (file) => {
  ep
    .open()
    // display pid
    .then((pid) => console.log('Started exiftool process %s', pid))
    .then(() => ep.readMetadata(file, ['-File:all']))
    .then((data) => {
      this.writeFile(file, data)
    })
    .then(() => ep.close())
    .then(() => console.log('Closed exiftool'))
    .catch(console.error)

}

module.exports.writeFile = (file, data) => {
  return new Promise((resolve, reject) => {
    let extension = fileExtension(file)
    let nameFile = path.basename(file, `.${extension}`)
    fs.writeFile(`${imagesRoot}/${nameFile}.json`, JSON.stringify(data), (err) => {
      if (err) {
        reject(err)
      }
      resolve()
    })
  })
}

module.exports.getExifFromFile = (file) => {
  return JSON.parse(fs.readFileSync(file, 'utf-8'))
}

