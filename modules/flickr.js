const Flickr = require('flickrapi')

const flickrOptions = {
  api_key: 'bd605806f8b66239a6ec2828e7813415',
  secret: '593ab94c29193c55'
}

module.exports.searchByTag = (tag) => { // tag must be seperate by +
  return new Promise((resolve, reject) => {
    Flickr.tokenOnly(flickrOptions, function (error, flickr) {
      flickr.photos.search({
        text: tag,
        per_page: 20
      }, function (err, result) {
        if (err) { console.log(err) }
        console.log(tag)
        let data = []
        for (let i = 0; i < result.photos.photo.length; i++) {
          let res = result.photos.photo[i]
          data.push({id: i, url: `https://farm${res.farm}.staticflickr.com/${res.server}/${res.id}_${res.secret}.jpg`})
        }
        resolve(data)
      })
    })

  })

}