var gulp = require('gulp')
var sass = require('gulp-sass')
var rename = require('gulp-rename')
var babelify = require('babelify')
var babel = require('babel-core')
var browserify = require('browserify')
var source = require('vinyl-source-stream')
var watchify = require('watchify')

gulp.task('styles', function () {
  gulp
		.src('index.scss')
		.pipe(sass())
		.pipe(rename('app.css'))
		.pipe(gulp.dest('public'))
})

gulp.task('assets', function () {
  gulp
		.src('assets/*')
		.pipe(gulp.dest('public'))
})

function compile (watch) {
  var bundle = watchify(browserify('./src/index.js', {debug: true}))

  function rebundle () {
    bundle
	.transform(babelify)
    .bundle()
    .on('error', function (err) { console.log(err); this.emit('end') })
    .pipe(source('index.js'))
    .pipe(rename('app.js'))
    .pipe(gulp.dest('public'))
  }
  if (watch) { // cada vez que hayan cambios utilizara esta funcion
    bundle.on('update', function () {
      console.log('---> Bunding ...')
      rebundle()
    })
  }
  rebundle()
}

gulp.task('build', function () { return compile() })

gulp.task('watch', function () { return compile(true) })

gulp.task('default', ['styles', 'assets', 'build'])
