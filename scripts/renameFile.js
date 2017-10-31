const fs = require('fs')
const uniqid = require('uniqid')
fs.readdir('public/images', (err, files) => {
  for (let file of files) {
    fs.rename(`public/images/${file}`, `public/images/${uniqid()}.jpg`, (err) => {
      if (err) console.log(err)
    })
  }
})