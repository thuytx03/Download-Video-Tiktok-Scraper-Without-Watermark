const tiktok = require('.')
const url = 'https://www.tiktok.com/@ads.who/video/7152104100639870234'

// tiktok.tiklydown(url)
//      .then(result => {
//           console.log('tiklydown',result)
//      })
//      .catch(e => console.log(e))

// tiktok.tiktokdownload(url)
//      .then(result => {
//           console.log('tiktokdownload',result)
//      })
//      .catch(e => console.log(e))
     
tiktok.tiktokdownload(url)
     .then(result => {
          console.log('ssstik',result)
     })
     .catch(e => console.log(e))
