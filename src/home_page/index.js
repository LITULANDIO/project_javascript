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
      url: 'https://cloud.lovinmanchester.com/images/autumnmanc.jpg',
      likes: 0,
      liked: false,
      createAt: new Date()
    },
    {
      user: {
        username: 'Litus',
        avatar: 'https://media-exp1.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAmfAAAAJGEyYmQxNGY1LWEyNjItNGQ2NS05ZWEzLTY4NGI2M2Y1YjgyMw.jpg'
      },
      url: 'http://www.blogdelfotografo.com/wp-content/uploads/2015/09/paisaje-t%C3%ADpico.jpg',
      likes: 1,
      liked: false,
      createAt: new Date().setDate(new Date().getDate() - 10)
    }
  ]

  empty(main).appendChild(template(pictures))
})
