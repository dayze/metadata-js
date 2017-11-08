const exif = require('./../modules/exif')
require('./../config')
setTimeout(() => {
  exif.write('prju125lj9r32hy0.png').then(() => console.log(exif.getExifFromFile('prju125lj9r32hy0.json')))
},50)