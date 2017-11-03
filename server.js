const express = require('express')

const app = express()

app.set('view engine', 'pug')
app.use(express.static('public')) // cualquier usuario pueda acceder a ella

app.get('/', function (req, res) {
  res.render('index', {title: 'LitusGram'})
})

app.get('/signup', function (req, res) {
  res.render('index', {title: 'LitusGram - Signup'})
})

app.get('/signin', function (req, res) {
  res.render('index', {title: 'LitusGram - Signin'})
})

app.get('/api/pictures', function (req, res, next) {
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
  setTimeout(function () {
    res.send(pictures)
  }, 2000)
})

app.listen(3000, function (err) {
  if (err) return console.log('Hay un error'), process.exit(1)

  console.log('Escuchando por el puerto ;)')
})
