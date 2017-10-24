const express = require('express')

const app = express()

app.set('view engine', 'pug')
app.use(express.static('public')) // cualquier usuario pueda acceder a ella

app.get('/', function (req, res) {
  res.render('index')
})

app.listen(3000, function (err) {
  if (err) return console.log('Hay un error'), process.exit(1)

  console.log('Escuchando por el puerto ;)')
})
