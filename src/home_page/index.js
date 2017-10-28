var page = require('page')
var empty = require('empty-element')
var template = require('./template')
var title = require('title')

page('/', function (ctx, next) {
  title('LitusGram')
  var main = document.getElementById('main-container')

  var pictures = [
    {
      user: {
        username: 'Litus',
        avatar: 'https://media-exp1.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAmfAAAAJGEyYmQxNGY1LWEyNjItNGQ2NS05ZWEzLTY4NGI2M2Y1YjgyMw.jpg'
      },
      url: 'http://materializecss.com/images/office.jpg',
      likes: 1024,
      liked: false,
      createAt: new Date()
    },
    {
      user: {
        username: 'Litus',
        avatar: 'https://media-exp1.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAmfAAAAJGEyYmQxNGY1LWEyNjItNGQ2NS05ZWEzLTY4NGI2M2Y1YjgyMw.jpg'
      },
      url: 'http://materializecss.com/images/office.jpg',
      likes: 2,
      liked: false,
      createAt: new Date().setDate(new Date().getDate() - 10)
    }
  ]

  empty(main).appendChild(template(pictures))
})
