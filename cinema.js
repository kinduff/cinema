// Cinema.js
// Alejandro AR -> @kinduff
// http://github.com/kinduff/cinema
// Este obra está bajo una Licencia Creative Commons Atribución-NoComercial-CompartirIgual 3.0 Unported.
// http://creativecommons.org/licenses/by-nc-sa/3.0/deed.es
$(document).ready(function () {
  // Crea overlay
  $("body").append('<div id="cinema-overlay"></div>');
  $("#cinema-overlay").css({
    'display': 'none',
    'width': '100%',
    'height': '100%',
    'position': 'fixed',
    'z-index': '999',
    'top': '0',
    'left': '0',
    'background-image': 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNgYGB4CgAA6gDmE9JG2QAAAABJRU5ErkJggg==)'
  });
  // Estilos iframe
  $("iframe").css({
    'position': 'relative',
    'z-index': 9999
  });
  // Overlay click function
  $("#cinema-overlay").live("click", function () {
    $(this).fadeOut('fast');
    player.pauseVideo();
  });
  // Añadimos js api en iframe
  $("iframe").each(function () {
    var ifr_source = $(this).attr('src');
    var jsapi = "enablejsapi=1";
    if (ifr_source.indexOf('?') != -1) {
      var getQString = ifr_source.split('?');
      var oldString = getQString[1];
      var newString = getQString[0];
      $(this).attr('src', newString + '?' + jsapi + '&' + oldString);
    } else $(this).attr('src', ifr_source + '?' + jsapi);
  });
});
// Cargamos youtube API de manera asíncrona
(function () {
  var s = document.createElement("script");
  s.src = "http://www.youtube.com/player_api";
  var before = document.getElementsByTagName("script")[0];
  before.parentNode.insertBefore(s, before);
})();
// Cargamos api y apuntamos a función onStateChange -> cinemaJs
var player;
function onYouTubePlayerAPIReady() {
  player = new YT.Player('cinemajs', {
    events: {
      "onStateChange": cinemaJs
    }
  });
}
// Si está en estado (play = 1) -> show overlay
// else if (pause = 2) -> hide overlay
function cinemaJs(event) {
  if (event.data == '1') {
    $("#cinema-overlay").fadeIn('fast');
  } else if (event.data == '2') {
    $("#cinema-overlay").fadeOut('fast');
  }
}
