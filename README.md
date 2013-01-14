Cinema.js v0.1
======================
Idea y visualización, escrito por [@kinduff][1] en jQuery con la intención de expanderlo a un plugin en próximas versiones.

Agrega un efecto de "Cinema" al video de YouTube seleccionado. Por ahora únicamente funciona en un solo video con el id en el iframe: `cinemajs`.

## Instalación y uso
Clona el proyecto y agrega a tu carpeta de JS la versión de tu elección de Cinema.js, así como copia en la misma carpeta el archivo `bg.png`. Es importante saber que Cinema.js depende de jQuery. Agrega entre las etiquetas `<head></head>` el link a Cinema.js en su versión minificada para hacerla uso en producción:

  <script type="text/javascript" src="cinema.min.js"></script>

El video de tu elección le tendrás que agregar el id en el iframe de la siguiente manera:

  <iframe id="cinemajs" width="560" height="315" src="http://www.youtube.com/embed/VG4udHsS8qA" frameborder="0" allowfullscreen></iframe>

## Demo
Puedes ver un demo en el artículo dedicado en mi blog: [ir al artículo][3]

## Soporte
Al ser la primera versión, no se asegura compatibilidad crossbrowser con navegadores desactualizados o IE. Pull requests e Issues son bienvenidos, pero recuerda que aún es un plugin en desarrollo.

## Licencia
Cinema.js por Alejandro AR ([@kinduff][1])

![Licencia Creative Commons Atribución-NoComercial-CompartirIgual 3.0 Unported](http://i.creativecommons.org/l/by-nc-sa/3.0/88x31.png)

Este obra está bajo una [Licencia Creative Commons Atribución-NoComercial-CompartirIgual 3.0 Unported][2].

[1]: http://twitter.com/kinduff
[2]: http://creativecommons.org/licenses/by-nc-sa/3.0/deed.es
[3]: http://abarcarodriguez.com/blog/cinema-js-enfoque-a-videos-con-jquery
