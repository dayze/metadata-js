/* NODE MODULE
   ========================================================================== */
const _ = require('lodash')
const express = require('express')
const fileExtension = require('file-extension')
const path = require('path')
const fs = require('fs')
const multer = require('multer')
const bodyParser = require('body-parser')
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
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse application/json
app.use(bodyParser.json())

app.get('/', (req, res) => { //add uniqid + generer fichier json image
  new Promise((resolve) => {
    fs.readdir(`${imagesRoot}`, (err, files) => {
      let exifsInfo = []
      for (let file of files) {
        let extension = fileExtension(file)
        if (extension === 'json') {
          let exifInfo = exif.getExifFromFile(file)
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
        let basename = path.basename(file, `.${extension}`)
        if (extension === 'json') {
          if (basename === req.params.id) {
            exifInfo = exif.getExifFromFile(file)
            exifInfo.data[0].jsonPath = file
            exifInfo.data[0].basename = basename
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
app.get('/upload', (req, res) => {
  res.render('upload')
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
    storage,
    fileFilter: function (req, file, cb) {
      if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
        return cb(new Error('Only image files are allowed!'))
      }
      cb(null, true);
    }
  }).single('file-to-upload')

  upload(req, res, function (err) {
    if (err) {
      return res.render('upload', {error:true})
    }
    let extension = fileExtension(req.file.filename)
    let fileWithoutExtension = path.basename(req.file.filename, `.${extension}`)
    exif.write(req.file.filename).then(() => {
      let exifInfo = exif.getExifFromFile(`${fileWithoutExtension}.json`)
      exifInfo.data.id = fileWithoutExtension
      res.render('update_metadata', {exifInfo})
    })
  })
})

app.post('/save-metadata',(req, res) => {
  let filePath = req.body.metadata.SourceFile;
  let extension = fileExtension(filePath)
  let fileWithoutExtension = path.basename(filePath, `.${extension}`)
  let updatedMetadata = JSON.stringify(req.body.metadata)
  fs.writeFileSync(`${imagesRoot}/${fileWithoutExtension}.json`, updatedMetadata)
  exif.updateExifFromJson(`${imagesRoot}/${fileWithoutExtension}.json`, filePath)
  let updatedJsonMetadata = {'data': [], 'error': null}
  updatedJsonMetadata.data[0] = req.body.metadata
  fs.writeFileSync(`${imagesRoot}/${fileWithoutExtension}.json`, JSON.stringify(updatedJsonMetadata))
  res.redirect('/')
})

app.get('/technical-page', (req, res) => {
  res.render('technical_page', {})
})

app.listen(3000, () => {
  console.log(`Starting on 3000`)
})