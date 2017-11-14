const exiftool = require('node-exiftool')
const fs = require('fs')
const fileExtension = require('file-extension')
const path = require('path')
const ep = new exiftool.ExiftoolProcess()
const exec = require('child_process').exec

require('../config')

module.exports.write = (filePath) => {
  return new Promise((resolve) => {
    ep
      .open()
      // display pid
      .then((pid) => console.log('Started exiftool process %s', pid))
      .then(() => ep.readMetadata(`${imagesRoot}/${filePath}`, ['-File:all']))
      .then((data) => this.writeFileJson(filePath, data))
      .then(() => this.writeFileXmp(filePath))
      .then(() => ep.close())
      .then(() => console.log('Closed exiftool'))
      .then(() => resolve())
      .catch(console.error)
  })
}

module.exports.writeFileXmp = (filePath) => {
  return new Promise((resolve, reject) => {
    let extension = fileExtension(filePath)
    let nameFile = path.basename(filePath, `.${extension}`)
    exec(`exiftool -tagsfromfile ${imagesRoot}/${filePath} ${imagesRoot}/${nameFile}.xmp`,
      (error, stdout, stderr) => {
        if (error !== null) {
          reject(error)
        }
        resolve()
      })
  })
}

module.exports.writeFileJson = (filePath, data) => {
  return new Promise((resolve, reject) => {
    let extension = fileExtension(filePath)
    let nameFile = path.basename(filePath, `.${extension}`)
    fs.writeFile(`${imagesRoot}/${nameFile}.json`, JSON.stringify(data), (err) => {
      if (err) {
        reject(err)
      }
      resolve()
    })
  })
}

module.exports.getExifFromFile = (file) => {
  return JSON.parse(fs.readFileSync(`${imagesRoot}/${file}`, 'utf-8'))
}

