var page = require('page')
var header = require('../header')
var title = require('title')
var empty = require('empty-element')
var template = require('./template')

page('/:username', header, loadUser, function (ctx, next) {
  var main = document.getElementById('main-container')
  title('LitusGram - ${ctx.params.username}')
  empty(main).appendChild(template(ctx.user))
})

page('/:username/:id', header, loadUser, function (ctx, next) {
  var main = document.getElementById('main-container')
  title('LitusGram - ${ctx.params.username}')
  empty(main).appendChild(template(ctx.user))
  $('.modal').modal()
  $(`#modal${ctx.params.id}`).modal('open')
})

async function loadUser (ctx, next) {
  try {
    ctx.user = await fetch('/api/user/${ctx.params.username}').then(res => res.json())
    next()
  } catch (err) {
    console.log(err)
  }
}
