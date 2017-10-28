## Project Javascript

Para trabajar con node, instalaremos la última versión, y en consola comprovaremos haciendo node -v para saver de qué versión disponemos y asegurarnos que se ha instalado correctamente.

con "cd" accederemos al directorio de nuestro proyecto e inicializaremos el packaje.json con el gestor de paquetes npm para front i back, para ello ejecutaremos el comando:
```
"npm init"
```

y seguiremos la configuración de ejemplo:
```
name: (project_javascript)
version: (1.0.0) 0.1.0
description: Compartir fotos es la nueva comunidad Litus
entry point: (index.js) server.js
test command:
git repository:
keywords: project de javascript
author: @Carles
```

Para instalar nuestro servidor, instalaremos express (framework de node)

Para ello instalaremos como dependencia mediante el comando:

```
npm install --save express
```

--save es para instalarlo de manera global

Bower es un gestor de paquetes para el front

#Browerserify
Nos permite relacionar nuestro código con las dependencias

Es una mala práctica declarar los cdn de materialize/bootstrap... para ello instalaremos como paquete y dependencia.
```
 npm i --save materialize-css
```

Vamos a instalar gulp y sass: 
```
npm i --save gulp-sass
npm i -g gulp
npm i --save gulp-rename
```

Creamos un archivo llamado gulp.js y en él vamos a requerir los paquetes,
y procedemos a configurar nuestro automatizador de tareas:

```
gulp.task('styles', function () {
  gulp
        .src('index.scss')
        .pipe(sass())
        .pipe(rename('app.css'))
        .pipe(gulp.dest('public'))
})

gulp.task('default', ['styles'])
```

Creamos un index.scss, para utilizar sass con materialize:
Primero importamos la ruta donde estar instalado la dependencia mediante un import, y sucesivamente enganchamos nuestro código css debajo.

@import 'node_modules/materialize-css/sass/materialize.scss';

Para crear nuestro archivo con todos los estilos de materialize, bastará en consola utilizar "gulp".

Gulp nos puede crear automáticamente la carpeta public: y podremos indicarle que se guarden todos los archivos que queramos, por defecto css y jss se nos guardarà en public.  

```
gulp.task('assets', function(){
    gulp
        .src('assets/*')
        .pipe(gulp.dest('public'))
})

gulp.task('default', ['styles', 'assets'])
```

Generar favicon para nuestra página: 

https://www.favicon-generator.org/

**Fix** para agregar Javascript en el cliente instalaremos:

```
npm i --save-dev babel-preset-es2015
```

Y luego configuramos en nuestro archivo GULP:

```
gulp.task('scripts', function () {
  browserify('./src/index.js')
    .transform(babel, {presets: ["es2015"]})
    .bundle()
    .pipe(source('index.js'))
});
```

Instalaremos Browserify juntamente con babelify para poder trabajar con babael.
**Browserify** nos permite agrupar en el navegador todas las dependencias requeridas.

```
npm i --save-dev vinyl-source-stream
```

**Libreria page.js**

Para poder navegar con las rutas sin tener que recargar la página

```
npm install --save page
```

Como incluir comandos con scripts, imprescindible al subir nuestro proyecto web a un servidor, y facilitarnos la tarea al hacer un "npm install" 

Para ello nos dirigimos a nuestro archivo package.json
```
"scripts": {
    "build": "gulp",
```

Nos automatiza el que pueda crear automaticamente nuestras carpetas index, assets, sin tener que estar corriendo el comando "gulp"

Automatizar el build de nuestro proyecto

```
npm i --save-dev watchify
```

**Libreria yo-yo.js**--> sigue un poco la filosofia de react, facilita mucho lo que es escribir templates, y poder transformarlos en objetos del doom. 

```
npm install --save yo-yo
```

**Libreria empy-element**
Le pasamos un elemento del doom y lo que va ha hacer es borrar todos los elementos que tenga.

```
npm install --save empty-element

```

**Libreria title**
Para hacer uso de la propiedad title como objeto en el render, y pueda cambiarse en la pestaña del navegador sin tener que recargar la página
```
npm i --save title
```

Cómo obtener el cdn para poder hacer uso de los iconos de FontAwesome: http://fontawesome.io/examples/
 Insertar entre el <head> --> aquí <--</head>
<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css" rel="stylesheet">

**Libreria moment.js**

Para hacer uso de las fechas y hora

```
#Instalar:  npm i --save moment

#Hacer uso: const moment = require('moment')

#Configuración para idioma español: 

require('moment/locale/es')

moment.locale('es')
```


**Libreria format.js**
Para internacionalizar las fechas:

```
npm install intl-relativeformat --save
```

**Libreria intl.js**
Para que safari puedea soportar el format.js incluiremos un "polyfill" ésta librería, e incluiremos 2 requires.

```
npm install intl --save
```

require('intl/locale-data/jsonp/en-US.js')
require('intl/locale-data/jsonp/es.js')

#configuración:
```
if (!window.Intl) {
  window.Intl = require('intl')
  require('intl/locale-data/jsonp/en-US.js')
  require('intl/locale-data/jsonp/es.js')
}
```