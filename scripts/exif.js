const exiftool = require('node-exiftool')
const ep = new exiftool.ExiftoolProcess()

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
  .catch(console.error)*/

ep
  .open()
  // display pid
  .then((pid) => console.log('Started exiftool process %s', pid))
  .then(() => ep.readMetadata('public/images/Cupertino_Apple.jpg', ['-File:all']))
  .then((data) => {})
  .then(() => ep.close())
  .then(() => console.log('Closed exiftool'))
  .catch(console.error)