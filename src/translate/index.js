var yo = require('yo-yo')

if (!window.Intl) {
  window.Intl = require('intl')
  require('intl/locale-data/jsonp/en-US.js')
  require('intl/locale-data/jsonp/es.js')
}
var IntlRelativeFormat = window.IntlRelativeFormat = require('intl-relativeformat')
var IntlMessageFormat = require('intl-messageformat')

require('intl-relativeformat/dist/locale-data/en.js')
require('intl-relativeformat/dist/locale-data/es.js')

var es = require('./es')
var en = require('./en-US')

var MESSAGES = {}

MESSAGES.es = es
MESSAGES['en-US'] = en

var locale = localStorage.locale || 'es'

module.exports = {

  message: function (text, options) {
  	options = options || {}
    var msg = new IntlMessageFormat(MESSAGES[locale][text], locale, null)
    return msg.format(options)
  },
  date: new IntlRelativeFormat(locale)
}

