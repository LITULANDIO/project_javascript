var page = require('page')
var empty = require('empty-element')
var template = require('./template')
var title = require('title')
var request = require('superagent')
var header = require('../header')
var axios = require('axios')

page('/', header, loading, loadPictures, function (ctx, next) {
  title('LitusGram')
  var main = document.getElementById('main-container')

  empty(main).appendChild(template(ctx.pictures))
})

// ctx --> recoge la información, lo utilizamos para ir pasando datos entre middlewares
// next --> es un apuntador al siguiente middleware
function loading (ctx, next) {
  var el = document.createElement('div')
  el.classList.add('loader')
  document.getElementById('main-container').appendChild(el)
  next()
}

function loadPictures (ctx, next) {
  request
	.get('/api/pictures')
	.end(function (err, res) {
  if (err) return console.log(err + '	:( que cojones ha pasado??')

  ctx.pictures = res.body
  next()
})
}
