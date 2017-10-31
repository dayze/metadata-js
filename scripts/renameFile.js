const fs = require('fs')

fs.readdir('public/images', (err, files) => {
  console.log(files)
})