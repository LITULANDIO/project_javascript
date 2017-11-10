const express = require('express')
const multer = require('multer')
var ext = require('file-extension')
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    cb(null, +Date.now() + '.' + ext(file.originalname))
  }
})

var upload = multer({ storage: storage }).single('picture')

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
     createAt: new Date().getTime()
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
  setTimeout(() => res.send(pictures), 2000)
})

app.post('/api/pictures', function (req, res) {
  upload(req, res, function (err) {
    if (err) {
      return res.status(500).send('Error uploading file')
    }
    res.status(200).send('File upload')
  })
})

app.get('/api/user/:username', function (req, res) {
  const user = {
    username: 'Litus',
    avatar: 'http://www.forfreeimages.com/imagenes/avatar/avatar_g/avatar.jpg',
    pictures: [
      {
        id: 1,
        src: 'https://k38.kn3.net/taringa/2/4/3/0/6/6/13/soyluuchoox/A1D.jpg?1843',
        likes: 23

      },
      {
        id: 2,
        src: 'http://cdn.traveler.es/uploads/images/thumbs/es/trav/2/s/2017/13/cinco_paisajes_para_disfrutar_de_la_primavera_en_espana_996_570x.jpg',
        likes: 5
      },
      {
        id: 3,
        src: 'https://i.pinimg.com/originals/c0/9d/f8/c09df8116570b19381b905653bca9341.jpg',
        likes: 1
      }
    ]
  }
  res.send(user)
})

app.get('/:username', function (req, res) {
  res.render('index', {title: 'LitusGram - ${req.params.username}'})
})

app.get('/:username/:id', function (req, res) {
  res.render('index', {title: 'LitusGram - ${req.params.username}'})
})

app.listen(3000, function (err) {
  if (err) return console.log('Hay un error'), process.exit(1)

  console.log('Escuchando por el puerto ;)')
})
