/* NODE MODULE
   ========================================================================== */
const _ = require('lodash')
const express = require('express')
const fileExtension = require('file-extension')
const path = require('path')
const fs = require('fs')
const multer = require('multer')
const formidable = require('formidable')
const uniqid = require('uniqid')

/* PERSONNAL MODULE
   ========================================================================== */
const exif = require('./modules/exif')

/* CONFIG
   ========================================================================== */
require('./config')

let app = express()
app.use('/public', express.static(__dirname + '/public'))
app.set('views', __dirname + '/views')
app.set('view engine', 'twig')
app.set('twig options', {
  strict_variables: false
})

app.get('/', (req, res) => { //add uniqid + generer fichier json image
  new Promise((resolve) => {
    fs.readdir(`${imagesRoot}`, (err, files) => {
      let exifsInfo = []
      for (let file of files) {
        let extension = fileExtension(file)
        if (extension === 'json') {
          let exifInfo = exif.getExifFromFile(`${imagesRoot}/${file}`)
          exifInfo.data.id = path.basename(file, `.${extension}`)
          exifsInfo.push(exifInfo)
        }
      }
      resolve(exifsInfo)
    })
  }).then((exifsInfo) => {
    res.render('index', {exifsInfo})
  })
})

app.get('/detail/:id', (req, res) => {
  new Promise((resolve) => {
    fs.readdir(`${imagesRoot}`, (err, files) => {
      let exifInfo = {}
      for (let file of files) {
        let extension = fileExtension(file)
        if (extension === 'json') {
          if (path.basename(file, `.${extension}`) === req.params.id) {
            exifInfo = exif.getExifFromFile(`${imagesRoot}/${file}`)
            exifInfo.data.jsonPath = `${imagesRoot}/${file}`
            break
          }
        }
      }
      resolve(exifInfo)
    })
  }).then((exifInfo) => {
    Object.keys(exifInfo).length !== 0 ? res.render('detail', {exifInfo}) : res.render('detail', {exifInfo: {error: true}})
  }).catch((e) => {
    console.log(e)
  })
})

/* UPLOAD
   ========================================================================== */
app.get("/upload", (req, res) => {
  res.render("upload")
})

app.post('/update-metadata', (req, res) => {
  let storage = multer.diskStorage({
    destination (req, file, callback) {
      callback(null, `${imagesRoot}`)
    },
    filename (req, file, callback) {
      let extension = fileExtension(file.originalname)
      callback(null, `${uniqid()}.${extension}`)
    }
  })
  let upload = multer({
    storage: storage
  }).single('file-to-upload')

  upload(req, res, function (err) {
    if (err) {
      return res.end({upload: {error:true}})
    }
    exif.writeExif(req.file.path)
    res.render('update_metadata')
  })
})

app.get('/page-technique', (req, res) => {
  res.render('technique_page', {})
})

app.listen(3000, () => {
  console.log(`Starting on 3000`)
})