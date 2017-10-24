##Project Javascript

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